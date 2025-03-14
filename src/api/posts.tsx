import {
  ListPageSearchParams,
  PAGE_NUMBER,
  PAGE_SIZE,
  SORT,
} from "@/types/shared";

import { API_BASE_URL } from "@/api/shared";
import { Post } from "@/types/posts";

export async function fetchPostsList(
  searchParams: ListPageSearchParams
): Promise<{ posts: Post[]; hasNextPage: boolean }> {
  const {
    search,
    pageSize = PAGE_SIZE,
    pageNumber = PAGE_NUMBER,
    sort = SORT,
  } = searchParams;

  const start = (pageNumber - 1) * pageSize;

  let url = `${API_BASE_URL}/posts?_start=${start}&_limit=${pageSize}&_sort=title&_order=${sort}`;

  if (search) url = `${url}&title_like=${search}`;

  const res = await fetch(`${url}`);
  if (!res.ok) throw new Error("Error al obtener las publicaciones");

  const posts = await res.json();

  return {
    posts,
    hasNextPage: posts.length === pageSize,
  };
}
