"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const Contact = () => {
    const router = useRouter();
  return (
    <div>
         <h1 className="text-6xl font-bold text-center text-blue-500">Contact Page</h1>
      <Link href="/" > Home </Link>
      <br />
      <Link href="/login"> Login</Link>
      <br />
      <Link href="/about"> About</Link><br />
      

      <button onClick={() => router.push("/") }>Home</button>
    </div>
  );
 
};

export default Contact;








