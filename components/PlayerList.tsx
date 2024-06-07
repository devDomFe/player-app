"use client";

import React, { useEffect } from "react";

//api
import playersApi from "@/services/players.api";

//redux
import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import { RootState } from "@/lib/store";
import { setPlayerList } from "@/lib/Slice/Players.slice";

export const PlayerList = () => {
  const dispatch = useAppDispatch();
  const playerList = useAppSelector(
    (state: RootState) => state.playerList.playersList
  );

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await playersApi.fetchPlayersList();
        // console.log("data: ", response.data);
        dispatch(setPlayerList(response.data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlayers();
  }, []);
  return (
    <div className="player-list-component p-2 grid grid-cols-1 divide-y-[1px] divide-inherit border-[1px] border-gray-400 rounded-md h-[32rem] overflow-y-auto">
      {playerList.map((item, index) => (
        <div
          className="flex justify-between px-2 py-4 player-component"
          key={index}
        >
          <div className="flex flex-col gap-2 player-details">
            <div className="flex gap-2 player-name">
              <p className="text-lg font-semibold font-montserrat">
                {item.nameFullLocal}
              </p>
              <p className="text-lg text-gray-600 font-montserrat">USA</p>
              <div className="flex items-center justify-center px-2 bg-green-600 rounded-md">
                <p className="text-xs font-semibold text-white font-montserrat">
                  Active
                </p>
              </div>
            </div>
            <p className="text-2xl font-bold font-montserrat">
              Los Angeles Lakers
            </p>
          </div>
          <div className="bg-blue-600 rounded-full player-image size-20"></div>
        </div>
      ))}
    </div>
  );
};
