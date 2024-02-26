import SiteLayout from '@/Layouts/SiteLayout';
import { Link, Head } from "@inertiajs/react";


export default function Post({post}) {
    return (
        <SiteLayout>
            <Head title="Post" />
           <div>
            <h1>show post for gust</h1>
            <h1>{post.title}</h1>
            <div>{post.body}</div>
           </div>
        </SiteLayout>
    );
}
