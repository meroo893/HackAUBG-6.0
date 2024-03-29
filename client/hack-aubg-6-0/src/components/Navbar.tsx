import React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="flex justify-center items-stretch bg-primary">
      <div></div>
      <div className=""></div>
      <div className="px-3">
        <h2>One</h2>
      </div>
      <div className="px-3">
        <h2>two</h2>
      </div>
      <div className="px-3">
        <h2>three</h2>
      </div>
    </div>
  );
}
