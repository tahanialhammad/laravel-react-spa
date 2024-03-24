import SiteLayout from "@/Layouts/SiteLayout";
import { Link, Head } from "@inertiajs/react";

export default function Posts({ posts }) {
    return (
        <SiteLayout>
            {/* rfc */}
            <Head title="Posts" />

            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray- py-6 sm:py-12">
                <div className="mx-auto max-w-screen-xl px-4 w-full">
                    <h2 className="mb-4 font-bold text-xl text-gray-600">
                        All blog posts
                    </h2>
                    
                    {posts && posts.length > 0 ? (
                    <div className="grid w-full sm:grid-cols-1 xl:grid-cols-2 gap-6">
                        {posts.map((post) => (
                            <div
                                key={post.id}
                                className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 "
                            >
                                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                    <a
                                        href=""
                                        className="hover:text-orange-600 absolute z-30 top-2 right-0 mt-2 mr-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                                            />
                                        </svg>
                                    </a>
                                    <img
                                        src={post.image ? post.image  : "https://images.unsplash.com/photo-1632927126841-16541389e582?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                        alt="image"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h6 className="mb-4 block text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                        {post.title}
                                    </h6>
                                    <h4 className="mb-2 block text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                          {post.excerpt}
                                    </h4>

                                    <p className="truncate max-w-xs mb-8 block text-base font-normal leading-relaxed text-gray-700 antialiased">
                                        {post.body}
                                    </p>

                                    <div className="inline-block">
                                        <Link
                                            href={`/posts/${post.id}`}
                                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        >
                                            Learn More
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth="2"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                ></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    ):(
                        <h1>There are no posts</h1>
                    )}
                </div>
            </div>

            {/* only in admin */}
         
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <Link href={route('admin.posts')} >Create post</Link>
            </div>
        
        </SiteLayout>
    );
}
