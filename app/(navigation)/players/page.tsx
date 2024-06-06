import React from "react";

function page() {
  return (
    <div className="border-[1px] border-gray-400  flex flex-col items-center">
      <div className="bg-[#182c34] w-full p-5 flex justify-center items-center">
        <div className="page-title w-[80%] text-white">
          <p className="text-3xl font-poppins font-semibold">Players</p>
          <p className="text-xs font-poppins">Find all players here.</p>
        </div>
      </div>
      <div className="w-full p-5 flex justify-center items-center">
        <div className="flex flex-col gap-4 w-[80%]">
          <div className="flex justify-between items-center">
            <p className="font-poppins text-lg font-semibold">Players list</p>
            <div className="flex justify-center items-center gap-4">
              <p className="font-poppins text-sm italic text-gray-600">
                10,000 results
              </p>
              <div className="bg-[#182c34] rounded-sm px-3 py-1">
                <p className="font-poppins text-white">Export</p>
              </div>
            </div>
          </div>
          <div className="player-list-component p-2 grid grid-cols-1 divide-y-[1px] divide-inherit border-[1px] border-gray-400 rounded-md">
            <div className="player-component flex justify-between px-2 py-4">
              <div className="player-details flex flex-col gap-2">
                <div className="player-name flex gap-2">
                  <p className="font-montserrat text-lg font-semibold">
                    Lebron James
                  </p>
                  <p className="text-gray-600 text-lg font-montserrat">USA</p>
                  <div className="bg-green-600 px-2 rounded-md flex justify-center items-center">
                    <p className="text-xs font-montserrat text-white font-semibold">
                      Active
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold font-montserrat">
                  Los Angeles Lakers
                </p>
              </div>
              <div className="player-image size-20 bg-blue-600 rounded-full"></div>
            </div>
            <div className="player-component flex justify-between px-2 py-4">
              <div className="player-details flex flex-col gap-2">
                <div className="player-name flex gap-2">
                  <p className="font-montserrat text-lg font-semibold">
                    Lebron James
                  </p>
                  <p className="text-gray-600 text-lg font-montserrat">USA</p>
                  <div className="bg-green-600 px-2 rounded-md flex justify-center items-center">
                    <p className="text-xs font-montserrat text-white font-semibold">
                      Active
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold font-montserrat">
                  Los Angeles Lakers
                </p>
              </div>
              <div className="player-image size-20 bg-blue-600 rounded-full"></div>
            </div>
            <div className="player-component flex justify-between px-2 py-4">
              <div className="player-details flex flex-col gap-2">
                <div className="player-name flex gap-2">
                  <p className="font-montserrat text-lg font-semibold">
                    Lebron James
                  </p>
                  <p className="text-gray-600 text-lg font-montserrat">USA</p>
                  <div className="bg-green-600 px-2 rounded-md flex justify-center items-center">
                    <p className="text-xs font-montserrat text-white font-semibold">
                      Active
                    </p>
                  </div>
                </div>
                <p className="text-2xl font-bold font-montserrat">
                  Los Angeles Lakers
                </p>
              </div>
              <div className="player-image size-20 bg-blue-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
