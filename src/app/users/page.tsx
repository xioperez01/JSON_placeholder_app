import React, { Suspense } from "react";
import { fetchUsersList } from "@/api/users";
import UsersList from "@/components/users/users-list";
import { ListPageSearchParams } from "@/types/shared";
import UsersListSkeleton from "@/components/users/users-list-skeleton";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: ListPageSearchParams;
}) {
  const users = await fetchUsersList(searchParams);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Usuarios</h1>
        <p className="text-muted-foreground">
          Consultar todos los usuarios de la API JSONPlaceholder
        </p>
      </div>

      <Suspense fallback={<UsersListSkeleton />}>
        <UsersList initialData={users} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
