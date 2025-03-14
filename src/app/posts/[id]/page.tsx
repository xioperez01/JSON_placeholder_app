import React, { Suspense } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {  MessageSquare } from "lucide-react";
import { fetchPost, fetchPostComments } from "@/api/posts";
import DetailCardSkeleton from "@/components/detail-card-skeleton";
import PostDetailCard from "@/components/posts/post-detail-card";
import CommentsSkeleton from "@/components/posts/comments-skeleton";
import CommentList from "@/components/posts/comments-list";
import { Icons } from "@/components/icons";

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const [post, comments] = await Promise.all([
    fetchPost(params.id),
    fetchPostComments(params.id),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/posts">
            <Icons.backToPage className="h-4 w-4" />
            <span className="sr-only">Back to Posts</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">
          {post?.post?.title}
        </h1>
      </div>
      <Suspense fallback={<DetailCardSkeleton />}>
        <PostDetailCard {...post} />
      </Suspense>

      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          <h2 className="text-xl font-semibold">
            Comments ({comments.length})
          </h2>
        </div>

        <Suspense fallback={<CommentsSkeleton />}>
          <CommentList initialComments={comments} postId={post?.post.id} />
        </Suspense>
      </div>
    </div>
  );
}
