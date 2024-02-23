import AnimatedAuthNav from './AnimatedAuthNav';
import AuthNav from './AuthNav';

export default function Authenticated({ user, header, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <AuthNav user={user} ></AuthNav>
            <AnimatedAuthNav user={user}></AnimatedAuthNav>

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
