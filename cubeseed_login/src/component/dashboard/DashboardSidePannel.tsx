import DashboardSidePannelStyle from "@/styles/DashboardSidePannel.module.scss"
import DashboardSidePannelButtonContainerStyle from "@/styles/DashboardSidePannelButtonContainer.module.scss"
import cubeseed from "@assets/cubeseedlogo.svg"
import Home from "@assets/icons/home.jpg"
import Image from "next/image"

const DashboardSidePannel = () => {
  return (
    <div className={DashboardSidePannelStyle.DashboardSidePannel}>
      <div>
        <Image src={cubeseed} width={90} height={90} alt="cubeseed logo" />
      </div>
      <div className={DashboardSidePannelStyle.divider}></div>
      <h1 className={DashboardSidePannelStyle.title}>Hello User,</h1>

      <div
        className={
          DashboardSidePannelButtonContainerStyle.DashboardSidePannelButtonContainer
        }
      >
        <div className={DashboardSidePannelButtonContainerStyle.MainButtons}>
          <button className={DashboardSidePannelButtonContainerStyle.button}>
            <div className={DashboardSidePannelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePannelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Home
            </div>
            100+
          </button>
          <button className={DashboardSidePannelButtonContainerStyle.button}>
            <div className={DashboardSidePannelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePannelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Farm Planner
            </div>
            100+
          </button>
          <button className={DashboardSidePannelButtonContainerStyle.button}>
            <div className={DashboardSidePannelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePannelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Purchase Orders
            </div>
            100+
          </button>
          <button className={DashboardSidePannelButtonContainerStyle.button}>
            <div className={DashboardSidePannelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePannelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Profile
            </div>
            100+
          </button>
        </div>

        <div
          className={
            DashboardSidePannelButtonContainerStyle.SupportSettingsButtons
          }
        >
          <button className={DashboardSidePannelButtonContainerStyle.button}>
            {" "}
            <div className={DashboardSidePannelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePannelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Support
            </div>
          </button>

          <button className={DashboardSidePannelButtonContainerStyle.button}>
            {" "}
            <div className={DashboardSidePannelButtonContainerStyle.button_div}>
              <Image
                className={DashboardSidePannelButtonContainerStyle.icon}
                src={Home}
                width={30}
                height={30}
                alt="button icon"
              />
              Settings
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardSidePannel
