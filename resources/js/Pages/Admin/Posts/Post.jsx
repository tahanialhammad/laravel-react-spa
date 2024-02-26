import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from "@inertiajs/react";


export default function Post({auth, post}) {
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
           <div>
            <h1>voor admin</h1>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
            <Link href={route('post.destroy', post.id)}>deleteeeeeeeeeeeeeeee</Link>

           </div>
        </AuthenticatedLayout>
    );
}
