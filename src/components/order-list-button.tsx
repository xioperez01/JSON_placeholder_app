import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { SORT } from "@/types/shared";
import { Icons } from "@/components/icons";

export default function OrderListButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams || "");

  const [sortBy, setSortBy] = useState<"asc" | "desc">(
    (params.get("sort") as "asc" | "desc") || SORT
  );

  const handleSort = () => {
    const order = sortBy === "asc" ? "desc" : "asc";
    setSortBy(order);

    params.set("sort", order);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-x-4 flex flex-row bg-white rounded-md h-10 items-center justify-center p-2 border border-input">
      <p className="text-sm text-muted-foreground">Por Título: </p>
      <Button
        className="w-fit h-fit"
        size="icon"
        variant="ghost"
        onClick={() => handleSort()}
      >
        {sortBy === "asc" ? (
          <Icons.asc className="h-4 w-4" />
        ) : (
          <Icons.desc className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
}
