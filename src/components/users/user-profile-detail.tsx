import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import {
  AtSign,
  Phone,
  Globe,
  MapPin,
  Building,
  Briefcase,
} from "lucide-react";
import { User } from "@/types/users";
import Link from "next/link";

export default function UserProfileDetail({ user }: { user: User }) {
  return (
    <Card className="md:col-span-2">
      <CardHeader>
        <CardTitle>Información De Perfil</CardTitle>
        <CardDescription>@{user.username}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-sm font-medium">Contacto</h3>
          <div className="grid gap-2">
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
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Dirección</h3>
          <div className="flex items-start gap-2 text-sm">
            <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Compañía</h3>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 text-sm">
              <Building className="h-4 w-4 text-muted-foreground" />
              <span>{user.company.name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span>{user.company.catchPhrase}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
