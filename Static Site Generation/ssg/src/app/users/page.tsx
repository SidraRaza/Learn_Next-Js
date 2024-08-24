import getUsers from "../getUsers";


export default async function Page() {
    const getUserList = await getUsers();
    const users= await getUserList();
    console.log(users);
    
    return (
      <div>
        <h1>Users List</h1>
        {
            users.map((user) => (
                <div key={user.id}>
                    {user.id} - {user.title}
                </div>
            ))
        }
      </div>
    );
}