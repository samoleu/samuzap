"use client";

import React from "react";
import Image from "next/image";

interface ProfileCardProps {
  profile: {
    accountRef: string;
    profileId: string;
    profileName: string;
    activityStatus: string;
    bio: string;
    profilePicture: string;
    friends: string[];
    communityRefs: string[];
  };
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  
  const getActivityColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "online":
        return "border-onlineActivity";
      case "offline":
        return "border-offlineActivity";
      case "do not disturb":
        return "border-dndActivity";
      default:
        return "border-offlineActivity";
    }
  };

  const activityColor = getActivityColor(profile.activityStatus);

  const truncatedName =
    profile.profileName.length > 16
      ? `${profile.profileName.substring(0, 13)}...`
      : profile.profileName;

  const truncatedBio =
    profile.bio.length > 102
      ? `${profile.bio.substring(0, 100)}...`
      : profile.bio;

  return (
    <div className="relative w-80 h-[32rem] rounded-lg overflow-hidden shadow-lg bg-[rgba(221,219,255,0.75)] backdrop-blur-lg">
      <div
        className="absolute top-0 left-0 w-full h-1/3 bg-[rgba(252,252,255,0.4)]">
      </div>
      <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <div className="w-[15.125rem] h-[15.125rem]">
          <Image
            src={profile.profilePicture}
            alt="Profile Avatar"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="absolute top-[18.5rem] left-1/2 transform -translate-x-1/2 w-full text-center">
        <p className="text-xl font-bold text-black">{truncatedName}</p>
      </div>
      <div className="absolute top-[21rem] left-1/2 transform -translate-x-1/2 w-[90%] h-24">
        <p className="w-full h-full text-center text-md text-black bg-[rgba(252,252,255,0.3)] p-3 rounded-lg break-words overflow-hidden">
          {truncatedBio}
        </p>
      </div>
      <div className="absolute bottom-[-4.25rem] left-1/2 transform -translate-x-1/2">
        <div
          className={`w-[8.625rem] h-[8.625rem] rounded-full border-[1rem] flex items-center justify-center cursor-pointer ${activityColor}`}>
          <span className="absolute text-lg font-semibold text-black top-[2rem] select-none">
            {profile.activityStatus}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
