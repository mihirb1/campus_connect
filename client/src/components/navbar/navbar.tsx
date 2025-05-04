import { User } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import './navbar.css';
export default function Navbar() {

  return (
    <nav className="shadow-sm">
        <div className="navbar">
            <div className = "nav-title">
                <img src="/lilccletittapwithdabass.jpg" className="logo" alt="CampusConnect logo" />
                <a href = "/" className = "cc">CampusConnect</a>
            </div>
          <div className="flex items-center">
            <div className = "nav-items">
                <a href = "/events" className = "nav-item"> Events </a>
                <a href  = "/create" className = "nav-item">Create Event</a>
                <a href  = "/maps" className = "nav-item">Maps</a>

            </div>

            <div className="ml-8">

              <NavigationMenu  className = "dropdown">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="user">
                        <Avatar className="h-8 w-8 border border-gray-200">
                          <AvatarImage src="/profilepic.png" alt="User" />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <span className = "username">&nbsp;John Doe</span>

                    </NavigationMenuTrigger>
                      <NavigationMenuContent className = "nav-dropdown">
                          <div className = 'dropdown'>
                            <NavigationMenuLink className="create-events">
                              Create events
                            </NavigationMenuLink>
                            <NavigationMenuLink className = "create-events">
                              Saved events
                            </NavigationMenuLink>
                            <NavigationMenuLink className = "create-events">
                              Events I'm attending
                            </NavigationMenuLink>
                          </div>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>
    </nav>
  )
}


