import { fetchUsersList } from "@/api/users";
import UsersList from "@/components/users/users-list";
import { ListPageSearchParams } from "@/types/shared";
import React from "react";

export default async function UsersPage({
  searchParams,
}: {
  searchParams: ListPageSearchParams;
}) {
  const users = await fetchUsersList();
  console.log(users);
  return <UsersList initialData={users} />;
}
