import React from 'react'

const page = () => {
  console.log(process.env.NODE_ENV);
  
  return (
   
   <main>
    {
      process.env.NODE_ENV === "development" ? 
      <h1>Environment Variable in Development</h1>
      :
      <h1>Environment Variable in Production</h1>
    }
    <h1>Environment Variable in Next js</h1>
   </main>
  )
}

export default page