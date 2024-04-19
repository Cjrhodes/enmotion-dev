"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { toggleContactModalOpen } from "@/redux/features/contactModalSlice";
import { toggleSidebarOpen } from "@/redux/features/sidebarSlice";
import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";

type Props = {
  contactModal: boolean;
};

const HeaderSection = ({ contactModal }: Props) => {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const isSidebarOpen = useAppSelector((state) => state.sidebar.isSidebarOpen);

  const openContactModal = () => {
    dispatch(toggleContactModalOpen());
  };

  const openSidebar = () => {
    dispatch(toggleSidebarOpen());
    setIsHeaderFixed(false);
  };

  const handleScroll = () => {
    if (window.scrollY >= 200 && !isSidebarOpen) {
      setIsHeaderFixed(true);
    } else {
      setIsHeaderFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, isSidebarOpen]);

  return (
    <header className={`header ${isHeaderFixed ? "fixed" : ""}`}>
    <Navbar />
  </header>
  );
};

export default HeaderSection;
