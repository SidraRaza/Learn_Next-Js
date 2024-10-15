"use client";
import { useRouter } from "next/navigation";

const About=()=>{
    const router = useRouter();
    return (
        <div>
            <h1 className="text-3xl font-bold  ml-10 py-20">About</h1>
            
            <button onClick={() => router.push("/")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10 " >Go To Home Page</button><button onClick={() => router.back()}></button><br /><br />
            <button onClick={() => router.push("/about/aboutStudent")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10 " >Go To About Student</button><button onClick={() => router.back()}></button><br /><br />
            <button onClick={() => router.push("/about/aboutTeacher")} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-10" >Go To About Teacher</button><button onClick={() => router.back()}></button>

        </div>
    );
}

export default About