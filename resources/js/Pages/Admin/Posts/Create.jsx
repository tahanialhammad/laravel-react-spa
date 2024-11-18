import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import { Link, Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import PrimaryButton from "@/Components/PrimaryButton";
import Swal from "sweetalert2";


export default function Create({ auth }) {
    // Form helper:https://inertiajs.com/forms
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        body: "",
        excerpt: "",
        image: "",
    });

    function createPost(e) {
        e.preventDefault();
        //   alert('Çreating post');
        post("/admin/create");
        Swal.fire({
            title: "Add Post!",
            icon: "success",
            confirmButtonText: "Cool",
        });
    }

    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <Head title="Create Post" />
            <div className="">
                <h1>Add new post</h1>

                <form action="#" onSubmit={createPost}>
                    <div>
                        <InputLabel
                            htmlFor="title"
                            value="Post title"
                            // className="sr-only"
                        />

                        <TextInput
                            id="title"
                            type="text"
                            name="title"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Post Title"
                        />
                        <InputError message={errors.title} className="mt-2" />
                        {/* {errors.title && <div>{errors.title}</div>} */}
                    </div>

                    <div>
                        <InputLabel htmlFor="excerpt" value="Post excerpt" />
                        <TextInput
                            id="excerpt"
                            type="text"
                            name="excerpt"
                            value={data.excerpt}
                            onChange={(e) => setData("excerpt", e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Post excerpt"
                        />
                        <InputError message={errors.excerpt} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="image" value="Post image" />

                        <TextInput
                            id="image"
                            type="text"
                            name="image"
                            value={data.image}
                            onChange={(e) => setData("image", e.target.value)}
                            className="mt-1 block w-3/4"
                            isFocused
                            placeholder="Post image"
                        />
                        <InputError message={errors.image} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="body" value="Post body" />
                        <TextAreaInput
                            name="body"
                            id="body"
                            rows="10"
                            className="mt-1 block w-3/4"
                            value={data.body}
                            onChange={(e) => setData("body", e.target.value)}
                        />
                        <InputError message={errors.body} className="mt-2" />

                        {/* {errors.body && <div>{errors.body}</div>} */}
                    </div>

                    <div>
                        <PrimaryButton onSubmit={createPost} className="ms-3">
                            sibmit
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </MiniDrawerAuthLayout>
    );
}
