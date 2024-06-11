import Link from "next/link";

const navItems = {
  "/": {
    name: "HOME",
  },
  "/experience": {
    name: "EXPERIENCE",
  },
  "/projects": {
    name: "PROJECTS",
  },
  "/resume": {
    name: "RESUME",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] tracking-tight flex flex-col items-center justify-between p-24 md:p-24">
      <div className="sticky top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade"
          id="nav"
        >
          <div className="flex flex-row space-x-0 lg:p-0 md:p-8">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-200 flex align-middle relative py-1 px-1 md:px-2 m-1 font-bold"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
