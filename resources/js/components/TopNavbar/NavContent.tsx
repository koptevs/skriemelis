import React from 'react';
// import { usePathname } from "next/navigation";
import { Link, usePage } from '@inertiajs/react';
import { Slot } from '@radix-ui/react-slot';
import { SheetClose } from '@/components/ui/sheet';
import { Home, Beer, Calendar, SquareArrowUp, Users, PowerOff } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileNavLink from './MobileNavLink';

export default function NavContent() {
    // const pathname = usePathname();
    const { url, component } = usePage();
    const user = usePage().props.auth.user;

    const navLinks: {
        icon: React.ReactNode;
        path: string;
        label: string;
        as: string;
        method: 'get' | 'post' | 'put' | 'patch' | 'delete';
    }[] = [
        {
            icon: <Home />,
            path: 'home',
            label: 'Home',
            as: 'a',
            method: 'get',
        },
        {
            icon: <SquareArrowUp />,
            path: 'lifts.index',
            label: 'Lifts',
            as: 'a',
            method: 'get',
        },
        {
            icon: <Users />,
            path: 'mechanics.index',
            label: 'Mechanics',
            as: 'a',
            method: 'get',
        },
        {
            icon: <Calendar />,
            path: 'dashboard',
            label: 'Dashboard',
            as: 'a',
            method: 'get',
        },
        {
            icon: <Beer />,
            path: 'profile.edit',
            label: 'Profile',
            as: 'a',
            method: 'get',
        },
        // {
        //     icon: <Beer />,
        //     path: "logout",
        //     label: "Log Out",
        //     as: "button",
        //     method: "post",
        // },
    ];
    return (
        <div className="mt-8 flex w-full flex-col items-center gap-2">
            <MobileNavLink href={route('home')} active={route().current('home')} iconName="home">
                Home
            </MobileNavLink>
            <MobileNavLink href={route('lifts.index')} active={route().current('lifts.index')} iconName="squareArrowUp">
                Lifts
            </MobileNavLink>
            <MobileNavLink href={route('mechanics.index')} active={route().current('mechanics.index')} iconName="users">
                Mechanics
            </MobileNavLink>

            {user ? (
                <>
                    <MobileNavLink
                        href={route('logout')}
                        // active={route().current("mechanics.index")}
                        iconName="powerOff"
                        method="post"
                        as="button"
                        className="border border-[2px] border-red-400"
                    >
                        Log out
                    </MobileNavLink>
                </>
            ) : null}
        </div>
    );
}
