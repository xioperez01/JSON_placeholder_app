import {
  ListPageSearchParams,
  PAGE_NUMBER,
  PAGE_SIZE,
  SORT,
} from "@/types/shared";

import { API_BASE_URL } from "@/api/shared";
import { Post } from "@/types/posts";
import { Comment } from "@/types/comments";

export async function fetchPostsList(
  searchParams: ListPageSearchParams
): Promise<{ posts: Post[]; hasNextPage: boolean }> {
  const {
    search,
    pageSize = PAGE_SIZE,
    pageNumber = PAGE_NUMBER,
    sort = SORT,
    userId,
  } = searchParams;

  const start = (pageNumber - 1) * pageSize;

  let url = `${API_BASE_URL}/posts?_start=${start}&_limit=${pageSize}&_sort=title&_order=${sort}`;

  if (search) url = `${url}&title_like=${search}`;

  if (userId) url = `${url}&userId=${userId}`;

  const res = await fetch(`${url}`);
  if (!res.ok) throw new Error("Error al obtener las publicaciones");

  const posts = await res.json();

  return {
    posts,
    hasNextPage: posts.length === pageSize,
  };
}

export async function fetchPost(
  id: string
): Promise<{ post: Post; user: { name: string; id: string } }> {
  const response = await fetch(`${API_BASE_URL}/posts/${id}`);
  if (!response.ok) {
    throw new Error(`Error al obtener el post ${id}`);
  }

  const post = await response.json();

  const user = await fetch(`${API_BASE_URL}/users/${post.userId}`);
  if (!user.ok) {
    throw new Error(
      `Error al obtener el usuario ${post.userId} para el post ${id}`
    );
  }
  return { post, user: await user.json() };
}

export async function fetchPostComments(postId: string): Promise<Comment[]> {
  const response = await fetch(`${API_BASE_URL}/posts/${postId}/comments`);
  if (!response.ok) {
    throw new Error(`Error al obtener los comentarios para el post ${postId}`);
  }
  return response.json();
}
