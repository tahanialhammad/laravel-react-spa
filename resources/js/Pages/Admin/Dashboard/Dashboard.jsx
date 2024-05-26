import Slider from "@/Components/MUI/Slider/Slider";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            {/* <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" /> */}

            <div className="">
                <div>
                    <Slider />
                </div>

                <div className="max-w-8xl mx-auto sm:px-6 lg:px-16 my-2">
                    <div className="flex gap-3 mb-2">
                        <div className="w-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-hidden shadow-sm sm:rounded-lg p-4">
                            <h3>Your sales targets this month</h3>
                            <div className="flex items-center">
                                <h3 className="font-bold text-xl">€ 699</h3>
                                <span className="text-xs ms-2">
                                    This is € 199 more than last month
                                </span>
                            </div>
                        </div>
                        <div className="w-1/4">
                            <div className="bg-gray-700 overflow-hidden shadow-sm sm:rounded-lg mb-1 p-4">
                            <h3>Transfer</h3>
                            <div className="flex items-center">
                                <h3 className="font-bold text-xl">1 Transfer</h3>
                                <span className="text-xs ms-2">
                                Waiting to be received
                                </span>
                            </div>
                            </div>
                            <div className="bg-gray-700 overflow-hidden shadow-sm sm:rounded-lg p-4">
                                ffffff
                            </div>
                        </div>
                        <div className="w-1/4 bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-hidden shadow-sm sm:rounded-lg p-4">
                            ffffff
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gradient-to-r from-violet-500 to-fuchsia-500 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
            {/* </AuthenticatedLayout> */}
        </MiniDrawerAuthLayout>
    );
}
