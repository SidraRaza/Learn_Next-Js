"use client"
export default function Students(params: any) {
    console.log(params);
    
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold">Student Details</h1>
           <h3>Name: {params.params.student}</h3>
            
        </div>
    );
}
