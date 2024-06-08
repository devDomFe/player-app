import React, { ReactNode } from "react";
import { PlayerListLength } from "@/components/PlayerListLength";

interface PlayerRouteProps {
  children: ReactNode;
}

export const PlayerRoute: React.FC<PlayerRouteProps> = ({ children }) => {
  return (
    <>
      <div className="bg-[#182c34] w-full p-5 flex justify-center items-center">
        <div className="w-[80%] flex justify-between items-center">
          <div className="text-white page-title">
            <p className="text-3xl font-semibold font-poppins">Players</p>
            <p className="text-xs font-poppins">Find all players here.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <PlayerListLength />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-1 w-full p-5">{children}</div>
    </>
  );
};
