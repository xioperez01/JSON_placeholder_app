import { AtSign, Phone, Globe } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { User } from "@/types/users";

export default function UserCard({ user }: { user: User }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{user.name}</CardTitle>
        <p className="text-sm text-muted-foreground">@{user.username}</p>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex items-center gap-2 text-sm">
          <AtSign className="h-4 w-4 text-muted-foreground" />
          <span>{user.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Phone className="h-4 w-4 text-muted-foreground" />
          <span>{user.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Globe className="h-4 w-4 text-muted-foreground" />
          <Link
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-primary"
          >
            {user.website}
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          className={buttonVariants({ size: "sm" })}
          href={`/users/${user.id}`}
        >
          Ver Detalle
        </Link>
      </CardFooter>
    </Card>
  );
}
