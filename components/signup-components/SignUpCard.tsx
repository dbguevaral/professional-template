'use client';

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, RegistrationData } from "@/types/registration";
import AccountStep from "@/components/signup-components/AccountStep";
import ParentStep from "@/components/signup-components/ParentStep";
import VerificationStep from "@/components/signup-components/VerificationStep";
import SuccessStep from "@/components/signup-components/SuccessStep";

export default function SignUpCard() {
    const [step, setStep] = useState(1);

    const methods = useForm<RegistrationData>({
        resolver: zodResolver(registrationSchema),
        mode: "onBlur"
    })
    const onSubmit = (data: RegistrationData) => {
        console.log("Final Submission:", data); 
        // what's next: call supabase auth
    }

    return (
        <div className="w-full max-w-md rounded-2xl border h-170 border-gray-200 bg-white p-8 shadow-sm">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    {step === 1 && <AccountStep onNext={() => setStep(2)} />}
                    {step === 2 && <ParentStep onBack={() => setStep(1)} onNext={() => setStep(3)} />}
                    {step === 3 && <VerificationStep onNext={() => setStep(4)} />}
                    {step === 4 && <SuccessStep />}
                    
                </form>
            </FormProvider>
        </div>
    );
}