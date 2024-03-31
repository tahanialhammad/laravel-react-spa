import MiniDrawerAuthLayout from "@/Layouts/MiniDrawerAuthLayout";
import React from "react";

export default function Customers({ auth, users }) {
    return (
        <MiniDrawerAuthLayout user={auth.user}>
            <div>Customers</div>

            <ul>
                {users.map((user) => (
                    <li>{user.name}</li>
                ))}
            </ul>
        </MiniDrawerAuthLayout>
    );
}
