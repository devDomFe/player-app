import React from "react";
import { PlayerList } from "@/components/PlayerList";
import { PlayerListLength } from "@/components/PlayerListLength";

//layout
import { PlayerRoute } from "@/layout/PlayerRoute";

function page() {
  return (
    <>
      <PlayerRoute>
        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex items-center justify-between w-full">
            <p className="text-lg font-semibold font-poppins">Players list</p>
          </div>
          <PlayerList />
        </div>
      </PlayerRoute>
    </>
  );
}

export default page;
