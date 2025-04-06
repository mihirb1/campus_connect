import { User, LogOut, Settings, Bell } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {

  return (
    <nav className="shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <p className="font-medium text-xl tracking-tight">
              Campus Connect
            </p>
          </div>

          <div className="flex items-center">
            <div className="ml-10 flex items-center space-x-8">
              <p className="font-medium hover:text-gray-900 transition-colors">
                About
              </p>
              <p className="font-medium hover:text-gray-900 transition-colors">
                Map
              </p>
              <p className="font-medium hover:text-gray-900 transition-colors">
                Event
              </p>
            </div>

            <div className="ml-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 outline-none">
                  <Avatar className="h-8 w-8 border border-gray-200">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <span className="font-medium text-sm">John Doe</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-black border-gray-600">
                  <DropdownMenuLabel className="text-white">My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-gray-600" />
                  <DropdownMenuItem className="cursor-pointer text-white">
                    <User className="mr-2 h-4 w-4 hover:text-gray-600 text-white" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-white">
                    <Bell className="mr-2 h-4 w-4 hover:text-gray-600 text-white" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer text-white">
                    <Settings className="mr-2 h-4 w-4 hover:text-gray-600 text-white" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-gray-600" />
                  <DropdownMenuItem className="cursor-pointer text-white">
                    <LogOut className="mr-2 h-4 w-4 hover:text-gray-600 text-white" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}


