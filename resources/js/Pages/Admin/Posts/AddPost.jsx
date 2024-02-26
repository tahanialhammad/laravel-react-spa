import { useRef, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";

export default function AddPost() {
    const [confirming, setConfirming] = useState(false);

    const openModal = () => {
        setConfirming(true);
        reset();
    };

    const closeModal = () => {
        setConfirming(false);
        reset();
    };

    // Form helper:https://inertiajs.com/forms
    const { data, setData, post, errors, reset } = useForm({
        title: "",
        body: "",
    });

    function createPost(e) {
        e.preventDefault();
        //   alert('Çreating post');
        post("/admin/create");
        closeModal();
    }

    return (
        <div>
            <PrimaryButton onClick={openModal}>Add post</PrimaryButton>

            <Modal show={confirming} onClose={closeModal}>
                <div className="p-6">
                    <div className="">
                        <h2 className="text-lg font-medium text-gray-900">
                            create post with Form helper
                        </h2>
                        <p className="mt-1 text-sm text-gray-600">
                            admin can add post
                        </p>
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
                                {/* {errors.title && <div>{errors.title}</div>} */}
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

                                {/* {errors.body && <div>{errors.body}</div>} */}
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>
                                    Cancel
                                </SecondaryButton>

                                <PrimaryButton
                                    onSubmit={createPost}
                                    className="ms-3"
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
