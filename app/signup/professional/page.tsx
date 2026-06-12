import SignUpCard from "@/components/signup-components/SignUpCard";
import Navbar from "@/components/navbar";
import { Inter } from 'next/font/google';    

const inter = Inter({ subsets: ['latin'] });

export default function professional() {
    return (
        <div className={`min-h-screen bg-white ${inter.className}`}>
            <Navbar />
            <section className="flex items-center justify-center p-8">
                <SignUpCard />
            </section>
        </div>
    )
}