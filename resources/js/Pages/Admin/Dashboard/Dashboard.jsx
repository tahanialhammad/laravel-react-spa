import Slider from '@/Components/MUI/Slider/Slider';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MiniDrawerAuthLayout from '@/Layouts/MiniDrawerAuthLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <MiniDrawerAuthLayout
        user={auth.user}
        >

{/* <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" /> */}

            <div className="py-12">

<div>
    <Slider />
</div>



                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-green-400 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        {/* </AuthenticatedLayout> */}


        </MiniDrawerAuthLayout>
    
    );
}
