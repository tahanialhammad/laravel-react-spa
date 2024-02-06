import GuestLayout from "@/Layouts/GuestLayout";
import { Link, Head } from "@inertiajs/react";

export default function Contact(props) {
    return (
        <GuestLayout>
            <Head title="Contact" />
            <div className="">
                <h1>Contact {props.name} page</h1>
            </div>
        </GuestLayout>
    );
}
