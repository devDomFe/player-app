import React from "react";
import { PlayerList } from "@/components/PlayerList";
import { PlayerListLength } from "@/components/PlayerListLength";

function page() {
  return (
    <>
      <div className="bg-[#182c34] flex justify-center items-center w-full p-5">
        <div className="w-full lg:w-[80%] flex justify-between items-center">
          <div className="text-white page-title">
            <p className="text-2xl lg:text-3xl font-semibold font-poppins">
              Players
            </p>
            <p className="text-xs font-poppins">Find all players here.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <PlayerListLength />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-1 w-full p-5">
        <div className="flex flex-col gap-4 w-full lg:w-[80%]">
          <div className="flex items-center justify-between w-full">
            <p className="lg:text-lg font-semibold font-poppins">
              Players list:
            </p>
          </div>
          <PlayerList />
        </div>
      </div>
    </>
  );
}

export default page;
