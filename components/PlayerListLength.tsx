"use client";

import React from "react";

//redux
import { useGetListOfQuery } from "@/lib/Slice/PlayerApi";

export const PlayerListLength = () => {
  const { data, isLoading, isSuccess, isError, error } =
    useGetListOfQuery("persons");
  return (
    <p className="text-xs lg:text-sm italic text-gray-300 font-poppins">
      <span>{isSuccess && data && data.data ? data.data.length : 0}</span>{" "}
      results
    </p>
  );
};
