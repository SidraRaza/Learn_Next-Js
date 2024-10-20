import getUsers from "../services/page";

export default async function Page() {
  const users = await getUsers(); 
  console.log(users);

  return (
    <div>
      <h1>Users List</h1>
      {users.map((user) => (
        <div key={user.id}>
      
          <p>User ID: {user.userId}</p>
          <p>Title: {user.title}</p>
          <p>Body: {user.body}</p>
        </div>
      ))}
    </div>
  );
}
