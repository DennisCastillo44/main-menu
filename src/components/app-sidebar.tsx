import * as React from "react";
import {
  BedSingle,
  Bike,
  Bus,
  ChartColumn,
  CreditCard,
  GalleryVerticalEnd,
  House,
  List,
  MapPin,
  Plane,
  Settings,
  Store,
  UserRoundPen,
  ServerCog,
  Handshake,
  HandPlatter,
  Speech,
  Building2,
  Inbox,
  Car,
  FerrisWheel,
  Ticket,
  ReceiptText,
  Ship,
  ShipWheel,
  TrainFront,
  MapPlus,
  Megaphone,
} from "lucide-react";

// import { NavMain } from "@/components/nav-main";
import { NavMain } from "../components/organisms/nav-main";
import { NavUser } from "../components/organisms/nav-user";
import { TeamSwitcher } from "../components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "../components/ui/sidebar";
import "./sidebar.css";

// This is sample data.
const data = {
  user: {
    name: "Joel",
    email: "joel@softrek.mx",
    avatar: "https://avatars.dicebear.com/api/avataaars/joel.svg",
  },
  teams: [
    {
      name: "Carry On",
      logo: GalleryVerticalEnd,
      url: "https://home.stage.v3.softrek.mx/",
      plan: "V3",
    },
    {
      name: "Pay Off",
      logo: GalleryVerticalEnd,
      url: "https://home.stage.v3.payoff.mx/",
      plan: "V3",
    },
  ],
  navMain: [
    {
      title: "Home",
      url: "https://home.stage.v3.softrek.mx/",
      icon: House,
      isActive: false,
      new: false,
      items: [],
    },
    {
      title: "Reservas",
      url: "#",
      icon: Inbox,
      new: false,
      isActive: false,
      items: [
        {
          title: "Control",
          url: "#",
        },
        {
          title: "Revisión",
          url: "#",
        },
        {
          title: "Entrantes",
          url: "https://hotels.stage.v3.softrek.mx/inbox",
        },
      ],
    },
    {
      title: "Hoteles",
      url: "#",
      new: false,
      icon: BedSingle,
      isActive: false,
      items: [
        {
          title: "Hotel unico",
          url: "#",
          items: [
            {
              title: "Contratos",
              url: "#",
            },
            {
              title: "Inventario",
              url: "https://hotels.stage.v3.softrek.mx/own-hotel",
            },
          ],
        },
        {
          title: "Hotel propio",
          url: "#",
        },
        {
          title: "Integraciones",
          url: "#",
          items: [
            {
              title: "Proveedores",
              url: "https://hotels.stage.v3.softrek.mx/providers",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
        {
          title: "API",
          url: "#",
        },
      ],
    },
    {
      title: "Vuelos",
      url: "#",
      new: false,
      icon: Plane,
      isActive: true,
      items: [
        {
          title: "Aerolíneas",
          url: "/airlines",
        },
        {
          title: "Aeropuertos",
          url: "/airports",
        },
        {
          title: "Integraciones",
          url: "#",
          items: [
            {
              title: "Proveedores",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "/flights-booking",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Traslados",
      url: "#",
      new: false,
      icon: Bus,
      items: [
        {
          title: "Traslados propios",
          url: "#",
          items: [
            {
              title: "Contratos",
              url: "#",
            },
            {
              title: "Inventario",
              url: "#",
            },
          ],
        },
        {
          title: "Integraciones",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
          items: [
            {
              title: "Credenciales",
              url: "#",
            },
            {
              title: "Whitelist",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Tours",
      url: "#",
      new: false,
      icon: Bike,
      items: [
        {
          title: "Integraciones",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
          items: [
            {
              title: "Credenciales",
              url: "#",
            },
            {
              title: "Whitelist",
              url: "#",
            },
          ],
        },
        {
          title: "Catalogos",
          url: "#",
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Circuitos",
      url: "#",
      new: false,
      icon: MapPin,
      items: [
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Seguros",
      url: "#",
      new: true,
      icon: ReceiptText,
      items: [
        {
          title: "Integraciones",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
          items: [
            {
              title: "Credenciales",
              url: "#",
            },
            {
              title: "Whitelist",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Cruzeros",
      url: "#",
      new: true,
      icon: Ship,
      items: [
        {
          title: "Integraciones",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
          items: [
            {
              title: "Credenciales",
              url: "#",
            },
            {
              title: "Whitelist",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Ferries",
      url: "#",
      new: true,
      icon: ShipWheel,
      items: [
        {
          title: "Integraciones",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
          items: [
            {
              title: "Credenciales",
              url: "#",
            },
            {
              title: "Whitelist",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Trenes",
      url: "#",
      new: true,
      icon: TrainFront,
      items: [
        {
          title: "Integraciones",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
          items: [
            {
              title: "Credenciales",
              url: "#",
            },
            {
              title: "Whitelist",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "PayOff",
      url: "#",
      new: false,
      icon: CreditCard,
      items: [
        {
          title: "Configuracion",
          url: "#",
        },
        {
          title: "Facturación",
          url: "#",
        },
      ],
    },
    {
      title: "Catálogos",
      url: "#",
      new: false,
      icon: List,
      items: [
        {
          title: "Paises",
          url: "https://catalogs.stage.v3.softrek.mx/countries",
        },
        {
          title: "Nacionalidades",
          url: "https://catalogs.stage.v3.softrek.mx/nationalities",
        },
        {
          title: "Monedas",
          url: "#",
        },
        {
          title: "Lenguaje",
          url: "#",
        },
        {
          title: "Tipo de cambio",
          url: "#",
        },
        {
          title: "Títulos / Honoríficos",
          url: "#",
        },
        {
          title: "Productos",
          url: "#",
        },
      ],
    },
    {
      title: "Marketing",
      url: "#",
      new: false,
      icon: Megaphone,
      items: [
        {
          title: "Flyers",
          url: "https://marketing.stage.v3.softrek.mx/flyers",
        },
      ],
    },
    {
      title: "Mapeo",
      url: "#",
      new: false,
      icon: MapPlus,
      items: [
        {
          title: "Aeropuertos",
          url: "#",
        },
        {
          title: "Destinos",
          url: "#",
        },
        {
          title: "Países",
          url: "#",
        },
        {
          title: "Ciudades",
          url: "#",
        },
        {
          title: "Estados",
          url: "#",
        },
        {
          title: "Condados",
          url: "#",
        },
        {
          title: "Zonas",
          url: "#",
        },
      ],
    },
    {
      title: "Agencias",
      url: "#",
      new: false,
      icon: Store,
      items: [
        {
          title: "Agencias",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
        {
          title: "Emails",
          url: "#",
        },
        {
          title: "Cancelaciones",
          url: "#",
        },
      ],
    },
    {
      title: "Usuarios",
      url: "#",
      new: false,
      icon: UserRoundPen,
      items: [
        {
          title: "Usuarios",
          url: "#",
        },
        {
          title: "Permisos",
          url: "#",
        },
        {
          title: "Roles",
          url: "#",
        },
        {
          title: "Modulos",
          url: "#",
        },
        {
          title: "APPS",
          url: "#",
        },
      ],
    },
    {
      title: "CMS",
      url: "#",
      new: true,
      icon: ServerCog,
      items: [
        {
          title: "Flyers",
          url: "#",
        },
        {
          title: "Landing page",
          url: "#",
        },
        {
          title: "Archivos",
          url: "#",
        },
        {
          title: "Carpetas",
          url: "#",
        },
        {
          title: "Traducciones",
          url: "#",
        },
        {
          title: "Temas",
          url: "#",
        },
      ],
    },
    {
      title: "CRM",
      url: "#",
      new: true,
      icon: Handshake,
      items: [
        {
          title: "Clientes",
          url: "#",
          items: [
            {
              title: "RFC",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      title: "Service Desk",
      url: "#",
      new: true,
      icon: HandPlatter,
      items: [
        {
          title: "Tickets",
          url: "#",
        },
        {
          title: "Chats",
          url: "#",
        },
        {
          title: "Agentes",
          url: "#",
        },
        {
          title: "Integraciones",
          url: "#",
          items: [
            {
              title: "Whatsapp",
              url: "#",
            },
          ],
        },
      ],
    },
    {
      title: "RH",
      url: "#",
      new: true,
      icon: Speech,
      items: [
        {
          title: "Empleados",
          url: "#",
        },
        {
          title: "Puestos",
          url: "#",
        },
      ],
    },
    {
      title: "ERP",
      url: "#",
      new: true,
      icon: Building2,
      items: [
        {
          title: "Departamentos",
          url: "#",
        },
      ],
    },
    {
      title: "Reportes",
      url: "#",
      new: true,
      icon: ChartColumn,
      items: [
        {
          title: "Reportes",
          url: "#",
        },
        {
          title: "Ordenes",
          url: "#",
        },
      ],
    },
    {
      title: "Automóvil",
      url: "#",
      new: true,
      icon: Car,
      items: [
        {
          title: "Integraciones",
          url: "#",
          items: [
            {
              title: "Proveedores",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Atracciones",
      url: "#",
      new: true,
      icon: FerrisWheel,
      items: [
        {
          title: "Integraciones",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
          items: [
            {
              title: "Credenciales",
              url: "#",
            },
            {
              title: "Whitelist",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Eventos",
      url: "#",
      new: true,
      icon: Ticket,
      items: [
        {
          title: "Integraciones",
          url: "#",
        },
        {
          title: "Proveedores",
          url: "#",
          items: [
            {
              title: "Credenciales",
              url: "#",
            },
            {
              title: "Whitelist",
              url: "#",
            },
          ],
        },
        {
          title: "Booking",
          url: "#",
        },
        {
          title: "Reservaciones",
          url: "#",
        },
        {
          title: "Reportes",
          url: "#",
        },
      ],
    },
    {
      title: "Configuración",
      url: "#",
      new: false,
      icon: Settings,
      items: [
        {
          title: "Operador",
          url: "#",
        },
        {
          title: "Grupos",
          url: "#",
        },
        {
          title: "Assets",
          url: "#",
        },
        {
          title: "Emails",
          url: "#",
        },
        {
          title: "Aviso de privacidad",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({
  onMenuSelect,
}: {
  onMenuSelect: (title: string) => void;
}) {
  const handleMenuClick = (title: string) => {
    onMenuSelect(title);
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain
          itemClassName="sidebar-item"
          items={data.navMain}
          onMenuClick={handleMenuClick}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
