"use client";
import { usePostsList } from "@/hooks/posts";
import { Post } from "@/types/posts";
import { ListPageSearchParams } from "@/types/shared";
import React from "react";
import InputSearch from "@/components/input-search";
import PostCard from "@/components/posts/post-card";
import OrderListButton from "../order-list-button";
import ListPaginationButtons from "../list-pagination-buttons";

export default function PostsList({
  initialData,
  searchParams,
  users,
}: {
  initialData: { posts: Post[]; hasNextPage: boolean };
  searchParams: ListPageSearchParams;
  users: Record<number, string>;
}) {
  const { data } = usePostsList({ searchParams, initialData });

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between w-full">
        <InputSearch placeholder="Filtrar por titulo..." />
        <OrderListButton />
      </div>

      {data?.posts?.length === 0 ? (
        <p className="text-muted-foreground">
          No se han encontrado publicaciones que coincidan...
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {data?.posts.map((post) => (
            <PostCard key={post.id} post={post} userName={users[post.userId]} />
          ))}
        </div>
      )}

      <ListPaginationButtons hasNextPage={data?.hasNextPage} />
    </div>
  );
}
