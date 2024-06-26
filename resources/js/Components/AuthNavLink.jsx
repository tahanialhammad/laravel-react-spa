import { Link } from '@inertiajs/react';

export default function AuthNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                '' +
                (active
                    ? ''
                    : '') +
                className
            }
        >
            {children}
        </Link>
    );
}
