import { fetchPostsList } from "@/api/posts";
import { fetchUsersList } from "@/api/users";
import ListSkeleton from "@/components/list-skeleton";
import PostsList from "@/components/posts/posts-list";
import { ListPageSearchParams } from "@/types/shared";
import React, { Suspense } from "react";

export default async function PostsPage({
  searchParams,
}: {
  searchParams: ListPageSearchParams;
}) {
  const [posts, users] = await Promise.all([
    fetchPostsList(searchParams),
    fetchUsersList(),
  ]);

  const userMap = Object.fromEntries(
    users.map(user => [user.id, user.name])
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Publicaciones</h1>
        <p className="text-muted-foreground">
          Consultar todos las publicaciones de la API JSONPlaceholder
        </p>
      </div>

      <Suspense fallback={<ListSkeleton />}>
        <PostsList
          initialData={posts}
          searchParams={searchParams}
          users={userMap}
        />
      </Suspense>
    </div>
  );
}
