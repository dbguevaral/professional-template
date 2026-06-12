'use client';
import { useFormContext } from "react-hook-form";

export default function SuccessStep () {
    
    return(
        <div>
            <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight">
                    Welcome!
                    </h1>
                    <p className="mt-2 text-sm text-gray-500">
                    Your account has been created succesfully
                    </p>

                    <div>Image of Check</div>

                    <button
                    type="submit"
                    className="mt-2 h-11 rounded-xl bg-black text-sm font-medium text-white transition hover:opacity-90"
                    >Go to Dashboard</button>
                </div>
        </div>
    )
}