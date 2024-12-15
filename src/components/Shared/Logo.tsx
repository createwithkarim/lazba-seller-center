import Link from "next/link";
import { Icons } from "../Icons/Icons";

const Logo = () => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className="flex gap-1.5 items-center group"
    >
      <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Icons.logo className="size-4" />
      </div>

      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-semibold">Lazba Seller Center</span>
      </div>
    </Link>
  );
};

export default Logo;
