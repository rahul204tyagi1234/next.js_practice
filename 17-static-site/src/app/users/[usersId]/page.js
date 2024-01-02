import getUsers from "../../../../services/getUsers"
export default async function Page(props){
    const getUserList =getUsers();
    const users= await getUserList;
    const currentId = props.params.usersId;
    const userData = users[currentId-1]
    console.log(userData);
    return(
        <div>
            <h3>User Details</h3>
            <h4> User id : {userData.id}</h4>
            <h4> User Name : {userData.name}</h4>
            <h4> User Number : {userData.phone}</h4>
        </div>
    )
}

export async function generateStaticParams(){
    const getUserList =getUsers();
    const users= await getUserList;
    return users.map(user=>({
        usersId:user.id.toString()
    }))
   
}