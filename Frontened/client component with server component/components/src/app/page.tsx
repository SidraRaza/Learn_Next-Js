"use client";

import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    <div>
    <h1 className="text-3xl font-bold">Home Page</h1><br />
    <Link href="/productlist" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded ">Go To Product List</Link>
    </div>
    </main>
  );
}
