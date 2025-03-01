import { InertiaLinkProps, Link } from "@inertiajs/react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";
import {
    Home,
    Beer,
    Calendar,
    SquareArrowUp,
    Users,
    PowerOff,
} from "lucide-react";

type Icons =
    | "home"
    | "beer"
    | "calendar"
    | "squareArrowUp"
    | "users"
    | "powerOff";

const getIconFromName = (iconName: Icons) => {
    switch (iconName) {
        case "home":
            return <Home />;
        case "beer":
            return <Beer />;
        case "calendar":
            return <Home />;
        case "squareArrowUp":
            return <SquareArrowUp />;
        case "users":
            return <Users />;
        case "powerOff":
            return <PowerOff />;
        default:
            return <Beer />;
    }
};

export default function MobileNavLink({
    active = false,
    className = "",
    children,
    iconName,
    ...props
}: InertiaLinkProps & { active?: boolean; iconName: Icons }) {
    const icon = getIconFromName(iconName);
    return (
        <SheetClose asChild>
            <Link
                {...props}
                className={cn(
                    "flex w-full items-center justify-start gap-3 px-6 py-3",
                    {
                        "bg-slate-300/30": active,
                    },
                    className
                )}
            >
                <Slot
                    className={cn("text-slate-500", {
                        "text-slate-800": active,
                    })}
                >
                    {icon}
                </Slot>
                <span
                    className={cn("", {
                        "font-bold": active,
                    })}
                >
                    {children}
                </span>
            </Link>
        </SheetClose>
    );
}
