import * as React from 'react';
import { Link } from '@inertiajs/react';
import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
// import MobileNav from "@/components/TopNavbar/MobileNav";
import MobileNav from '@/components/TopNavbar/MobileNav';
// import { ModeToggle } from "@/components/TopNavbar/ModeToggle";
import { PageProps } from '@/types';
import AppearanceToggleTab from '../appearance-tabs';
import { ModeToggle } from './ModeToggle';

const components: { title: string; href: string; description: string }[] = [
    {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description: 'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description: 'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
];

export default function TopNavbar({ auth }: PageProps) {
    return (
        <>
            <div className="container mx-auto flex h-[56px] w-full max-w-2xl justify-between px-6 lg:max-w-7xl">
                {/* <div className="flex items-center">LOGO</div> */}
                <Link href="/" className="flex min-w-max items-center justify-center gap-2">
                    <img src="/assets/images/site-logo.png" alt="Site Logo" width={20} height={20} />
                    <div className="py-2 font-bold">SKRIEMELIS!</div>
                    {/*TODO replace logo with SVG*/}
                    {/*<svg*/}
                    {/*    className="size-5 sm:size-6"*/}
                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                    {/*    fill="none"*/}
                    {/*    viewBox="0 0 24 24"*/}
                    {/*>*/}
                    {/*    <g fill="#772D20">*/}
                    {/*        <path*/}
                    {/*            d="M13.09 3.294c1.924.95 3.422 1.69 5.472.692a1 1 0 0 1 1.438.9v9.54a1 1 0 0 1-.562.9c-2.981 1.45-5.382.24-7.25-.701a38.739 38.739 0 0 0-.622-.31c-1.033-.497-1.887-.812-2.756-.77-.76.036-1.672.357-2.81 1.396V21a1 1 0 1 1-2 0V4.971a1 1 0 0 1 .297-.71c1.522-1.506 2.967-2.185 4.417-2.255 1.407-.068 2.653.453 3.72.967.225.108.443.216.655.32Z"/>*/}
                    {/*    </g>*/}

                    {/*</svg>*/}
                </Link>
                <NavigationMenu className="max-sm:hidden">
                    <NavigationMenuList>
                        {' '}
                        <NavigationMenuItem>
                            <Link href="/">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Home</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                href="/"
                                            >
                                                {/* <Icons.logo className="h-6 w-6" /> */}
                                                <div className="mt-4 mb-2 text-lg font-medium">Sample WEB page</div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    WEB page built with shadcn/ui and Tailwind CSS.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/portfolio/landing" title="Portfolio Landing Page">
                                        Landing Page
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[450px] md:grid-cols-2 lg:w-[550px]">
                                    {components.map((component) => (
                                        <ListItem key={component.title} title={component.title} href={component.href}>
                                            {component.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        {auth.user ? (
                            <NavigationMenuItem>
                                <Link href="/dashboard">
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dashboard</NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ) : null}
                        <NavigationMenuItem>
                            <Link href="/about">
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                    {/*<div className="ml-8"></div>*/}
                    <ModeToggle />
                    {/* <AppearanceToggleTab /> */}
                    <nav className="-mx-3 ml-2 flex flex-1 justify-end">
                        {auth.user ? null : (
                            <>
                                {/*<Link*/}
                                {/*    href={route("login")}*/}
                                {/*    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-hidden focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"*/}
                                {/*>*/}
                                {/*    Log in*/}
                                {/*</Link>*/}
                                {/*<Link*/}
                                {/*    href={route("register")}*/}
                                {/*    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-hidden focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"*/}
                                {/*>*/}
                                {/*    Register*/}
                                {/*</Link>*/}
                            </>
                        )}
                    </nav>
                </NavigationMenu>
                <MobileNav />
            </div>
        </>
    );
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none',
                        className,
                    )}
                    {...props}
                >
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">{children}</p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
