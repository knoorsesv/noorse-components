export interface Navigation {
  items: NavigationItem[]
}

export interface NavigationItem {
  name: string;
  href: string;
  subItems?: NavigationItem[]
}
