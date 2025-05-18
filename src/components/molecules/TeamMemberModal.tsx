"use client";

import React, { useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import Image from 'next/image';

interface TeamMemberModalProps {
  isOpen: boolean;
  closeModal: () => void;
  member: {
    name: string;
    role: string;
    image: string;
    description: string;
    fullBio?: string;
  };
}

const TeamMemberModal = ({ isOpen, closeModal, member }: TeamMemberModalProps) => {
  const [animationClass, setAnimationClass] = useState('opacity-0 scale-95');
  const [backdropClass, setBackdropClass] = useState('opacity-0');

  // Handle animations
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isOpen) {
      // Small delay for the animation to work properly
      timeoutId = setTimeout(() => {
        setBackdropClass('opacity-100');
        setAnimationClass('opacity-100 scale-100');
      }, 10);
    } else {
      setBackdropClass('opacity-0');
      setAnimationClass('opacity-0 scale-95');
    }
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 w-full h-full z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${backdropClass}`}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        onClick={closeModal}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div 
        className={`bg-white rounded-2xl max-w-2xl w-full mx-auto max-h-[90vh] overflow-auto shadow-xl z-10 relative transform transition-all duration-300 ease-in-out ${animationClass}`}
        style={{ margin: 'auto' }}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close button */}
        <button
          type="button"
          className="sticky top-4 right-4 float-right text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full p-1 z-10 transition-colors bg-white/80 backdrop-blur-sm"
          onClick={closeModal}
          aria-label="Close"
        >
          <FaTimes size={20} />
        </button>
        
        <div className="p-6 sm:p-8 clear-both">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3">
              <div className="aspect-square rounded-xl overflow-hidden relative shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority
                />
              </div>
            </div>
            
            <div className="w-full md:w-2/3">
              <h3 id="modal-title" className="text-2xl font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-4">{member.role}</p>
              
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">{member.description}</p>
                {member.fullBio && (
                  <div dangerouslySetInnerHTML={{ __html: member.fullBio }} className="space-y-4" />
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-8 flex justify-end border-t border-gray-100 pt-4">
            <button
              type="button"
              className="inline-flex justify-center rounded-md px-6 py-2.5 text-sm font-medium bg-primary text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberModal;