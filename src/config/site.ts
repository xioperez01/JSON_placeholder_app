import { Icons } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "JSONPlaceholder App",
  description: "Aplicación Next.js 14 que consume la API JSONPlaceholder",
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
