
export default function UserDetailsForm() {
    return (
       <form style={{display:'flex', flexDirection:'column', justifyContent:'center', width:'50%', margin:'auto' }}>
         <div className="input-wrapper">
            <label htmlFor="first">Full Name</label>
            <input type="text" />
        </div>
         <div className="input-wrapper">
            <label htmlFor="first">Email</label>
            <input type="text" />
        </div>
         <div className="input-wrapper">
            <label htmlFor="first">Password</label>
            <input type="text" />
        </div>
         <div className="input-wrapper">
            <label htmlFor="first">Confirm password</label>
            <input type="text" />
        </div>
       </form>
    )
}
