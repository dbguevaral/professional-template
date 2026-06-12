'use client';
import { useFormContext } from "react-hook-form";

export default function ParentStep ({ onNext, onBack}: { onNext: () => void; onBack: () => void; }) {
    const { register, trigger, formState: { errors } } = useFormContext();

    const handleNext = async () => {
        //manually trigger validation only for the fields in this step
        const isValid = await trigger(["childName", "childAge"]);
        if (isValid) onNext();
    }

    return (
        <div>
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold tracking-tight">
                Parent Profile
                </h1>
                <p className="mt-2 text-sm text-gray-500">
                Tell us about your child
                </p>
            </div>

            <div className="flex flex-col gap-5">
                <div className="space-y-2">
                <label
                    htmlFor="child_name"
                    className="text-sm font-semibold"
                >
                    Child's Name
                </label>

                <input
                    {...register("childName")}
                    placeholder="Enter child's name"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                {errors.childName && <p className="text-red-500 text-xs mt-1">{errors.childName.message as string}</p>}
                </div>

                <div className="space-y-2">
                <label
                    htmlFor="child_age"
                    className="text-sm font-semibold"
                >
                    Child's Age
                </label>

                <input
                    type="number"
                    {...register("childAge", { valueAsNumber: true })}
                    placeholder="Enter child's age"
                    className="h-11 w-full rounded-xl border border-gray-300 px-4 text-sm outline-none transition focus:border-black"
                />
                {errors.childAge && <p className="text-red-500 text-xs mt-1">{errors.childAge.message as string}</p>}
                </div>

                <div className="flex gap-4 mt-2">
                    <button
                        type="button"
                        onClick={onBack}
                        className="flex-1 h-11 rounded-xl border border-gray-300"
                    >
                        Back
                    </button>

                    <button
                        type="button"
                        onClick={handleNext}
                        className="flex-1 h-11 rounded-xl bg-black text-white"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
    
}