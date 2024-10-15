import Link from "next/link"

const Login = () => {
    return (
        <div className="bg-red-200 p-5">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-blue-500">Login Page</h1>
                <div className="space-x-4">
                    <Link href="/" className="rounded-full border-2 border-blue-300 bg-blue-300 p-2 hover:bg-blue-400 text-white-500">Home</Link>
                    <Link href="/about" className="rounded-full p-2 border-2 border-blue-300 bg-blue-300 hover:bg-blue-400 text-white-900">About</Link>
                    <Link href="/contact" className="rounded-full p-2 border-2 border-blue-300 bg-blue-300 hover:bg-blue-400 text-white-900">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
