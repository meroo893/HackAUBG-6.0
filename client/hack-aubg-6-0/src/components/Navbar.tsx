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
    <div className="flex justify-center items- bg-primary">
      <div className="flex bg-blue-200 justify-between w-4/5 items-center">
        <div>ikonka</div>
        <div className="flex flex-row">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <div className="flex flex-row gap-8">
                  <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                  <NavigationMenuTrigger>Item two</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                  <NavigationMenuTrigger>Item three</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>Link</NavigationMenuLink>
                  </NavigationMenuContent>
                </div>
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
