"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
const Login = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Login Page</h1>
     <Link href="/"> Home </Link>
      <br />
      <Link href="/about"> About</Link>
      <br />
      <Link href="/contact"> Contact</Link><br />

      <button onClick={() => router.push("/") }>Home</button>
        </div>  
    )
}

export default Login