"use client";
import { useRouter } from "next/navigation";

const AboutTeacher=()=>{
    const router = useRouter();
    return (
        <div>
            <h1 className="text-3xl font-bold  text-center py-20">About Teacher</h1>
            <button onClick={() => router.push("/about")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >go to about page</button><button onClick={() => router.back()}></button>
        </div>
    );
}

export default AboutTeacher