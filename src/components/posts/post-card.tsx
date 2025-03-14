import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Post } from "@/types/posts";
import { User } from "lucide-react";

export default function PostCard({
  post,
  userName,
}: {
  post: Post;
  userName: string;
}) {
  return (
    <Card className="flex flex-col h-full justify-between">
      <CardHeader>
        <CardTitle className="text-lg">
          <Link
            href={`/posts/${post.id}`}
            className="hover:underline text-primary"
          >
            {post.title}
          </Link>
        </CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <User className="h-3 w-3" />
          <Link href={`/users/${post.userId}`} className="hover:underline">
            {userName}
          </Link>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {post.body}
        </p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/posts/${post.id}`}>Ver Detalle</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
