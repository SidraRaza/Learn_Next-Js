"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Home = () => {
    const router = useRouter();
  return (
  
    <div>
      <h1 className="text-6xl font-bold text-center text-blue-500 py-10">Home Page</h1>

      <Link href="/about"> About </Link>
      <br />
      <Link href="/login"> Login</Link>
      <br />
      <Link href="/contact"> Contact</Link><br />
      {/* <button onClick={() => router.push("/") }>Home</button> */}
    </div>
  );
};

export default Home;