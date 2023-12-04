import EditUserProfile from "@/component/Profile/edit-profile"
import { Icons } from "@/component/Icons/icons"

function EditProfilePage() {
  return (
    <div className="fixed inset-0 grid h-screen w-screen backdrop-brightness-[30%]">
      <div className="overflow-x-scroll bg-white p-4">
        <Icons.logo />
        <EditUserProfile />
      </div>
    </div>
  )
}

export default EditProfilePage
