"use client"
import React, { useActionState } from 'react'
import { Input } from '../atoms/Input'
import Button from '../atoms/Button'
import { useFormStatus } from 'react-dom'
import { SendForm } from '../../../actions/resend'
import { BiCheckCircle, BiError } from 'react-icons/bi'
import Image from 'next/image'

const BookADemo = () => {
    const [state, formAction] = useActionState(SendForm, {
        message: ""
    })
    return (
        <section className="relative py-16 md:py-24 bg-primary overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>
            
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                {/* Left side content */}
                <div className="w-full md:w-5/12 text-left">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-xs md:text-sm font-medium mb-3">
                        Streamline Your Procurement
                    </span>
                    <h2 className="text-3xl font-bold text-white mb-4">Optimize Your P2P Process with Our Solution</h2>
                    <p className="text-lg text-slate-300 mb-8">
                        Experience how our platform can revolutionize your procurement workflow, reduce cycle times, and drive significant cost savings for your organization. Our end-to-end solution transforms how your business handles purchasing, from requisition to payment.
                    </p>
                    
                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-6">
                        <Image 
                            src="/procurement-3.webp"
                            alt="Digital procurement dashboard with analytics" 
                            layout="fill" 
                            objectFit="cover"
                            className="rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-70"></div>
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                            <p className="text-sm md:text-base font-medium">Advanced analytics dashboard for complete procurement visibility</p>
                        </div>
                    </div>
                </div>
                
                {/* Right side form */}
                <div className="w-full md:w-7/12">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-5 sm:p-8 border border-white/20">
                        <h3 className="text-2xl font-bold text-white mb-2">Request Your Personalized Demo</h3>
                        <p className="text-slate-300 mb-6">See how our solution addresses your specific procurement challenges</p>
                        
                        <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-white mb-1 md:mb-2">Full Name</label>
                                <Input
                                    type="text"
                                    name="name"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-white mb-1 md:mb-2">Work Email</label>
                                <Input
                                    type="email"
                                    name="email"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                                    placeholder="Enter your work email"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-white mb-1 md:mb-2">Company</label>
                                <Input
                                    type="text"
                                    name="company"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                                    placeholder="Your organization name"
                                    required
                                />
                            </div>
                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-white mb-1 md:mb-2">Phone Number</label>
                                <Input
                                    type="text"
                                    name="phone"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                                    placeholder="Your contact number"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <label className="block text-sm font-medium text-white mb-1 md:mb-2">Message</label>
                                <textarea
                                    rows={3}
                                    name="message"
                                    className="w-full px-3 md:px-4 py-2 md:py-3 rounded-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-slate-400 text-sm md:text-base"
                                    placeholder="Tell us about your procurement needs..."
                                    required
                                />
                            </div>
                            <SubmitButton />
                            {state.message === "success" && (
                                <div className='col-span-2 flex items-center space-x-2 text-green-400 bg-green-500/10 p-3 rounded-lg'>
                                    <BiCheckCircle size={24} />
                                    <p aria-live='polite' className='text-base not-sr-only'>Thank you! Your demo request has been received. Our procurement specialists will contact you within 24 hours to schedule.</p>
                                </div>
                            )}
                            {state.message === "error" && (
                                <div className='col-span-2 flex items-center space-x-2 text-red-400 bg-red-500/10 p-3 rounded-lg'>
                                    <BiError size={24} />
                                    <p aria-live='polite' className='text-base not-sr-only'>Failed to send message. Please try again or contact us directly.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BookADemo


const SubmitButton = () => {
    const { pending: isPending } = useFormStatus()
    return (
        <div className="col-span-1 md:col-span-2">
            <Button
                type="submit"
                disabled={isPending}
                className={`w-full cursor-pointer ${isPending ? 'bg-blue-700' : 'bg-blue-600 hover:bg-blue-500'} flex justify-center items-center text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold transition-colors shadow-lg shadow-blue-500/30`}
            >
                {isPending ? 'Submitting...' : 'Request Your Procurement Demo'}
            </Button>
            <p className="text-center mt-3 text-xs md:text-sm text-slate-400">
                Our procurement specialists will get back to you within 24 hours
            </p>
        </div>
    )
}