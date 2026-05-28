import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LayoutDashboard,
  LogOutIcon,
  Settings,
  Settings2,
  User,
  User2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function ProfileToggle() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Avatar>
            <AvatarImage src="" alt="shadcn" />
            <AvatarFallback className="text-blue-900">
               <User size={42}/>
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="mt-3 w-[180px]">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User2/>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings/>
             <Link href="/setting">Setting</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <BellIcon />
            <Link href="/notification">Notifications</Link>
          </DropdownMenuItem>
           <DropdownMenuSeparator />
          <DropdownMenuItem>
             <LayoutDashboard/>
             <Link href="/dashboard">Dashboard</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem variant="destructive">
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
