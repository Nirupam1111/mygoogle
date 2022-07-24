import React from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'

const User = () => {
  const {data: session} = useSession();
  if(session){
    return (
      <>
         <img onClick={signOut} src={session.user.image} alt="" className="h-10 w10 rounded-full cursor-pointer hover:bg-gray-200 p-1" />
      </>
    )
  }
  return (
    <>
      <button onClick={signIn} className="text-white cursor-pointer bg-blue-500 px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md">Sign In</button>
    </>
  )
}

export default User
