'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type
      },
      body: JSON.stringify({ name, age, email }),
    });
    
    response = await response.json();
    if (response.success) {
      alert("User created successfully");
    } else {
      alert("Something went wrong");
    }
    console.log(response);
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10 px-4 sm:px-0">
      <div className="w-full max-w-sm border-2 p-7 border-black rounded-lg shadow-lg">
        <h2 className="text-2xl text-center font-bold">User Information</h2>

        <Label className="block mt-4">
          Name
          <Input
            className="mt-1 w-full"
            type="text"
            placeholder="Enter user name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Label>

        <Label className="block mt-4">
          Age
          <Input
            className="mt-1 w-full"
            type="number"
            placeholder="Enter user age"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </Label>

        <Label className="block mt-4">
          Email
          <Input
            className="mt-1 w-full"
            type="email"
            placeholder="Enter user email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Label>

        <Button className="mt-6 w-full" onClick={addUser}>Add User</Button>
      </div>
    </div>
  );
};

export default Page;
