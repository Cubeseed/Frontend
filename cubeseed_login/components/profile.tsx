"use client";

import Image, { StaticImageData } from "next/image";
import star from "@cs/public/star.svg";
import farmer from "@cs/public/farmer1.png";
import { UserProfileType } from "@cs/types";
import ReviewCard from "./pieces/review-card";
import { useState } from "react";
import ImageBox from "./pieces/image-box";
// import place from "@cs/assets/svg/place_24px.svg";

interface UserProfile {
  profile: UserProfileType;
}

function UserProfile({ profile }: UserProfile) {
  const [src, setSrc] = useState<string | StaticImageData>(() => farmer);

  console.log({ profile });

  return (
    <div>
      <h1 className="font-semibold text-[32px]">My Profile</h1>
      <section className="flex gap-6 mt-8">
        <ImageBox src={src} setSrc={setSrc} />
        <div className="flex flex-col gap-6">
          <div className="font-medium text-xl space-y-1">
            <h2 className="flex items-center gap-4 font-bold text-5xl">
              {profile.full_name}
              <span className="flex">
                {[...Array(5)].map((el) => (
                  <Image
                    key={el}
                    src={star}
                    alt="star"
                    width={25}
                    height={25}
                  />
                ))}
              </span>
            </h2>
            <p>Farm name</p>
            <p>0.5 hectares</p>
            <p>Farm Cluster Name #0000</p>
            <p className="flex items-center gap-2 text-primary-200">
              {profile.city}, {profile.country}
              <span>
                <svg
                  width="19"
                  height="26"
                  viewBox="0 0 19 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 9.34771C0 4.17976 4.17976 0 9.34771 0C14.5157 0 18.6954 4.17976 18.6954 9.34771C18.6954 14.9163 12.793 22.5948 10.376 25.5193C9.84181 26.1602 8.86697 26.1602 8.33282 25.5193C5.90241 22.5948 0 14.9163 0 9.34771ZM6.00928 9.34766C6.00928 11.1905 7.50492 12.6861 9.34775 12.6861C11.1906 12.6861 12.6862 11.1905 12.6862 9.34766C12.6862 7.50483 11.1906 6.00919 9.34775 6.00919C7.50492 6.00919 6.00928 7.50483 6.00928 9.34766Z"
                    fill="#51A1A6"
                  />
                </svg>
              </span>
            </p>
          </div>
          <div className="space-x-3">
            <a href="#" className="underline">
              Edit Profile
            </a>
            <a href="#" className="underline">
              Documents Profile
            </a>
          </div>
        </div>
      </section>

      <div className="flex justify-between gap-16 mt-16">
        <div className="space-y-12">
          <section className="w-full bg-primary-900 p-6 rounded-[10px] space-y-8">
            <h3 className="text-black text-2xl font-semibold">About Me</h3>
            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate...
            </p>
          </section>
          <section className="w-full bg-primary-400 p-4 text-white space-y-6 min-h-[205px] rounded-[15px]">
            <h4 className="text-xl font-medium">Past activity</h4>
            <div className="flex justify-between">
              <div>
                <p className="text-[22px] leading-[36px] font-medium">
                  Order #0000020
                </p>
                <p>5/2/23</p>
              </div>
              <div className="text-right">
                <p className="text-[22px] leading-[36px] font-medium">
                  $200.02
                </p>
                <p>5/2/23</p>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          {[...Array(3)].map((el) => (
            <ReviewCard key={el} src={src} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
