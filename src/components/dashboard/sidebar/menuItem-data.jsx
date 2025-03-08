import {
    BookMarked,
    FileQuestion,
    Flame,
    LayoutList,
    MessageSquareMore,
    MonitorCog,
    Section,
    SquareDashedKanban,
  } from "lucide-react";
  import { MdArticle, MdDashboard } from "react-icons/md";
  
  export const menuItems = [
    {
      label: "Dashboard",
      icon: <MdDashboard size={15} className="mr-2" />,
      path: "/dashboard",
    },
    {
      label: "Pages Slider",
      icon: <MdDashboard size={15} className="mr-2" />,
      path: "/pages-slider",
    },
    {
      label: "Categories",
      icon: <LayoutList size={15} className="mr-2" />,
      path: "/categories",
    },
    {
      label: "Section Settings",
      icon: <Section size={15} className="mr-2" />,
      path: "/section-settings",
    },
    {
      label: "More About",
      icon: <MessageSquareMore size={15} className="mr-2" />,
      path: "/more-about",
    },
    {
      label: "Future of Farming",
      icon: <BookMarked size={15} className="mr-2" />,
      path: "/future-of-farming",
    },
    {
      label: "Our Experts",
      icon: <Flame size={15} className="mr-2" />,
      path: "/our-experts",
    },
    {
      label: "Articles",
      icon: <MdArticle size={15} className="mr-2" />,
      path: "/articles",
    },
    {
      label: "Our Works",
      icon: <SquareDashedKanban size={15} className="mr-2" />,
      path: "/our-works",
    },
    {
      label: "Our Service",
      icon: <SquareDashedKanban size={15} className="mr-2" />,
      path: "/our-service",
    },
    {
      label: "What We Provide",
      icon: <FileQuestion size={15} className="mr-2" />,
      path: "/what-we-provide",
    },
    {
      label: "Site Settings",
      icon: <MonitorCog size={15} className="mr-2" />,
      path: "/site-settings",
    },
  ];
  