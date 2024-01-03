"use client"
export default function studentDetails({params}:any){
    console.log(params)
    return(
        <div>
            <h2>Student Details</h2>
            <h3>Name:{params.student}</h3>
        </div>
    )
}