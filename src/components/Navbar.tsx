"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <h1
            className="cursor-pointer text-2xl font-bold"
            onClick={() => router.push("/")}
          >
            FoodHub
          </h1>
          <div className="hidden md:block">
            <div className="flex cursor-pointer items-center gap-8">
              <h3 onClick={() => router.push("/")}>Home</h3>
              <h3>Profile</h3>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="block md:hidden" asChild>
              <Button variant="ghost">
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Home</DropdownMenuItem>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
