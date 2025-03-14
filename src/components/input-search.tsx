import useDebounce from "@/hooks/useDebounce";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";

export default function InputSearch({ placeholder }: { placeholder?: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [toSearch, setToSearch] = useState("");

  const debouncedSearchTerm = useDebounce(toSearch, 300);

  useEffect(() => {
    const params = new URLSearchParams(searchParams || "");
    if (debouncedSearchTerm) {
      params.set("search", debouncedSearchTerm);
      router.push(`${pathname}?${params.toString()}`);
    } else {
      params.delete("search");
      router.push(`${pathname}?${params.toString()}`);
    }
  });
  return (
    <div className="max-w-sm">
      <Input
        placeholder={placeholder || "Filtrar por nombre y nombre de usuario..."}
        value={toSearch}
        onChange={(e) => setToSearch(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
