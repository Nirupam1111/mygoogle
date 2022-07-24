import React from 'react'
import Header  from '../../components/Header'
import {getProviders} from 'next-auth/react';
import {useSession, signIn, signOut} from 'next-auth/react'

const SignIn = ({providers}) => {
  return (
    <>
        <Header />
        <div className="mt-40">
            {Object.values(providers).map(provider => (
                <div key={provider.name} className="flex items-center flex-col">
                    <img className="w-52 object-cover" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" />
                    <p className="text-sm italic my-10 text-center">This website is created for learning purposes...</p>
                    <button className="bg-red-400 rounded-lg text-white hover:bg-red-500 p-3 " onClick={()=> signIn(provider.id, {callbackUrl: "/"})}>Sign in with {provider.name}</button>
                </div>
            ))}
        </div>
    </>
  )
}

export async function getServerSideProps(){
    const providers = await getProviders();
    return{
        props: {providers}
    };
}

export default SignIn
