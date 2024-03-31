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
            Add Data
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <ul className="flex justify-around w-[320px] list-none items-center">
                <Link to="addInfo" className="text-lg">
                  Add Information
                </Link>
                <Link to="CheckCar" className="text-lg">
                  Check Car
                </Link>
              </ul>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
