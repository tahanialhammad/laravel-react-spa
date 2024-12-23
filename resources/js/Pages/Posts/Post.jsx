import SiteLayout from "@/Layouts/SiteLayout";
import { Link, Head } from "@inertiajs/react";

export default function Post({ auth, post }) {
    return (
        <SiteLayout user={auth.user}>
            <Head title="Post" />

            <div className="flex">
                <div className="mt-10 w-2/3">
                    <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-64">
                        <div className="absolute left-0 bottom-0 w-full h-full z-10"></div>
                        <img
                            src={
                                post.image
                                    ? post.image
                                    : "https://images.unsplash.com/photo-1632927126841-16541389e582?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            }
                            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
                        />
                        <div className="p-4 absolute bottom-0 left-0 z-20">
                            <a
                                href="#"
                                className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
                            >
                                Nutrition
                            </a>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                                {post.title}
                            </h2>
                            <div className="flex mt-3">
                                <img
                                    src="https://randomuser.me/api/portraits/men/97.jpg"
                                    className="h-10 w-10 rounded-full mr-2 object-cover"
                                />
                                <div>
                                    <p className="font-semibold text-gray-200 text-sm">
                                        {/* {post.user.name} */}
                                    </p>
                                    <p className="font-semibold text-gray-400 text-xs">
                                        {post.created_at}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        <p className="pb-6">{post.body}</p>
                    </div>
                </div>

                <div className="w-1/3 flex space-x-2">
                    <h1>Category</h1>
                </div>
            </div>
        </SiteLayout>
    );
}
