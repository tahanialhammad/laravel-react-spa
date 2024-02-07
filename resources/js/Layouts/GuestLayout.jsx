import GuestNav from './GuestNav';
import ApplicationLogo from '@/Components/ApplicationLogo';
import FlashMessage from '@/Components/FlashMessage';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';



export default function Guest({ children }) {
  const { flash } = usePage().props; 
    return (
      <div className="min-h-screen bg-gray-100">
          <GuestNav></GuestNav>
            <div>
              {/* Flash message */}
              {flash.message && ( <FlashMessage color="green" className="">{flash.message}</FlashMessage> )} 
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
