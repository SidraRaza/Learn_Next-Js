"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main>
      <div>
        <h1>Fetct Data API Client Component</h1>
      <button onClick={() => router.push("/productlist")}>go to fetch data</button>
      </div>
    </main>
  );
}
