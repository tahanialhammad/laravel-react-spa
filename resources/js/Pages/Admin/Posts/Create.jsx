import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    // Form helper:https://inertiajs.com/forms
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        body: "",
    });

    function createPost(e) {
        e.preventDefault();
        //   alert('Çreating post');
        post("/admin/create");
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Crreat post
                </h2>
            }
        >
            <Head title="Create Post" />
            <div className="">
                <div>create post with Form helper</div>

                <form action="#" onSubmit={createPost}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                        />
                        {errors.title && <div>{errors.title}</div>}
                    </div>
                    <div>
                        <label htmlFor="body">Body</label>
                        <textarea
                            name="body"
                            id="body"
                            cols="30"
                            rows="10"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        ></textarea>
                        {errors.body && <div>{errors.body}</div>}
                    </div>
                    <div>
                        <button>Create Post</button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
