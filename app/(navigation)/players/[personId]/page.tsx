import React from "react";
import { PlayerRoute } from "@/layout/PlayerRoute";

function page({ params }: { params: { personId: string } }) {
  return (
    <PlayerRoute>
      <div className="flex flex-col gap-4 w-[80%]">
        My Post: {params.personId}
      </div>
    </PlayerRoute>
  );
}

export default page;
