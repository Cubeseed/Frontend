import DashboardSidePannelStyle from "@/styles/DashboardSidePannel.module.scss";
import DashboardSidePannelButtonContainerStyle from "@/styles/DashboardSidePannelButtonContainer.module.scss";
import cubeseed from "../../../public/cubeseed.png";
import Home from "../../../public/assets/icons/home.jpg";

import Image from "next/image";

const DashboardSidePannel = () => {
  return (
    <div className={DashboardSidePannelStyle.DashboardSidePannel}>
      <div>
        <Image src={logo} width={150} height={100} alt="cubeseed logo" />
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
                src={homeIcon}
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
                src={framPlannerIcon}
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
                src={purchaseOrderIcon}
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
                src={porfileIcon}
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
                src={supportIcon}
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
                src={settingIcon}
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
  );
};

export default DashboardSidePannel;
