import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="login">
        <form>
            <input type='email' placeholder='Enter Your Email' />
            <input type='password' placeholder='Enter Your Password' />
            <button className='loginBTN'>Login In</button>
            <p>
                OR
            </p>
            <Link href={'/signup'} ><p>Register</p></Link>
        </form>
    </div>
  )
}

export default page