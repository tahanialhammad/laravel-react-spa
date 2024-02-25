import { useRef, useState } from "react";
import DangerButton from "@/Components/DangerButton";
import Modal from "@/Components/Modal";
import SecondaryButton from "@/Components/SecondaryButton";
import { useForm } from "@inertiajs/react";

export default function UseModal() {
    const [confirming, setConfirming] = useState(false);

    const {
        processing,
        reset,
    } = useForm({
        password: "",
    });

    const openModal = () => {
        setConfirming(true);
    };

    const closeModal = () => {
        setConfirming(false);

        reset();
    };

    return (
        <div >

            <DangerButton onClick={openModal}>
                open modal btn
            </DangerButton>

            <Modal show={confirming} onClose={closeModal}>
                <div className="p-6">
                    <h2 className="text-lg font-medium text-gray-900">
                        modal title{" "}
                    </h2>

                    <p className="mt-1 text-sm text-gray-600">
                        modal body text{" "}
                    </p>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>
                            Cancel
                        </SecondaryButton>

                        <DangerButton className="ms-3" disabled={processing}>
                            sibmit
                        </DangerButton>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
