import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-cente p-24">
            <h1 className="text-center text-[2rem] font-semibold">
                Test aplication
            </h1>
            <p className="mt-[5rem] text-center text-green-500">
                The deployment of the project has been successful!
            </p>
        </main>
    );
}
