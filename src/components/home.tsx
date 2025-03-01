import { useState, useEffect } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronsUpDown, LifeBuoy, Search, Bell } from "lucide-react";
import { ThemeToggle } from "./molecules/theme-toggle";
import { Outlet, useLocation } from "react-router-dom";

export default function Page() {
  const [selectedTitle, setSelectedTitle] = useState("Aerolíneas");

  useEffect(() => {
    // Aquí puedes agregar lógica para actualizar el título basado en la URL actual
    const path = location.pathname;
    const navItem = findNavItemByUrl(path);
    if (navItem) {
      setSelectedTitle(navItem.title);
    }
  }, [location]);

  const findNavItemByUrl = (url: string) => {
    // Aquí puedes agregar lógica para encontrar el elemento del menú basado en la URL
    // Por ejemplo, puedes recorrer el arreglo navMain y sus subelementos para encontrar el título correspondiente
    // Esta es una función de ejemplo, debes adaptarla a tu estructura de datos
    interface NavItem {
      url: string;
      title: string;
      items?: NavItem[];
    }

    const findItem = (items: NavItem[]): NavItem | null => {
      for (const item of items) {
        if (item.url === url) {
          return item;
        }
        if (item.items) {
          const found = findItem(item.items);
          if (found) {
            return found;
          }
        }
      }
      return null;
    };
    const data = {
      navMain: [
        // Define your navMain structure here
        { url: "/airlines", title: "Aerolíneas" },
        { url: "/airports", title: "Aeropuertos" },
        { url: "/flights-booking", title: "Booking" },
        // Add more items as needed
      ],
    };
    return findItem(data.navMain);
  };
  return (
    <SidebarProvider>
      <AppSidebar onMenuSelect={setSelectedTitle} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 flex-1">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Aereos</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>{selectedTitle}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* Contenedor para agrupar los iconos a la derecha */}
            <div className="ml-auto flex items-center gap-x-2">
              <Search style={{ width: "30px" }} />
              <LifeBuoy style={{ width: "30px" }} />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                  >
                    <Bell />
                    <ChevronsUpDown className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                  align="start"
                  sideOffset={4}
                >
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    Notificaciones
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="gap-2 p-2">
                    <div className="font-medium text-muted-foreground">
                      Notificacinoes Hotel
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-2 p-2">
                    <div className="font-medium text-muted-foreground">
                      Notificacinoes Vuelos
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>
        <Outlet></Outlet>
        {/* <SearchMenu /> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
