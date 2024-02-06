import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";

export default function Posts({ posts }) {
    return (
        <GuestLayout>
            {/* rfc */}
            <Head title="Posts" />
            <div className="">
                {/* Guset Page Content */}
                <h1>posts page</h1>
                <div>
                    <ul>
                        {posts.map((post) => (
                            <li>{post.title}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </GuestLayout>
    );
}
