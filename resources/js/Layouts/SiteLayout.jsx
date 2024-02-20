import SiteNav from "./SiteNav";
import FlashMessage from "@/Components/FlashMessage";
import { usePage } from "@inertiajs/react";

export default function SiteLayout({ user, children }) {
    const { flash } = usePage().props;

    return (
        <div>
            <SiteNav user={user}></SiteNav>
            <div>
                {/* Flash message */}
                {flash.message && (
                    <FlashMessage color="green" className="">
                        {flash.message}
                    </FlashMessage>
                )}
            </div>
            <div>{children}</div>
        </div>
    );
}
