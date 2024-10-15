import Link from "next/link";

function StudentList() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Student List</h1>
            <ul className="list-disc pl-5">
                <li>
                    <Link href="/studentlist/sidra">Sidra</Link>
                </li>
                <li>
                    <Link href="/studentlist/ahmed">Ahmed</Link>
                </li>
                <li>
                    <Link href="/studentlist/ali">Ali</Link>
                </li>
                <li>
                    <Link href="/studentlist/danish">Danish</Link>
                </li>
            </ul>
            
        </div>
    );
}
export default StudentList 