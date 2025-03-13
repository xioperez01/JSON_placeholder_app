import { defaultSearchParams, ListPageSearchParams } from "@/types/shared";
import { User } from "@/types/users";
import { API_BASE_URL } from "./shared";

export async function fetchUsersList(
  searchParams: ListPageSearchParams
): Promise<User[]> {
  const { search } = {
    ...searchParams,
  };

  const res = await fetch(`${API_BASE_URL}/users`);
  if (!res.ok) throw new Error("Error al obtener los usuarios");

  const json = await res.json();

  return search
    ? json.filter(
        (user: User) =>
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.username.toLowerCase().includes(search.toLowerCase())
      )
    : json;
}
