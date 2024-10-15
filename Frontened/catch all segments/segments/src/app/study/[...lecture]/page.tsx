"use client"

export default function Lecture({ params }: any) {
    // Assuming params.lecture is an array
    let lectures = "";
    for (let i = 0; i < params.lecture.length; i++) {
        lectures = `Lecture ${i + 1}: ${params.lecture[i]} `;
    }

    
    return (
        <div>
            <h1>{lectures}</h1>
            <h1>lecture:{params.lecture[0]}</h1> {/* This will display the second lecture if it exists */}
        </div>
    )
}
