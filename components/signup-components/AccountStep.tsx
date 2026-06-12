'use client';
import { useFormContext } from "react-hook-form";

export default function AccountStep({ onNext }: { onNext: () => void }) { 
    // access the parent form state
    const { register, trigger, formState: { errors } } = useFormContext();

    const handleNext = async () => {
        //manually trigger validation only for the fields in this step
        const isValid = await trigger(["email", "password", "parentLastName", "parentFirstName"]);
        if (isValid) onNext();
    }
    return (
        <div>
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight">
                Create Your Account
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                Enter your details to create your account
                </p>
            </div>

            <div className="flex flex-col gap-5">
                <div className="space-y-2">
                <label
                    htmlFor="first_name"
                    className="text-sm font-semibold"
                >
                    First Name
                </label>

                <input
                    {...register("parentFirstName")}
                    placeholder="Enter your first name"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                {errors.parentFirstName && <p className="text-red-500 text-xs mt-1">{errors.parentFirstName.message as string}</p>}
                </div>

                <div className="space-y-2">
                <label
                    htmlFor="last_name"
                    className="text-sm font-semibold"
                >
                    Last Name
                </label>

                <input
                    {...register("parentLastName")}
                    placeholder="Enter your last name"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                {errors.parentLastName && <p className="text-red-500 text-xs mt-1">{errors.parentLastName.message as string}</p>}
                </div>

                <div className="space-y-2">
                <label
                    htmlFor="email"
                    className="text-sm font-semibold"
                >
                    Email
                </label>

                <input
                    {...register("email")}
                    placeholder="Enter your email"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message as string}</p>}
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
                    {...register("password")}
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
                    {...register("confirmPassword")}
                    name="confirm_password"
                    placeholder="Confirm your password"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                </div>

                <button
                type="submit"
                onClick={handleNext}
                className="mt-2 h-11 rounded-xl bg-black text-sm font-medium text-white transition hover:opacity-90"
                >
                Create Account
                </button>
            </div>
        </div>
    )
}