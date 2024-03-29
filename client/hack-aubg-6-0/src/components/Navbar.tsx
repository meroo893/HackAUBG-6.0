"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  return (
    <div className="flex justify-center bg-primary mb-2">
      <div className="flex bg-blue-200 justify-between w-4/5 items-center">
        <div>ikonka</div>
        <div className="flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Item three</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div>login</div>
      </div>
    </div>
  );
}

// <div className="flex px-3 py-2 border border-transparent rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 m-2">
//   <h2>One</h2>
// </div>
// <div className="flex px-3 py-2 border border-transparent rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 m-2">
//   <h2>Two</h2>
// </div>
// <div className="flex px-3 py-2 border border-transparent rounded-md bg-orange-500 text-white cursor-pointer hover:bg-orange-600 m-2">
//   <h2>Three</h2>
// </div>
