/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{}

export const Input = ({...rest}:InputProps) => {
  return (
    <input className='w-full bg-neutral-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow'
    {...rest}
    />
  )
}

