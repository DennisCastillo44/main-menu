"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  isActive?: boolean;
  items?: NavItem[];
}

interface NavMainProps {
  items: NavItem[];
  itemClassName?: string;
  onMenuClick: (title: string) => void; // Add onMenuClick prop
}

export function NavMain({ items, itemClassName, onMenuClick }: NavMainProps) {
  const renderSubItems = (subItems: NavItem[]) => {
    return subItems.map((subItem) => (
      <Collapsible key={subItem.title} asChild defaultOpen={subItem.isActive}>
        <SidebarMenuSubItem className={itemClassName}>
          <CollapsibleTrigger asChild>
            <SidebarMenuSubButton tooltip={subItem.title}>
              <a href={subItem.url} onClick={() => onMenuClick(subItem.title)}>
                <span>{subItem.title}</span>
              </a>
              {subItem.items?.length > 0 && (
                <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              )}
            </SidebarMenuSubButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSubItem key={subItem.title}>
              {subItem.items && subItem.items.length > 0 && (
                <Collapsible asChild>
                  <SidebarMenuSub>
                    {renderSubItems(subItem.items)}
                  </SidebarMenuSub>
                </Collapsible>
              )}
            </SidebarMenuSubItem>
          </CollapsibleContent>
        </SidebarMenuSubItem>
      </Collapsible>
    ));
  };
  return (
    <SidebarGroup>
      <SidebarGroupLabel></SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group"
          >
            <SidebarMenuItem
              className={`${itemClassName} ${item.isActive ? "active" : ""}`}
            >
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <a href={item.url} onClick={() => onMenuClick(item.title)}>
                    <span>{item.title}</span>
                  </a>
                  {item.new && ( // Conditionally render the "New" label
                    <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                      New
                    </span>
                  )}
                  {item.items?.length > 0 && (
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  )}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items && renderSubItems(item.items)}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
