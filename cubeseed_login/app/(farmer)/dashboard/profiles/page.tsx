import UserProfile from '@cs/components/profile'
import React from 'react'
const base64 = require("base-64")


async function getUserProfile() {
  const login = process.env.API_USER
  const password = process.env.API_PASSWORD

  const response = await fetch(
    "http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userprofile/1",
    {
      headers: new Headers({
        "Authorization": `Basic ${base64.encode(`${login}:${password}`)}`
      }),
      cache: 'no-store'
    }
  );
  return await response.json();
}

async function ProfilePage() {
  const profile = await getUserProfile()

  return (
    <div className='p-8'>
      <UserProfile profile={profile}/>
    </div>
  )
}

export default ProfilePage