import { Link } from "@inertiajs/react";

export default function FlashMessage({ color = "", className = "", children, ...props }) {
    return (
        <div
            {...props}
            className={
                `w-full mb-2 select-none border-l-4 border-${color}-400 bg-${color}-100 p-4 font-medium hover:border-${color}-500 
                ${className}`
            }
        >
            {children}
        </div>
    );
}
