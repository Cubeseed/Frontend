import UserProfile from "@/component/Profile/profile"
import React from "react"
import EditProfilePage from "./edit/page"
const base64 = require("base-64")

async function getUserProfile() {
  const login = process.env.API_USER
  const password = process.env.API_PASSWORD

  const response = await fetch(
    "http://ec2-16-171-43-115.eu-north-1.compute.amazonaws.com:8000/api/userprofile/1",
    {
      headers: new Headers({
        Authorization: `Basic ${base64.encode(`${login}:${password}`)}`,
      }),
      cache: "no-store",
    }
  )
  return await response.json()
}

interface Props {
  searchParams: Record<string, string> | null | undefined
}

async function ProfilePage({ searchParams }: Props) {
  const profile = await getUserProfile()
  const edit = searchParams?.edit

  return (
    <div className="p-8">
      <UserProfile profile={profile} />
      {edit && <EditProfilePage />}
    </div>
  )
}

export default ProfilePage
