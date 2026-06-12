'use client';

export default function VerificationStep ({ onNext }: { onNext: () => void }) {
    
    return (
        <div>
            <div className="mb-8 text-center">
                    <h1 className="text-3xl font-bold tracking-tight"> Almost Done! </h1>
                    <p className="mt-2 text-sm text-gray-500">
                    Check your email </p>
                    <p>We've sent a verification link to your email address.</p>
                    <div>Image of Mail</div>
                    <p>Didn't recieve the email?</p>
                    <button
                    type="submit"
                    onClick={onNext}
                    className="mt-2 h-11 rounded-xl bg-black text-sm font-medium text-white transition hover:opacity-90"
                    >Resend</button>
            </div>
        </div>
    ) 
}