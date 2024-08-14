export default function Lecture(params: { lecture: string[] }) {
    console.log(params);
    
    return (
        <div>
            <h1 className="text-4xl font-bold  text-red-500">Day Of College {params.lecture[0]}</h1>
            <h1 className="text-2xl font-bold  text-Blue-500">Lecture No. {params.lecture[1]}</h1>
        </div>
    )
}