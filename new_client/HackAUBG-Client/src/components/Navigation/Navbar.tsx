import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-secondary text-black focus:!text-foreground">
            Users
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-[100px] list-none">
              <Link to="/users">See All Users</Link>
            </ul>

            <NavigationMenuLink></NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="!bg-primary hover:!text-foreground hover:!bg-secondary text-black focus:!text-foreground">
            Add Data
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <ul className="w-[160px] list-none">
                <Link to="addInfo">Add Information</Link>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
