import { fetchPostsList } from "@/api/posts";
import { Post } from "@/types/posts";

import { ListPageSearchParams } from "@/types/shared";

import { useQuery } from "@tanstack/react-query";

export const usePostsList = ({
  searchParams,
  initialData,
}: {
  searchParams: ListPageSearchParams;
  initialData: { posts: Post[]; hasNextPage: boolean };
}) =>
  useQuery({
    queryKey: ["posts-list", searchParams],
    queryFn: () => fetchPostsList(searchParams),
    initialData,
  });
