import Navbar from "@/components/navbar";

export default function test() {
    return (
        <main className="flex flex-col w-full items-center justify-between">
            <Navbar />
            <div className="flex flex-col items-center mt-20 text-center gap-4 sm:items-start sm:text-left">
                <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight">Test Page</h1>
                <p className="text-lg">This is where I can test stuff from my coding.</p>
            </div>
            
        </main>
    )
}