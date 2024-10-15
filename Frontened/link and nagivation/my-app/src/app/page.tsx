"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  const handleClick = (name: string) => {
    router.push(name);
  }
  return (
    <main >
     <div>
     <h1>Home Page</h1>
<Link href="/login"> Login</Link><br />
<Link href="/about"> About</Link><br />
<Link href="/contact"> Contact</Link><br />

<button onClick={() => handleClick("/login")}>Login</button>
<button onClick={() => handleClick("/about")}>About</button>
<button onClick={() => handleClick("/contact")}>Contact</button>

     </div>
    </main>
  );
}
