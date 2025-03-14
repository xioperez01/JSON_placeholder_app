import { ListPageSearchParams } from "@/types/shared";
import { User } from "@/types/users";
import { API_BASE_URL } from "./shared";
import { Post } from "@/types/posts";

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

export async function fetchUser(id: string): Promise<User> {
  const response = await fetch(`${API_BASE_URL}/users/${id}`);
  if (!response.ok) {
    throw new Error(`Error al obtener el usuario con id ${id}`);
  }
  return await response.json();
}

export async function fetchUserPosts(userId: string): Promise<Post[]> {
  const response = await fetch(`${API_BASE_URL}/users/${userId}/posts`);
  if (!response.ok) {
    throw new Error(`Error al obtener los posts del usuario con id ${userId}`);
  }
  return response.json();
}
