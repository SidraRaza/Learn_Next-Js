import users from '@/utill/db';  // Make sure the path is correct

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

async function getUser(id: number): Promise<User | null> {
  // Make sure users is an array and .find can be used
  const user = users.find((user) => user.id === id);
  return user || null;
}

interface PageProps {
  params: {
    userid: string;
  };
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const userId = parseInt(params.userid, 10); // Convert string to number
  const user = await getUser(userId);

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <>
      <div>User Details</div>
      <h2>Name: {user.name}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Id: {user.id}</h2>
      <h2>Age: {user.age}</h2>
    </>
  );
};

export default Page;
