import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "lucide-react";
import Link from "next/link";
import { Post } from "@/types/posts";

export default function PostDetailCard({
  post,
  user,
}: {
  post: Post;
  user: { name: string };
}) {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="h-4 w-4" />
          <Link href={`/users/${post.userId}`} className="hover:underline">
            {user.name}
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{post.body}</p>
      </CardContent>
    </Card>
  );
}
