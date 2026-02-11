import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    path: "/#services",
    newTab: false,
  },
  {
    id: 4,
    title: "RNA Hunter",
    path: "/rna-hunter",
    newTab: false,
  },
  {
    id: 5,
    title: "Publications",
    path: "/publications",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact us",
    path: "/contact",
    newTab: false,
    special: true,
  },
  {
    id: 7,
    title: "Join us",
    path: "/join-us",
    newTab: false,
    special: true,
    filled: true,
  },
];
export default menuData;

