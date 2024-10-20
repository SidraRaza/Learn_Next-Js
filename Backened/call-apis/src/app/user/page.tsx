import React from 'react'
import Link from 'next/link'

async function getData() {
    let data=await fetch("http://localhost:3000/api/users")
    data=await data.json();
    return data
}
async function page() {
    const users = await getData();
    console.log(users);
  
   
    
    return (
      <>
        <div>User page</div>
        {
          users.map((item: any) => (
            <div key={item.name}>
             <Link href={`/user/${item.id}`}>{item.name}</Link>
             
            </div>
          ))
        }
      </>
    );
  };
  
  export default page;