import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="login">
    <form>
        <input type='text' placeholder='Enter Your Name' />
        <input type='email' placeholder='Enter Your Email' />
        <input type='password' placeholder='Enter Your Password' />
        <button className='loginBTN'>Sign Up</button>
        <p>
            OR
        </p>
        <Link href={'/login'} ><p>Login</p></Link>
    </form>
</div>
  )
}

export default page