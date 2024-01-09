import DeleteProduct from "@/lib/DeleteProduct";
import Link from "next/link";

const getUsers= async()=>{
    let data= await fetch("http://localhost:3000/api/products",{cache:"no-cache"});
    data = await data.json();
    if(data.success){

        // console.log("============",datas.result);
        return data.result;
    }else{
        return {success:false}
    }
}


export default async function Page(){
    const products= await getUsers();
    return(
        <div>
            <h1>User List</h1>
            <table border="1">
              <thead>
              <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Salary</th>
                    <th>Position</th>
                    <th>Position</th>
                </tr>
              </thead>
              <tbody>
                {
                    products.map((item)=>(<tr>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.salary}</td>
                    <td><Link href={"/users/"+item._id}> Edit</Link></td>
                    <td><DeleteProduct id={item._id}/></td>
                     </tr>))
                }
              </tbody>
             
            </table>
           
        </div>
    )
}