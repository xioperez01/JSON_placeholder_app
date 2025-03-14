"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export function MainNav() {
  const pathName = usePathname();
  return (
    <div className="flex items-center w-full flex-shrink">
      <Link href="/" className="flex items-center w-fit flex-shrink-0">
        <div className="flex font-title text-lg font-medium text-primary sm:text-xl">
          {siteConfig.name}
        </div>
      </Link>

      <nav className="hidden gap-6 md:flex justify-end w-full">
        {siteConfig.mainNav?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              "flex items-center text-lg font-semibold sm:text-sm",
              !pathName.startsWith(item.href) && "opacity-60"
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
