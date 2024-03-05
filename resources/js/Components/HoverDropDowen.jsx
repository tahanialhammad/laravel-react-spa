import { Link } from "@inertiajs/react";
import React, { useState, createContext, useContext } from "react";

const HoverDropDownContext = createContext();
export default function HoverDropDown({ children }) {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <HoverDropDownContext.Provider value={{ open, toggleOpen }}>
            <div className="relative" onMouseLeave={() => setOpen(false)}>
                {children}
            </div>
        </HoverDropDownContext.Provider>
    );
}

const Trigger = ({ children, className = "" }) => {
    const { toggleOpen } = useContext(HoverDropDownContext);

    return (
        <button
            className={className}
            onMouseEnter={toggleOpen}
            // onMouseLeave={toggleOpen} Remove this line
        >
            {children}
        </button>
    );
};

const Content = ({
    align = "right",
    width = "48",
    contentClasses = "py-1 bg-white",
    children,
}) => {
    const { open } = useContext(HoverDropDownContext);
    // const { toggleOpen } = useContext(HoverDropDownContext); Remove this line

    let alignmentClasses = "origin-top";

    if (align === "left") {
        alignmentClasses = "ltr:origin-top-left rtl:origin-top-right start-0";
    } else if (align === "right") {
        alignmentClasses = "ltr:origin-top-right rtl:origin-top-left end-0";
    }

    let widthClasses = "";

    if (width === "48") {
        widthClasses = "w-48";
    }

    return (
        <>
            {open && (
                <div
                    className={`absolute z-50 pt-2 rounded-md shadow-lg ${alignmentClasses} ${widthClasses}`}
                    onMouseLeave={() => setOpen(false)}
                >
                    <div
                        className={`rounded-md ring-1 ring-black ring-opacity-5 ${contentClasses}`}
                    >
                        {children}
                    </div>
                </div>
            )}
        </>
    );
};

const DropdownLink = ({ className = "", children, ...props }) => {
    return (
        <Link
            {...props}
            className={
                "block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out " +
                className
            }
        >
            {children}
        </Link>
    );
};

HoverDropDown.Trigger = Trigger;
HoverDropDown.Content = Content;
HoverDropDown.Link = DropdownLink;
