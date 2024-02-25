import { useRef, useState } from "react";
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";

export default function AddPost() {
    const [confirming, setConfirming] = useState(false);

    const openModal = () => {
        setConfirming(true);
    };

    const closeModal = () => {
        setConfirming(false);

        reset();
    };

    // Form helper:https://inertiajs.com/forms
    const { data, setData, post, errors } = useForm({
        title: "",
        body: "",
    });

    function createPost(e) {
        e.preventDefault();
        //   alert('Çreating post');
        post("/admin/create");
    }

    return (
        <div>
            <PrimaryButton onClick={openModal}>Add post</PrimaryButton>

            <Modal show={confirming} onClose={closeModal}>
                <div className="p-6">
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
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
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
                                    onChange={(e) =>
                                        setData("body", e.target.value)
                                    }
                                ></textarea>
                                {errors.body && <div>{errors.body}</div>}
                            </div>

                            <div className="mt-6 flex justify-end">
                                <SecondaryButton onClick={closeModal}>
                                    Cancel
                                </SecondaryButton>

                                <PrimaryButton className="ms-3">
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
