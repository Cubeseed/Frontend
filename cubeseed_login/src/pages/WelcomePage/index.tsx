import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SideNavBar from "@/component/sideNavbar/sidenavbar";
import './index.css'
export default function WelcomePage() {

    return (
        <div>
        <SideNavBar/>
            <div className = 'headerHomepage'> WELCOME TO THE HOME PAGE!</div>
        </div>
    )

}
