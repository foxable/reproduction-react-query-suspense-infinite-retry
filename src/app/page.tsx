"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

export default function Home() {
  useSuspenseQuery({
    queryKey: ["infiniteRetry"],
    queryFn: async () => {
      console.log("Executed query");
      throw new Error("Query failed");
    },    
    gcTime: typeof window === "undefined" ? Infinity : 0,
    retry: false,
  });
}
