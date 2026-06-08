export default function SignUpCard() {
    return (
        <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight">
                Create Your Account
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                Enter your details to create your account.
                </p>
            </div>

            <form className="flex flex-col gap-5">
                <div className="space-y-2">
                <label
                    htmlFor="first_name"
                    className="text-sm font-semibold"
                >
                    First Name
                </label>

                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter your first name"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                </div>

                <div className="space-y-2">
                <label
                    htmlFor="last_name"
                    className="text-sm font-semibold"
                >
                    Last Name
                </label>

                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter your last name"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                </div>

                <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="text-sm font-semibold"
                >
                    Email
                </label>

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                </div>

                <div className="space-y-2">
                <label
                    htmlFor="password"
                    className="text-sm font-semibold"
                >
                    Password
                </label>

                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Create a password"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                </div>

                <div className="space-y-2">
                <label
                    htmlFor="confirm_password"
                    className="text-sm font-semibold"
                >
                    Confirm Password
                </label>

                <input
                    type="password"
                    id="confirm_password"
                    name="confirm_password"
                    placeholder="Confirm your password"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                </div>

                <button
                type="submit"
                className="mt-2 h-11 rounded-xl bg-black text-sm font-medium text-white transition hover:opacity-90"
                >
                Next
                </button>
            </form>
        </div>
    );
    }