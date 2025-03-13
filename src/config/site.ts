import { Icons } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "El Sol",
  description: "Prueba técnica para El Sol",
  mainNav: [
    {
      title: "Usuarios",
      href: "/users",
      icon: Icons.users,
    },
    {
      title: "Publicaciones",
      href: "/posts",
      icon: Icons.posts,
    },
  ],
};
