import { MainNav } from "@/components/main-nav";

import { UserNav } from "@/components/user-nav";

export async function SiteHeader() {
  return (
    <header className="shadow sticky top-0 z-50 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-withe/50">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0 px-4 mx-auto max-w-5xl">
        <MainNav />
        <div className="flex flex-1 items-center justify-end space-x-4 md:hidden">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
