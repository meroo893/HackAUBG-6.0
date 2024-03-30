import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-secondary focus:!text-foreground">
            Users
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[300px] grid grid-cols-4 gap-4 list-none">
              <Link to="/users">See All Users</Link>
              <Link to="/users">See All Users</Link>
              <Link to="/users">See All Users</Link>
              <Link to="/users">See All Users</Link>
            </ul>

            <NavigationMenuLink></NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-secondary focus:!text-foreground">
            Item Two
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <ul className="w-full grid grid-cols-4 gap-4 list-none">
                <Link to="asd">Nav Link</Link>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
