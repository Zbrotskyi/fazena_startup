import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 21,
    title: "Solutions",
    path: "/solutions",
    newTab: false,
  },
  {
    id: 22,
    title: "Pipeline",
    path: "/pipeline",
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
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Blog",
        path: "/blog",
        newTab: false,
      },
      {
        id: 32,
        title: "Publications",
        path: "/publications",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Support",
    path: "/contact",
    newTab: false,
  },

];
export default menuData;
