import MarketPlaceSideBarStyle from "@/styles/MarketPlaceSideBar.module.css"
import logo from "@assets/cubeseedlogo.svg"
import smallLogo from "@assets/icons/TransparentSmallCubeseed.png"
import Image from "next/image"
import { useState } from "react"

const MarketPlaceSideBar = () => {
  const [selected, setSelected] = useState<boolean>(false)
  const [id, setId] = useState("Home")

  const toggleSideBar = () => {
    setSelected((prev) => !prev)
  }

  const customSelect = (selectedName: string) => {
    if (selectedName == "Home") {
      setId("Home")
    } else if (selectedName === "Purchase") {
      setId("Purchase")
    } else if (selectedName === "Quotes") {
      setId("Quotes")
    } else if (selectedName === "Favorite") {
      setId("Favorite")
    } else if (selectedName === "Profile") {
      setId("Profile")
    }
  }

  return (
    <div
      className={
        selected
          ? MarketPlaceSideBarStyle.sideBarClosedContainer
          : MarketPlaceSideBarStyle.sideBarOpenContainer
      }
      data-collapse={selected}
    >
      <div
        className={
          selected
            ? MarketPlaceSideBarStyle.logoClosed
            : MarketPlaceSideBarStyle.logoOpen
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          onClick={toggleSideBar}
          className={selected ? MarketPlaceSideBarStyle.hidden : ""}
        >
          <path
            d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
            fill="black"
          />
        </svg>
        {selected ? (
          <Image
            alt="small-logo"
            width={56}
            height={56}
            src={smallLogo.src}
            onClick={toggleSideBar}
          />
        ) : (
          <Image
            alt="small-logo"
            width={236}
            height={56}
            src={logo.src}
            onClick={toggleSideBar}
          />
        )}
      </div>
      <div
        className={
          selected
            ? MarketPlaceSideBarStyle.dividerClosed
            : MarketPlaceSideBarStyle.dividerOpen
        }
      ></div>
      <div className={MarketPlaceSideBarStyle.mainOptionsContainer}>
        <div
          className={`${
            selected
              ? MarketPlaceSideBarStyle.mainOptionsClosedContainer
              : MarketPlaceSideBarStyle.mainOptionsOpen
          } ${
            id === "Home" &&
            (selected
              ? MarketPlaceSideBarStyle.selectedClosed
              : MarketPlaceSideBarStyle.selectedOpen)
          }`}
          onClick={() => customSelect("Home")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_5682_66037"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="24" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_5682_66037)">
              <path
                d="M6 19H9V13H15V19H18V10L12 5.5L6 10V19ZM4 21V9L12 3L20 9V21H13V15H11V21H4Z"
                fill={id === "Home" ? "#f0f0f0" : "#002629"}
              />
            </g>
          </svg>
          <p className={selected ? `${MarketPlaceSideBarStyle.hidden}` : ""}>
            Home
          </p>
        </div>
        <div
          className={`${
            selected
              ? MarketPlaceSideBarStyle.mainOptionsClosedContainer
              : MarketPlaceSideBarStyle.mainOptionsOpen
          } ${
            id === "Purchase" &&
            (selected
              ? MarketPlaceSideBarStyle.selectedClosed
              : MarketPlaceSideBarStyle.selectedOpen)
          }`}
          onClick={() => customSelect("Purchase")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_5682_66044"
              maskUnits="userSpaceOnUse"
              x="1"
              y="1"
              width="22"
              height="22"
            >
              <rect x="1" y="1" width="22" height="22" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_5682_66044)">
              <path
                d="M9.25 18.4258V16.5924H20.25V18.4258H9.25ZM9.25 12.9258V11.0924H20.25V12.9258H9.25ZM9.25 7.42578V5.59245H20.25V7.42578H9.25ZM5.58333 19.3424C5.07917 19.3424 4.64757 19.1629 4.28854 18.8039C3.92951 18.4449 3.75 18.0133 3.75 17.5091C3.75 17.0049 3.92951 16.5734 4.28854 16.2143C4.64757 15.8553 5.07917 15.6758 5.58333 15.6758C6.0875 15.6758 6.5191 15.8553 6.87813 16.2143C7.23715 16.5734 7.41667 17.0049 7.41667 17.5091C7.41667 18.0133 7.23715 18.4449 6.87813 18.8039C6.5191 19.1629 6.0875 19.3424 5.58333 19.3424ZM5.58333 13.8424C5.07917 13.8424 4.64757 13.6629 4.28854 13.3039C3.92951 12.9449 3.75 12.5133 3.75 12.0091C3.75 11.5049 3.92951 11.0734 4.28854 10.7143C4.64757 10.3553 5.07917 10.1758 5.58333 10.1758C6.0875 10.1758 6.5191 10.3553 6.87813 10.7143C7.23715 11.0734 7.41667 11.5049 7.41667 12.0091C7.41667 12.5133 7.23715 12.9449 6.87813 13.3039C6.5191 13.6629 6.0875 13.8424 5.58333 13.8424ZM5.58333 8.34245C5.07917 8.34245 4.64757 8.16293 4.28854 7.80391C3.92951 7.44488 3.75 7.01328 3.75 6.50911C3.75 6.00495 3.92951 5.57335 4.28854 5.21432C4.64757 4.8553 5.07917 4.67578 5.58333 4.67578C6.0875 4.67578 6.5191 4.8553 6.87813 5.21432C7.23715 5.57335 7.41667 6.00495 7.41667 6.50911C7.41667 7.01328 7.23715 7.44488 6.87813 7.80391C6.5191 8.16293 6.0875 8.34245 5.58333 8.34245Z"
                fill={id === "Purchase" ? "#f0f0f0" : "#002629"}
              />
            </g>
          </svg>
          <p className={selected ? `${MarketPlaceSideBarStyle.hidden}` : ""}>
            Purchase Orders
          </p>
        </div>
        <div
          className={`${
            selected
              ? MarketPlaceSideBarStyle.mainOptionsClosedContainer
              : MarketPlaceSideBarStyle.mainOptionsOpen
          } ${
            id === "Quotes" &&
            (selected
              ? MarketPlaceSideBarStyle.selectedClosed
              : MarketPlaceSideBarStyle.selectedOpen)
          }`}
          onClick={() => customSelect("Quotes")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_5682_66053"
              maskUnits="userSpaceOnUse"
              x="1"
              y="0"
              width="23"
              height="24"
            >
              <rect x="1" width="22.9565" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_5682_66053)">
              <path
                d="M4.82613 20.0029C4.30004 20.0029 3.84968 19.8071 3.47504 19.4154C3.1004 19.0238 2.91309 18.5529 2.91309 18.0029V6.00293C2.91309 5.45293 3.1004 4.9821 3.47504 4.59043C3.84968 4.19876 4.30004 4.00293 4.82613 4.00293H10.5653L12.4783 6.00293H20.1305C20.6566 6.00293 21.1069 6.19876 21.4816 6.59043C21.8562 6.9821 22.0435 7.45293 22.0435 8.00293V10.8029H20.1305V8.00293H4.82613V18.0029H12.4783V20.0029H4.82613ZM18.5044 14.5279L19.5326 15.6029L15.8261 19.4529V20.5029H16.8305L20.537 16.6529L21.5413 17.7029L17.4283 22.0029H14.3913V18.8279L18.5044 14.5279ZM21.5413 17.7029L18.5044 14.5279L19.8913 13.0779C20.0667 12.8946 20.2899 12.8029 20.5609 12.8029C20.8319 12.8029 21.0551 12.8946 21.2305 13.0779L22.9283 14.8529C23.1037 15.0363 23.1913 15.2696 23.1913 15.5529C23.1913 15.8363 23.1037 16.0696 22.9283 16.2529L21.5413 17.7029Z"
                fill={id === "Quotes" ? "#f0f0f0" : "#002629"}
              />
            </g>
          </svg>
          <p className={selected ? `${MarketPlaceSideBarStyle.hidden}` : ""}>
            Quotations
          </p>
        </div>
        <div
          className={`${
            selected
              ? MarketPlaceSideBarStyle.mainOptionsClosedContainer
              : MarketPlaceSideBarStyle.mainOptionsOpen
          } ${
            id === "Favorite" &&
            (selected
              ? MarketPlaceSideBarStyle.selectedClosed
              : MarketPlaceSideBarStyle.selectedOpen)
          }`}
          onClick={() => customSelect("Favorite")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.2302 9.81863L14.2918 9.22033L11.5802 2.83203L8.86853 9.22998L1.93018 9.81863L7.19908 14.3831L5.61648 21.167L11.5802 17.5676L17.5439 21.167L15.9709 14.3831L21.2302 9.81863ZM11.5802 15.763L7.95178 17.9536L8.91678 13.8234L5.71298 11.0442L9.93968 10.6775L11.5802 6.78853L13.2303 10.6871L17.457 11.0538L14.2532 13.833L15.2182 17.9632L11.5802 15.763Z"
              fill={id === "Favorite" ? "#f0f0f0" : "#002629"}
            />
          </svg>
          <p className={selected ? `${MarketPlaceSideBarStyle.hidden}` : ""}>
            Favorites
          </p>
        </div>
        <div
          className={`${
            selected
              ? MarketPlaceSideBarStyle.mainOptionsClosedContainer
              : MarketPlaceSideBarStyle.mainOptionsOpen
          } ${
            id === "Profile" &&
            (selected
              ? MarketPlaceSideBarStyle.selectedClosed
              : MarketPlaceSideBarStyle.selectedOpen)
          }`}
          onClick={() => customSelect("Profile")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4ZM14 8C14 6.9 13.1 6 12 6C10.9 6 10 6.9 10 8C10 9.1 10.9 10 12 10C13.1 10 14 9.1 14 8ZM18 17C17.8 16.29 14.7 15 12 15C9.3 15 6.2 16.29 6 17.01V18H18V17ZM4 17C4 14.34 9.33 13 12 13C14.67 13 20 14.34 20 17V20H4V17Z"
              fill={id === "Profile" ? "#f0f0f0" : "#002629"}
            />
          </svg>
          <p className={selected ? `${MarketPlaceSideBarStyle.hidden}` : ""}>
            Profiles
          </p>
        </div>
      </div>

      <div className={MarketPlaceSideBarStyle.userSettingContainer}>
        <div
          className={
            selected
              ? MarketPlaceSideBarStyle.mainOptionsClosedContainer
              : MarketPlaceSideBarStyle.mainOptionsOpen
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.3102 21.0298C15.2102 21.7098 14.5902 22.2498 13.8502 22.2498H10.1502C9.41023 22.2498 8.79023 21.7098 8.70023 20.9798L8.43023 19.0898C8.16023 18.9498 7.90023 18.7998 7.64023 18.6298L5.84023 19.3498C5.14023 19.6098 4.37023 19.3198 4.03023 18.6998L2.20023 15.5298C1.85023 14.8698 2.00023 14.0898 2.56023 13.6498L4.09023 12.4598C4.08023 12.3098 4.07023 12.1598 4.07023 11.9998C4.07023 11.8498 4.08023 11.6898 4.09023 11.5398L2.57023 10.3498C1.98023 9.89977 1.83023 9.08977 2.20023 8.46977L4.05023 5.27977C4.39023 4.65977 5.16023 4.37977 5.84023 4.64977L7.65023 5.37977C7.91023 5.20977 8.17023 5.05977 8.43023 4.91977L8.70023 3.00977C8.79023 2.30977 9.41023 1.75977 10.1402 1.75977H13.8402C14.5802 1.75977 15.2002 2.29977 15.2902 3.02977L15.5602 4.91977C15.8302 5.05977 16.0902 5.20977 16.3502 5.37977L18.1502 4.65977C18.8602 4.39977 19.6302 4.68977 19.9702 5.30977L21.8102 8.48977C22.1702 9.14977 22.0102 9.92977 21.4502 10.3698L19.9302 11.5598C19.9402 11.7098 19.9502 11.8598 19.9502 12.0198C19.9502 12.1798 19.9402 12.3298 19.9302 12.4798L21.4502 13.6698C22.0102 14.1198 22.1702 14.8998 21.8202 15.5298L19.9602 18.7498C19.6202 19.3698 18.8502 19.6498 18.1602 19.3798L16.3602 18.6598C16.1002 18.8298 15.8402 18.9798 15.5802 19.1198L15.3102 21.0298ZM10.6202 20.2498H13.3802L13.7502 17.6998L14.2802 17.4798C14.7202 17.2998 15.1602 17.0398 15.6202 16.6998L16.0702 16.3598L18.4502 17.3198L19.8302 14.9198L17.8002 13.3398L17.8702 12.7798L17.8733 12.7528C17.9023 12.5025 17.9302 12.2604 17.9302 11.9998C17.9302 11.7298 17.9002 11.4698 17.8702 11.2198L17.8002 10.6598L19.8302 9.07977L18.4402 6.67977L16.0502 7.63977L15.6002 7.28977C15.1802 6.96977 14.7302 6.70977 14.2702 6.51977L13.7502 6.29977L13.3802 3.74977H10.6202L10.2502 6.29977L9.72023 6.50977C9.28023 6.69977 8.84023 6.94977 8.38023 7.29977L7.93023 7.62977L5.55023 6.67977L4.16023 9.06977L6.19023 10.6498L6.12023 11.2098C6.09023 11.4698 6.06023 11.7398 6.06023 11.9998C6.06023 12.2598 6.08023 12.5298 6.12023 12.7798L6.19023 13.3398L4.16023 14.9198L5.54023 17.3198L7.93023 16.3598L8.38023 16.7098C8.81023 17.0398 9.24023 17.2898 9.71023 17.4798L10.2402 17.6998L10.6202 20.2498ZM15.5002 11.9998C15.5002 13.9328 13.9332 15.4998 12.0002 15.4998C10.0672 15.4998 8.50023 13.9328 8.50023 11.9998C8.50023 10.0668 10.0672 8.49977 12.0002 8.49977C13.9332 8.49977 15.5002 10.0668 15.5002 11.9998Z"
              fill="#002629"
            />
          </svg>
          <p className={selected ? `${MarketPlaceSideBarStyle.hidden}` : ""}>
            Settings
          </p>
        </div>
        <div
          className={
            selected
              ? MarketPlaceSideBarStyle.mainOptionsClosedContainer
              : MarketPlaceSideBarStyle.mainOptionsOpen
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 15 20"
            fill="none"
          >
            <path
              d="M9 20L8.75 17H8.5C6.13333 17 4.125 16.175 2.475 14.525C0.825 12.875 0 10.8667 0 8.5C0 6.13333 0.825 4.125 2.475 2.475C4.125 0.825 6.13333 0 8.5 0C9.68333 0 10.7875 0.220833 11.8125 0.6625C12.8375 1.10417 13.7375 1.7125 14.5125 2.4875C15.2875 3.2625 15.8958 4.1625 16.3375 5.1875C16.7792 6.2125 17 7.31667 17 8.5C17 9.75 16.7958 10.95 16.3875 12.1C15.9792 13.25 15.4208 14.3167 14.7125 15.3C14.0042 16.2833 13.1625 17.175 12.1875 17.975C11.2125 18.775 10.15 19.45 9 20ZM11 16.35C12.1833 15.35 13.1458 14.1792 13.8875 12.8375C14.6292 11.4958 15 10.05 15 8.5C15 6.68333 14.3708 5.14583 13.1125 3.8875C11.8542 2.62917 10.3167 2 8.5 2C6.68333 2 5.14583 2.62917 3.8875 3.8875C2.62917 5.14583 2 6.68333 2 8.5C2 10.3167 2.62917 11.8542 3.8875 13.1125C5.14583 14.3708 6.68333 15 8.5 15H11V16.35ZM8.475 13.975C8.75833 13.975 9 13.875 9.2 13.675C9.4 13.475 9.5 13.2333 9.5 12.95C9.5 12.6667 9.4 12.425 9.2 12.225C9 12.025 8.75833 11.925 8.475 11.925C8.19167 11.925 7.95 12.025 7.75 12.225C7.55 12.425 7.45 12.6667 7.45 12.95C7.45 13.2333 7.55 13.475 7.75 13.675C7.95 13.875 8.19167 13.975 8.475 13.975ZM7.75 10.8H9.25C9.25 10.3 9.3 9.95 9.4 9.75C9.5 9.55 9.81667 9.18333 10.35 8.65C10.65 8.35 10.9 8.025 11.1 7.675C11.3 7.325 11.4 6.95 11.4 6.55C11.4 5.7 11.1125 5.0625 10.5375 4.6375C9.9625 4.2125 9.28333 4 8.5 4C7.76667 4 7.15 4.20417 6.65 4.6125C6.15 5.02083 5.8 5.51667 5.6 6.1L7 6.65C7.08333 6.36667 7.24167 6.0875 7.475 5.8125C7.70833 5.5375 8.05 5.4 8.5 5.4C8.95 5.4 9.2875 5.525 9.5125 5.775C9.7375 6.025 9.85 6.3 9.85 6.6C9.85 6.88333 9.76667 7.1375 9.6 7.3625C9.43333 7.5875 9.23333 7.81667 9 8.05C8.41667 8.55 8.0625 8.94583 7.9375 9.2375C7.8125 9.52917 7.75 10.05 7.75 10.8Z"
              fill="#002629"
            />
          </svg>
          <p className={selected ? `${MarketPlaceSideBarStyle.hidden}` : ""}>
            Support
          </p>
        </div>
        <div
          className={
            selected
              ? MarketPlaceSideBarStyle.mainOptionsClosedContainer
              : MarketPlaceSideBarStyle.mainOptionsOpen
          }
        >
          <p className={selected ? `${MarketPlaceSideBarStyle.hidden}` : ""}>
            Sign Out
          </p>
        </div>
      </div>
    </div>
  )
}

export default MarketPlaceSideBar
