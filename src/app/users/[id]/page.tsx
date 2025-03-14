import { fetchUser, fetchUserPosts } from "@/api/users";
import { Button } from "@/components/ui/button";

import UserPosts from "@/components/users/user-posts";
import UserPostsSkeleton from "@/components/users/user-posts-skeleton";
import UserProfileDetail from "@/components/users/user-profile-detail";
import { ChevronsLeft } from "lucide-react";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function UserDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await fetchUser(params.id);
  const posts = await fetchUserPosts(params.id);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/users">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Back to users</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">{user.name}</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Suspense fallback={<UserPostsSkeleton />}>
          <UserProfileDetail user={user} />
        </Suspense>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            Publicaciones de {user.name.split(" ")[0]}
          </h2>
          <Suspense fallback={<UserPostsSkeleton />}>
            <UserPosts posts={posts} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
