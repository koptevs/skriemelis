import React from "react";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

import { Link, usePage } from "@inertiajs/react";
import NavContent from "./NavContent";
import { ModeToggle } from "@/components/TopNavbar/ModeToggle";
import ResponsiveNavLink from "../ResponsiveNavLink";

export default function MobileNav() {
    const user = usePage().props.auth.user;
    return (
        <div className="ml-4 flex w-full items-center justify-end sm:hidden">
            <Sheet>
                <div className="flex w-full justify-between">
                    <ModeToggle />
                    <div></div>
                    {/* TODO remove if on sheet will close */}
                    <SheetTrigger asChild>
                        <Button variant="outline">
                            <Menu />
                        </Button>
                    </SheetTrigger>
                </div>
                <SheetContent side="right" className="w-[300px]">
                    <SheetClose asChild>
                        <div>
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2"
                            >
                                <img
                                    src="/assets/images/site-logo.png"
                                    alt="Site Logo"
                                    width={20}
                                    height={20}
                                />
                                <div className="py-2 font-bold">
                                    NEXT-
                                    <span className="text-orange-600">TUV</span>
                                </div>
                            </Link>
                            {user ? (
                                <div className="flex flex-col">
                                    <div className="text-md text-center font-medium text-gray-800 dark:text-gray-200">
                                        {user.name}
                                    </div>
                                    <div className="text-center text-xs font-medium text-gray-500">
                                        {user.email}
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </SheetClose>
                    <SheetClose asChild>
                        <NavContent />
                    </SheetClose>
                </SheetContent>
            </Sheet>
        </div>
    );
}
