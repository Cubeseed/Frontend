import EditUserProfile from "@cs/components/edit-profile"

function EditProfilePage() {
  return (
    <div className="fixed inset-0 grid h-screen w-screen backdrop-brightness-[30%]">
      <div className="overflow-x-scroll bg-white">
        <EditUserProfile />
      </div>
    </div>
  )
}

export default EditProfilePage
