import GuestLayout from '@/Layouts/GuestLayout';
import { Link, Head } from "@inertiajs/react";


export default function Post({post}) {
    return (
        <GuestLayout>
            <Head title="Post" />
           <div>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
           </div>
        </GuestLayout>
    );
}
