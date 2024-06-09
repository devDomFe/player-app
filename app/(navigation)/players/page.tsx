import React from "react";
import { PlayerList } from "@/components/PlayerList";
import { PlayerListLength } from "@/components/PlayerListLength";

//layout
import { PlayerRoute } from "@/layout/PlayerRoute";

function page() {
  return (
    <div className="min-h-screen w-full main-container">
      <PlayerRoute>
        <div className="flex flex-col gap-4 w-full lg:w-[80%] ">
          <div className="flex items-center justify-between w-full">
            <p className="lg:text-lg font-semibold font-poppins">
              Players list:
            </p>
          </div>
          <PlayerList />
        </div>
      </PlayerRoute>
    </div>
  );
}

export default page;
