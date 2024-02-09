import GuestLayout from "@/Layouts/GuestLayout";
import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";

import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };
    return (
        <div>
            <GuestLayout>
                <Head title="Log in" />
                {/* Login */}
                <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold">
                            Sign in to account
                        </h2>
                    </div>
                    <div className="flex flex-col max-w-md space-y-5">
                        {status && (
                            <div className="mb-4 font-medium text-sm text-green-600">
                                {status}
                            </div>
                        )}

                        <form onSubmit={submit}>
                            <div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    value={data.email}
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-4">
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="Your password"
                                    value={data.password}
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>

                            <div className="block mt-4">
                                <label className="flex items-center">
                                    <Checkbox
                                        name="remember"
                                        checked={data.remember}
                                        onChange={(e) =>
                                            setData(
                                                "remember",
                                                e.target.checked
                                            )
                                        }
                                    />
                                    <span className="ms-2 text-sm text-gray-600">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div>
                                <PrimaryButton
                                    className="w-full my-5"
                                    disabled={processing}
                                >
                                    Log in
                                </PrimaryButton>
                            </div>
                        </form>

                        {/* OR */}
                        <div className="flex justify-center items-center">
                            <span className="w-full border border-black"></span>
                            <span className="px-4">Or</span>
                            <span className="w-full border border-black"></span>
                        </div>

                        <div className="flex items-center flex-row w-full justify-between mt-4">
                            {canResetPassword && (
                                <Link
                                    href={route("password.request")}
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Forgot your password?
                                </Link>
                            )}

                            <Link
                                href={route("register")}
                                className="inline-flex items-center px-4 py-2 bg-white border border-black rounded-none font-semibold text-xs text-black uppercase tracking-widest shadow-sm hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
                            >
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </GuestLayout>
        </div>
    );
}
