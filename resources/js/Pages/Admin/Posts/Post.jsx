import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Link, Head } from "@inertiajs/react";
import { useForm } from '@inertiajs/react';
import DeletePost from './DeletePost';


export default function Post({auth, post}) {
 
    const {
        data,
        setData,
        delete: destroy,
     
    } = useForm({
      id: post.id
    });
 
    const deletePost = (e) => {
        e.preventDefault();

        destroy(route('post.destroy'));
    };

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

            <form onSubmit={deletePost} className="p-6">

            {/* <Link href={route('post.destroy')}>delete</Link> */}

            <button type='submit'>submit</button>
</form>

<DeletePost post= {post}/>
           </div>
        </AuthenticatedLayout>
    );
}
