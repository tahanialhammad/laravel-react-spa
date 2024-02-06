import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';


export default function Guest({ children }) {
  const { flash } = usePage().props; 
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
              {/* Flash message */}
              {flash.message && ( <div class="alert text-red-500">{flash.message}</div> )} 
              {/*navbar :  https://tailwindcomponents.com/component/responsive-navbar-12 */}
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
                <Link className="mx-4" href="/about">
                  about
                </Link>
                <Link className="mx-4" href="/contact">
                  contact
                </Link>
                <Link className="mx-4" href="/posts">
                  posts
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
