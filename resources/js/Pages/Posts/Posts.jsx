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
                <Link href="/create">Create post</Link>
               
                <div>
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <Link href={`/posts/${post.id}`}>
                                    {post.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </GuestLayout>
    );
}
