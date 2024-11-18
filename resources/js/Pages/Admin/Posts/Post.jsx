import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";

export default function Post({ auth, post }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <Head title="Post" />
            <div className="flex">
                <div className="mt-10 w-2/3">
                    <h2 className="text-4xl leading-tight">{post.title}</h2>
                    <p className="font-semibold text-gray-400 text-xs">
                        {post.created_at}
                    </p>
                    <img
                        src={
                            post.image
                                ? post.image
                                : "https://images.unsplash.com/photo-1632927126841-16541389e582?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        }
                    />
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
                        <p className="pb-6">{post.body}</p>
                    </div>
                </div>

                <div className="w-1/3 flex space-x-2">
                    <DeletePost post={post} />

                    <UpdatePost post={post} />
                </div>
            </div>
        </MiniDrawerAuthLayout>
    );
}
