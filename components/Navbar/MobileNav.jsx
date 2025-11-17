"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import MobileNavScreen from "./MobileNavScreen";
import { mobileNavData } from "@/config/navigationData";
import { Button } from "../ui/button";

const MobileNav = () => {
  const [screen, setScreen] = useState("main");

  // Prepare navigation items with onClick handlers for submenus
  const getNavItems = (screenType) => {
    const items = mobileNavData[screenType] || [];
    return items.map((item) => {
      if (item.type === "submenu") {
        return {
          ...item,
          onClick: () => setScreen(item.screen),
        };
      }
      return item;
    });
  };

  return (
    <div className="md:hidden">
      {/* TOP BAR */}
      <header className="w-full px-4 py-3 flex items-center justify-between absolute top-0 left-0 right-0 z-50 bg-transparent">
        <Image src="/log102.svg" alt="logo" width={110} height={40} className="relative z-10 brightness-0 invert" />

        {/* RIGHT SIDE: LOGIN + MENU */}
        <div className="flex items-center gap-2 relative z-10">
          <Button
            variant="outline"
            className="border-white text-white px-3 py-3 bg-transparent rounded hover:bg-white hover:text-black"
            size="sm"
          >
            Login <ArrowRight size={14} />
          </Button>

          <Sheet>
            <SheetTrigger className="p-2 text-white">
              <Menu size={26} />
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full h-full max-w-full p-0 flex flex-col [&>button]:hidden"
            >
              {/* CLOSE BUTTON */}
              <div className="flex justify-between px-4 py-4">
                <Link href="/" className="flex items-center">
                  <Image src="/log102.svg" alt="logo" width={120} height={40} />
                </Link>

                <SheetClose>
                  <X size={26} />
                </SheetClose>
              </div>

              {/* Screens */}
              {screen === "main" && (
                <MobileNavScreen type="main" items={getNavItems("main")} />
              )}

              {screen === "payments" && (
                <MobileNavScreen
                  type="submenu"
                  title="Payments"
                  onBack={() => setScreen("main")}
                  items={getNavItems("payments")}
                  className="gap-3"
                />
              )}

              {screen === "banking" && (
                <MobileNavScreen
                  type="submenu"
                  title="Banking"
                  onBack={() => setScreen("main")}
                  items={getNavItems("banking")}
                  className="gap-3"
                />
              )}

              {/* SIGN UP BUTTON */}
              <div className="p-4 border-t">
                <Link
                  href="#signup"
                  className="w-full block bg-blue-600 text-white py-3 text-center rounded font-semibold"
                >
                  Sign Up
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

    </div>
  );
};

export default MobileNav;
