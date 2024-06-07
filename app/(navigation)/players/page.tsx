import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { PlayerList } from "@/components/PlayerList";

function page() {
  return (
    <>
      <div className="bg-[#182c34] w-full p-5 flex justify-center items-center">
        <div className="w-[80%] flex justify-between items-center">
          <div className="text-white page-title">
            <p className="text-3xl font-semibold font-poppins">Players</p>
            <p className="text-xs font-poppins">Find all players here.</p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <p className="text-sm italic text-gray-300 font-poppins">
              10,000 results
            </p>
            <div className="px-3 py-1 bg-white rounded-md cursor-pointer">
              <p className="font-poppins text-[#182c34] font-semibold">
                Export
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-1 w-full p-5">
        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex items-center justify-between w-full">
            <p className="text-lg font-semibold font-poppins">Players list</p>
            <TextField
              id="outlined-basic"
              label="Search"
              variant="outlined"
              size="small"
            />
          </div>
          <PlayerList />
        </div>
      </div>
    </>
  );
}

export default page;
