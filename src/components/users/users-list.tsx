"use client";
import React from "react";
import { User } from "@/types/users";

import InputSearch from "@/components/input-search";
import { useUsersList } from "@/hooks/users";
import { ListPageSearchParams } from "@/types/shared";
import UserCard from "@/components/users/user-card";

export default function UsersList({
  initialData,
  searchParams,
}: {
  initialData: User[];
  searchParams: ListPageSearchParams;
}) {
  const { data } = useUsersList({ searchParams, initialData });

  return (
    <div className="space-y-4">
      <InputSearch />

      {data?.length === 0 ? (
        <p className="text-muted-foreground">
          {`No se han encontrado usuarios que coincidan con ${searchParams?.search}`}
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {initialData.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
}
