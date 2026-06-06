import Image from "next/image";
import Link from "next/link";
import { Inter } from 'next/font/google';
// Importing specific Lucide icons for the cards and features
import { 
  Users, 
  UserRound, 
  ClipboardCheck, 
  BarChart3, 
  HeartHandshake, 
  ShieldCheck 
} from "lucide-react";
import Navbar from "@/components/navbar";
import hero_right_illustration from "@/assets/hero_right_illustration.png";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`min-h-screen bg-white ${inter.className}`}>
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Column: Text and Selection Cards */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
              Better support.<br />Better outcomes.
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              A collaborative platform for parents and professionals to track 
              behavioral tasks, monitor progress, and celebrate growth.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Who are you?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              {/* Parent Card */}
              <Link href="/for-parents" className="flex flex-col items-center group border border-gray-200 rounded-2xl p-6 hover:border-blue-600 hover:shadow-md transition-all">
                <div className="mb-4">
                  <Users className="w-8 h-8 text-gray-400 group-hover:text-blue-600" />
                </div>
                <h3 className="font-bold text-lg">I'm a Parent</h3>
                <p className="text-sm text-gray-500">Support my child's growth and progress</p>
              </Link>

              {/* Professional Card */}
              <Link href="/for-professionals" className="flex flex-col items-center group border border-gray-200 rounded-2xl p-6 hover:border-blue-600 hover:shadow-md transition-all">
                <div className="mb-4">
                  <UserRound className="w-8 h-8 text-gray-400 group-hover:text-blue-600" />
                </div>
                <h3 className="font-bold text-lg">I'm a Professional</h3>
                <p className="text-sm text-gray-500">Manage my clients and track their progress</p>
              </Link>
            </div>
          </div>

          {/* Bottom Features Highlight */}
          <div className="pt-8 border-t border-gray-100 flex gap-8">
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <ClipboardCheck className="text-gray-400" />
              <p>Behavioral Task Tracking</p>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <BarChart3 className="text-gray-400" />
              <p>Real-time Progress Monitoring</p>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-gray-700">
              <HeartHandshake className="text-gray-400" />
              <p>Collaborative Care</p>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Illustration */}
        <div className="flex-1 w-full lg:w-auto flex justify-center items-center">
          <div className="relative w-full max-w-lg aspect-square hidden lg:block">
            <Image 
              src={hero_right_illustration} 
              alt="Family and Professional collaborative illustration"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Hero Footer Disclaimer */}
      <div className="w-full text-center py-6">
        <p className="flex items-center justify-center gap-2 text-xs text-gray-400 uppercase tracking-widest">
          <ShieldCheck/>
          Secure. Private. Built for Better Care.
        </p>
      </div>
    </main>
  );
}