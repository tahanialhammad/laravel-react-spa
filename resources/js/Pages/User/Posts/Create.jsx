import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors } = useForm({
        title: "",
        body: "",
    });

    function createPost(e) {
        e.preventDefault();
        post(route("myposts.store"));
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
                <div>create new post </div>
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
                    </div>

                    <PrimaryButton onSubmit={createPost} className="ms-3">
                        sibmit
                    </PrimaryButton>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
