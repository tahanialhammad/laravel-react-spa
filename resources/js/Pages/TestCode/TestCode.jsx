import HoverDropDowen from "@/Components/HoverDropDowen";
import NavLink from "@/Components/NavLink";
import React from "react";

const navigation = [
    { name: "Home", href: "welcome" },
    { name: "Services", href: "services" },
    { name: "About", href: "about" },
    { name: "Blog", href: "posts" },
    { name: "Contact", href: "contact" },
    {
        name: "Example",
        subNav: [
            { name: "FramerMotion", href: "FramerMotion" },
            { name: "Toggle", href: "Toggle" },
            { name: "LandingPage", href: "LandingPage" },
            { name: "LayoutsExample", href: "LayoutsExample" },
            { name: "TesetCode", href: "TesetCode" },

            
        ],
    },
];

export default function TestCode() {
    return (
        <div>
            <ul>
                {navigation.map((item, index) => (
                    <li key={index}>
                        <a href={item.href}>{item.name}</a>
                        {/* Check if subNav exists */}
                        {item.subNav && (
                            <ul>
                                {item.subNav.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                        <a href={subItem.href}>
                                            {subItem.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>

            <nav
                className="flex items-center justify-between p-6 lg:px-8 bg-red-200"
                aria-label="Global"
            >
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item, index) => (
                        <HoverDropDowen>
                            <HoverDropDowen.Trigger key={index}>
                                <NavLink
                                    key={item.name}
                                    href={item.href && route(item.href)}
                                    active={
                                        item.href && route().current(item.href)
                                    }
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    {item.name}
                                </NavLink>
                            </HoverDropDowen.Trigger>

                            {item.subNav && (
                                <HoverDropDowen.Content>
                                    {item.subNav.map((subItem, subIndex) => (
                                        <HoverDropDowen.Link
                                            href={route(subItem.href)}
                                            key={subIndex}
                                            className="px-2"
                                        >
                                            {subItem.name}
                                        </HoverDropDowen.Link>
                                    ))}
                                </HoverDropDowen.Content>
                            )}
                        </HoverDropDowen>
                    ))}
                </div>
            </nav>
        </div>
    );
}
