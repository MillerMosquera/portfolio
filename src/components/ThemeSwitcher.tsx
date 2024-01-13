"use client";

import {
    Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="light"><MdDarkMode /></Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="mode" className="text-black dark:text-white"
      >
        <DropdownItem key="light" onClick={() => setTheme("light")}>
          Claro
        </DropdownItem>
        <DropdownItem key="dark" onClick={() => setTheme("dark")}>
          Oscuro
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
