import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PAGE_NUMBER, PAGE_SIZE } from "@/types/shared";

const pageSizeOptions = [
  { value: 5, label: "5" },
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 50, label: "50" },
  { value: 100, label: "100" },
];

export default function ListPaginationButtons({
  hasNextPage,
}: {
  hasNextPage: boolean;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams || "");

  const [pageSize, setPageSize] = useState<number>(
    Number(params.get("pageSize") || PAGE_SIZE)
  );
  const [pageNumber, setPageNumber] = useState<number>(
    Number(params.get("pageNumber") || PAGE_NUMBER)
  );

  const handlePage = (page: number) => {
    setPageNumber(page);

    params.set("pageNumber", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="flex flex-row items-center justify-end w-full p-2 space-x-4">
      <Select
        value={
          pageSizeOptions.find((option) => option.value === pageSize)?.label
        }
        onValueChange={(value) => {
          setPageSize(
            pageSizeOptions.find((option) => option.label === value)?.value ||
              10
          );
          params.set("pageSize", value);
          router.push(`${pathname}?${params.toString()}`);
        }}
      >
        <SelectTrigger className="w-fit">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {pageSizeOptions?.map((option) => (
            <SelectItem key={option.label} value={option.label}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="space-x-2 flex flex-row">
        <Button
          size="icon"
          variant="outline"
          onClick={() => handlePage(pageNumber - 1)}
          disabled={pageNumber === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="outline"
          onClick={() => handlePage(pageNumber + 1)}
          disabled={!hasNextPage}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
