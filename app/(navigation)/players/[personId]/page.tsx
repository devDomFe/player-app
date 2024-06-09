import React from "react";
import { PlayerRoute } from "@/layout/PlayerRoute";
import CircularProgress from "@mui/material/CircularProgress";
import { PlayerProfile } from "@/components/PlayerProfile";

function page({ params }: { params: { personId: string } }) {
  return (
    <PlayerRoute>
      <div className="flex flex-col gap-4 w-full lg:w-[80%]">
        <div className="flex items-center justify-between w-full">
          <p className="text-lg font-semibold font-poppins">
            Player Information:
          </p>
        </div>
        <PlayerProfile personId={params.personId} />
      </div>
    </PlayerRoute>
  );
}

export default page;
