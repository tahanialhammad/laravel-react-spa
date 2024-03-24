import { useState } from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import Modal from "@/Components/Modal";
import EditIcon from "@/Components/Icons/EditIcon";
import InputLabel from "@/Components/InputLabel";
import TextAreaInput from "@/Components/TextAreaInput";
import InputError from "@/Components/InputError";

export default function UpdatePost({ post }) {
    const user = usePage().props.auth.user;
    const { data, setData, patch, errors, reset, processing } = useForm({
        id: post.id,
        title: post.title,
        excerpt :post.excerpt,
        image: post.image,
        body: post.body,
    });

    const updatePost = (e) => {
        e.preventDefault();

        patch(route("post.update"));
        closeModal();
    };

    const [confirming, setConfirming] = useState(false);

    const openModal = () => {
        setConfirming(true);
    };

    const closeModal = () => {
        setConfirming(false);
        reset();
    };

    return (
        <div>
            <button onClick={openModal}>
                <EditIcon />
            </button>

            <Modal show={confirming} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        Update post
                    </h2>

                    <div>
                        <form onSubmit={updatePost}>
                            <div>
                                <InputLabel
                                    htmlFor="title"
                                    value="Post title"
                                />

                                <TextInput
                                    id="title"
                                    type="text"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="Post Title"
                                />
                                <InputError
                                    message={errors.title}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel
                                    htmlFor="excerpt"
                                    value="Post excerpt"
                                />
                                <TextInput
                                    id="excerpt"
                                    type="text"
                                    name="excerpt"
                                    value={data.excerpt}
                                    onChange={(e) =>
                                        setData("excerpt", e.target.value)
                                    }
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="Post excerpt"
                                />
                                <InputError
                                    message={errors.excerpt}
                                    className="mt-2"
                                />
                            </div>
                            
                            <div>
                                <InputLabel
                                    htmlFor="image"
                                    value="Post image"
                                />

                                <TextInput
                                    id="image"
                                    type="text"
                                    name="image"
                                    value={data.image}
                                    onChange={(e) =>
                                        setData("image", e.target.value)
                                    }
                                    className="mt-1 block w-3/4"
                                    isFocused
                                    placeholder="Post image"
                                />
                                <InputError
                                    message={errors.image}
                                    className="mt-2"
                                />
                            </div>

                            <div>
                                <InputLabel htmlFor="body" value="Post body" />
                                <TextAreaInput
                                    name="body"
                                    id="body"
                                    rows="10"
                                    className="mt-1 block w-3/4"
                                    value={data.body}
                                    onChange={(e) =>
                                        setData("body", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.body}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>
                                    Cancel
                                </SecondaryButton>

                                <PrimaryButton
                                    className="ms-3"
                                    disabled={processing}
                                >
                                    sibmit
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
