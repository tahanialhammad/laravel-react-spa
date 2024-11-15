import { Link } from "@inertiajs/react";

export default function FlashMessage({
    level = "",
    className = "",
    children,
    ...props
}) {
    let FlashMessagelevel = "";
    if (level === "danger") {
        FlashMessagelevel = "border-red-400 bg-red-100 hover:border-red-500 ";
    } else if (level === "success") {
        FlashMessagelevel =
            "border-green-400 bg-green-100 hover:border-green-500 ";
    }

    return (
        <div
            {...props}
            className={`w-full mb-2 dark:text-black select-none border-l-4 border-indigo-400 bg-indigo-100 p-4 font-medium hover:border-indigo-500 
                ${className}
                ${FlashMessagelevel}
                `}
        >
            {children}
        </div>
    );
}
