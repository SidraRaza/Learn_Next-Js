import Link from "next/link";

export default function Home() {
  return (
    <main>
     <div className="text-center">
      <h1 className="text-3xl font-bold  py-10">Fetch Data With API Server Component</h1>
      <Link href="/productlist" className="text-1xl font-bold hover:text-gray-500 border-2 p-2 bg-gray-200">Go To Product Page </Link>
     </div>
    </main>
  );
}
