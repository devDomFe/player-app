"use client";

import React from "react";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";

//asset
import fallbackImageUrl from "../public/lockedPlayers.png";

//redux
import { useGetPlayerQuery } from "@/lib/Slice/PlayerApi";

interface PlayerProfileProps {
  personId: string;
}

export const PlayerProfile: React.FC<PlayerProfileProps> = ({ personId }) => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetPlayerQuery(personId);
  return (
    <>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <CircularProgress />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center">
          <p className="font-poppins font-bold text-2xl">
            Error: {"message" in error ? error.message : ""}
          </p>
        </div>
      ) : isSuccess && data && data.data ? (
        data.data.map((item, index) => (
          <div className="flex lg:flex-row flex-col-reverse gap-2 " key={index}>
            <div className="flex-1 flex flex-col gap-5 lg:gap-10 ">
              <div className="flex flex-col lg:gap-1 items-center lg:items-start">
                <p className="font-montserrat text-2xl font-bold">
                  {item.nameGivenLocal}
                </p>
                <p className="font-montserrat text-5xl font-bold">
                  {item.nameFamilyLocal}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 place-items-center lg:place-items-start">
                <div className="flex flex-col justify-center items-start">
                  <p className="font-montserrat border-b-2 border-red-600">
                    Nationality
                  </p>
                  <p className="font-montserrat font-semibold">
                    {item.nationality}
                  </p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-montserrat border-b-2 border-red-600">
                    Status
                  </p>
                  <p className="font-montserrat font-semibold">{item.status}</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-montserrat border-b-2 border-red-600">
                    Born
                  </p>
                  <p className="font-montserrat font-semibold">{item.dob}</p>
                </div>
                <div className="flex flex-col justify-center items-start">
                  <p className="font-montserrat border-b-2 border-red-600">
                    Gender
                  </p>
                  <p className="font-montserrat font-semibold">{item.gender}</p>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              {item.images && item.images.length > 0 && item.images[0].url ? (
                <Image
                  priority
                  loader={() => item.images[0].url}
                  src={item.images[0].url}
                  width={500}
                  height={500}
                  unoptimized={true}
                  alt={`${item.nameFullLocal} image`}
                />
              ) : (
                //
                <Image
                  src={fallbackImageUrl}
                  width={500}
                  height={500}
                  quality={100}
                  alt={`${item.nameFullLocal} image`}
                />
              )}
            </div>
            <div className="lg:hidden justify-center items-center flex">
              {item.images && item.images.length > 0 && item.images[0].url ? (
                <Image
                  priority
                  loader={() => item.images[0].url}
                  src={item.images[0].url}
                  width={200}
                  height={200}
                  unoptimized={true}
                  alt={`${item.nameFullLocal} image`}
                />
              ) : (
                //
                <Image
                  src={fallbackImageUrl}
                  width={200}
                  height={200}
                  quality={100}
                  alt={`${item.nameFullLocal} image`}
                />
              )}
            </div>
          </div>
        ))
      ) : (
        <div>No players found.</div>
      )}
    </>
  );
};
{
  /* <p className="font-montserrat">{item.nameFamilyLocal}</p>
<p className="font-montserrat">{item.nameGivenLocal}</p>
<p className="font-montserrat">{item.nationality}</p>
<p className="font-montserrat">{item.status}</p>
<p className="font-montserrat">{item.dob}</p>
<p className="font-montserrat">{item.gender}</p> */
}
