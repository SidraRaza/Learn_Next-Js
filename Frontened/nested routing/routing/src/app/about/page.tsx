"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const About = () => {
    const router = useRouter();
  return (
  
    <div>
      <h1>About Page</h1>

      <Link href="/"> Home </Link>
      <br />
      <Link href="/login"> Login</Link>
      <br />
      <Link href="/contact"> Contact</Link><br />
      <Link href="/about/aboutStudent">About Student</Link><br />
      <Link href="/about/aboutCollege">About College</Link><br />
      <button onClick={() => router.push("/") }>Home</button>
    </div>
  );
};

export default About;
