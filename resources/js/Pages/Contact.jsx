import SiteLayout from "@/Layouts/SiteLayout";
import { Link, Head } from "@inertiajs/react";

export default function Contact(props) {
    return (
        <SiteLayout>
            <Head title="Contact" />
            <div className="">
                <h1>Contact {props.name} page</h1>
            </div>
        </SiteLayout>
    );
}
