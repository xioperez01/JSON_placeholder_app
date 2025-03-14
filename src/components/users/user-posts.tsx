import React from "react";
import { Post } from "@/types/posts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function UserPosts({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="text-muted-foreground">No hay publicaciones...</p>;
  }

  return (
    <div className="space-y-4">
      {posts.slice(0, 3).map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <CardTitle className="text-base">
              <Link
                href={`/posts/${post.id}`}
                className="hover:underline text-primary"
              >
                {post.title}
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {post.body}
            </p>
          </CardContent>
        </Card>
      ))}

      {posts.length > 3 && (
        <div className="text-center">
          <Link
            href={`/posts?userId=${posts[0].userId}`}
            className="text-sm text-primary hover:underline"
          >
            Ver todas las {posts.length} publicaciones
          </Link>
        </div>
      )}
    </div>
  );
}
