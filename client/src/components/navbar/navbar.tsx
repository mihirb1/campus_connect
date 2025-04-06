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
                <a href = "/" className = "nav-item">About</a>
                <a href = "/" className = "nav-item">Home</a>
                <a href  = "/" className = "nav-item">Create Event</a>
            </div>

            <div className="ml-8">

              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="nav-item">
                      <div className="flex">
                        <Avatar className="h-8 w-8 border border-gray-200">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                          <AvatarFallback>
                            <User className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <span>John Doe</span>
                      </div>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className = "nav-dropdown">
                        <div>
                          <NavigationMenuLink>
                            Create events
                          </NavigationMenuLink>
                          <NavigationMenuLink>
                            Saved events
                          </NavigationMenuLink>
                          <NavigationMenuLink>
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


