"use client"
import { useRouter } from "next/navigation"
const ContactStudent = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Student Page</h1>
            <button onClick={() => router.push("/contact") }>Go to contact page</button>
        </div>
    )
}
export default ContactStudent