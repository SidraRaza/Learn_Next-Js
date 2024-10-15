import Image from "next/image";
import Profile from "../../public/vercel.svg";
export default function Home() {
  return (
    <main>
    <div>
      <h1 className="text-3xl font-bold text-center text-red-500 py-10">Image Optimization In Next.js</h1><br />
      <Image src={Profile} alt="Profile" /><br />
      <Image src="https://wallpaperaccess.com/full/2272113.jpg" alt="Karachi"
        width={500} height={500} />
    </div>
    </main>
  );
}
