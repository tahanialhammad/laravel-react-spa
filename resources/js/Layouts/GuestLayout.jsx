import GuestNav from './GuestNav';
import ApplicationLogo from '@/Components/ApplicationLogo';
import FlashMessage from '@/Components/FlashMessage';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';



export default function Guest({ children }) {
  const { flash } = usePage().props; 
    return (
      <div className="min-h-screen bg-gray-100">
            <div>
              {/* Flash message */}
              {flash.message && ( <FlashMessage color="green" className="">{flash.message}</FlashMessage> )} 
            </div>

            <div className="w-100">
                {children}
            </div>
        </div>
    );
}