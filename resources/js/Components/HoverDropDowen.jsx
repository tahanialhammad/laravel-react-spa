import React, { useState, createContext, useContext } from "react";

const HoverDropDownContext = createContext();

// https://tailwindcomponents.com/component/dropdown-9
// https://tailwindcomponents.com/component/filter-reset

export default function HoverDropDown({ children })  {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
        setOpen((previousState) => !previousState);
    };

    return (
        <HoverDropDownContext.Provider value={{ open, toggleOpen }}>
            <div className="relative">{children}</div>
        </HoverDropDownContext.Provider>
    );
};

const Trigger = ({ children, className = "" }) => {
    const { toggleOpen } = useContext(HoverDropDownContext);

    return (
        <button
            className={className}
            onMouseEnter={toggleOpen}
            onMouseLeave={toggleOpen}
        >
            {children}
        </button>
    );
};

const Content = ({ children, className = "" }) => {
    const { open } = useContext(HoverDropDownContext);

    return <>{open && <div className={className}>{children}</div>}</>;
};

HoverDropDown.Trigger = Trigger;
HoverDropDown.Content = Content;

