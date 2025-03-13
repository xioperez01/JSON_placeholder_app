import { MainNav } from "@/components/main-nav";

import { UserNav } from "@/components/user-nav";

export async function SiteHeader() {
  return (
    <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 px-4">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
