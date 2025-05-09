import { CreditCard, User } from "lucide-react"
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
import Login from "@/Login";
import { useContext } from "react";
import { UserContext } from "@/context";

export default function Navbar() {
  const { setUser } = useContext(UserContext);

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
                    <Login />

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
                            <NavigationMenuLink onClick = {() => {
                              localStorage.removeItem("user")
                              setUser(undefined)
                            }}  className = "create-events">
                              Log out
                            </NavigationMenuLink>
                          </div>
                      </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              {/* // if successfull login */}
            </div>
          </div>
        </div>
    </nav>
  )
}


