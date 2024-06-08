"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/navigation";

//redux
import { useGetListOfQuery } from "@/lib/Slice/PlayerApi";

//asset
import fallbackImageUrl from "../public/lockedPlayers.png";

export const PlayerList = () => {
  const router = useRouter();

  const { data, isLoading, isSuccess, isError, error } =
    useGetListOfQuery("persons");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-600";
      case "DECEASED":
        return "bg-red-600";
      case "INACTIVE":
        return "bg-yellow-600";
      case "PENDING":
        return "bg-blue-600";
      case "UNREGISTERED ":
        return "bg-black";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="player-list-component p-2 grid grid-cols-1 divide-y-[1px] divide-inherit border-[1px] border-gray-400 rounded-md h-[32rem] overflow-y-auto">
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
          <div
            className="flex justify-between items-center px-2 py-4 player-component cursor-pointer"
            key={index}
            onClick={() => router.push(`/players/${item.personId}`)}
          >
            <div className="flex flex-col gap-2 player-details">
              <div className="flex gap-2 player-name">
                <p className="text-lg font-semibold font-montserrat">
                  {item.nameFullLocal}
                </p>
                <p className="text-lg text-gray-600 font-montserrat">
                  {item.nationality}
                </p>
                <div
                  className={`flex items-center justify-center px-2 rounded-md ${getStatusColor(
                    item.status
                  )}`}
                >
                  <p className="text-xs font-semibold text-white font-montserrat">
                    {item.status}
                  </p>
                </div>
              </div>
            </div>
            {item.images && item.images.length > 0 && item.images[0].url ? (
              <Image
                priority
                loader={() => item.images[0].url}
                src={item.images[0].url}
                width={75}
                height={75}
                unoptimized={true}
                alt={`${item.nameFullLocal} image`}
              />
            ) : (
              <Image
                src={fallbackImageUrl}
                width={75}
                height={75}
                quality={100}
                alt={`${item.nameFullLocal} image`}
              />
            )}
          </div>
        ))
      ) : (
        <div>No players found.</div>
      )}
    </div>
  );
};
