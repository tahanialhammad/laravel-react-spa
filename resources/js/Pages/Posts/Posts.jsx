import SiteLayout from "@/Layouts/SiteLayout";
import { Link, Head } from "@inertiajs/react";


export default function Posts({ posts }) {
  
    return (
        <SiteLayout>
            {/* rfc */}
            <Head title="Posts" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
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
        </SiteLayout>
    );
}
