import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import AddPost from "./AddPost";
import ViewIcon from "@/Components/Icons/ViewIcon";
import EditIcon from "@/Components/Icons/EditIcon";
import TrashIcon from "@/Components/Icons/TrashIcon";
import DeletePost from "./DeletePost";
import UpdatePost from "./UpdatePost";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import PrimaryLinkButton from "@/Components/PrimaryLinkButton";

export default function Posts({ auth, posts }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <section>
                <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-blueGray-700">
                                    Posts
                                </h3>
                            </div>
                            <div className="w-full px-4 max-w-full flex-grow flex-1 text-right">
                                <PrimaryLinkButton href={route("admin/create")}>
                                    Add Post
                                </PrimaryLinkButton>
                                {/* <AddPost /> */}
                            </div>
                        </div>
                    </div>

                    <div className="block w-full overflow-x-auto">
                        <table className="items-center bg-transparent w-full border-collapse ">
                            <thead>
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Post title
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Author
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        post excerpt
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Created at
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {posts.map((post) => (
                                    <tr key={post.id}>
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                            {post.title}
                                        </th>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                            {post.user.name}
                                        </td>
                                        <td className="truncate max-w-xs border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {post.excerpt}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            {/* {post.created_at} */}
                                            {post.formatted_created_at}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                            <div className="flex space-x-2">
                                                <Link href={`/admin/posts/${post.id}`} >
                                                    <ViewIcon />
                                                </Link>

                                                <DeletePost post={post} />

                                                <UpdatePost post={post} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </MiniDrawerAuthLayout>
    );
}
