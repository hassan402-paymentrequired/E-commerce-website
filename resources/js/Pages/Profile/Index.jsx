import React from 'react'
import ProfileLayout from '../Layout/ProfileLayout'
import { useForm } from '@inertiajs/react'

const Index = ({auth}) => {
  
  
  return (
    
    <ProfileLayout user={auth}>
        <h1 className='font-bold '>Personal Information</h1>

        <form  className='p-3 w-full space-y-4 flex flex-col'>
            <div className="flex flex-col space-y-1">
                <label htmlFor="email" className='text-xs font-bold'>Email Address</label>
                <input type="text" name="" id="email" value={auth.email} className='bg-transparent p-2 border rounded' />
            </div>
            <div className="flex flex-col space-y-1">
                <label htmlFor="name" className='text-xs font-bold'>Full name</label>
                <input type="text" name="" id="name" value={auth.name} className='bg-transparent p-2 border rounded' />
                <p className='text-sm font-semibold my-1'>Change your account details, or <a href="#" className='underline'>click here</a> to change your password</p>
            </div>

            <button type='submit' className='px-4 py-2 rounded text-sm font-bold bg-black text-white'>Update Account</button>
        </form>
    </ProfileLayout>
  )
}

export default Index;


