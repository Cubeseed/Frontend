import DashboardSidePannel from "@/comps/dashboard/DashboardSidePannel";
import Profile from "@/comps/dashboard/DashboardNavbar/DashboardNavbar";
import CourseVerification from "./course_verification";

const profile = () => {
  return (
    <div>
      <DashboardSidePannel />
      <CourseVerification />
      <Profile />
    </div>
  );
};

export default profile;
