import React from 'react'
import Link from 'next/link'
import DeleteUser from '@/utill/DeleteUser';

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
        <div className='text-center text-3xl py-10'>User page</div>
        {
          users.map((item: any) => (
            <div className='flex justify-center items-center ' key={item.name}>
             <span><Link href={`/user/${item.id}`}>{item.name}</Link></span>
             <span className='ml-2 text-red-600'><Link href={`/user/${item.id}/update`}>Edit</Link></span>
             <DeleteUser id={item.id}/>
            </div>
          ))
        }
      </>
    );
  };
  
  export default page;