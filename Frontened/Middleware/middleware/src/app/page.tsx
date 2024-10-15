import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
       <div className="max-w-[1320px] mx-auto bg-red-300 p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-700">Home Page</h1>
          <div className="text-2xl font-bold flex space-x-4">
            <Link href="/" className="hover:text-red-400 border-red-200 border-1  px-2 rounded-full bg-red-200 p-2 text-red-700">Home</Link>
            <Link href="/about" className="hover:text-red-400 border-red-200 border-1  px-2 rounded-full bg-red-200 p-2 text-red-700">About</Link>
            <Link href="/login" className="hover:text-red-400 border-red-200 border-1  px-2 rounded-full bg-red-200 p-2 text-red-700">Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
