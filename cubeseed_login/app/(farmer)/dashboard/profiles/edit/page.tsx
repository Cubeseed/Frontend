import EditUserProfile from "@cs/components/edit-profile"
import { Icons } from "@cs/components/icons"

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
