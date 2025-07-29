/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string;
  required?: boolean;
}

export const Input = ({label, required, ...rest}:InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-white mb-1 md:mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input className='w-full bg-neutral-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow'
        {...rest}
      />
    </div>
  )
}