import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";

export default function Post({ auth, post }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    show post
                </h2>
            }
        >
            <Head title="Post" />
            <div className="flex">
                <div className="mt-10 w-2/3">
                    <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative h-64">
                        <div className="absolute left-0 bottom-0 w-full h-full z-10"></div>
                        <img
                            src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
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
                                        Mike Sullivan
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
                    <DeletePost post={post} />

                    <UpdatePost post={post} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
