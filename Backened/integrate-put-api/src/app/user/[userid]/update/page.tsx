"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = ({ params }: { params: { userid: string } }) => {
  const id = params.userid;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`);
      const data = await response.json();
      setName(data.result.name);
      setAge(data.result.age);
      setEmail(data.result.email);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  const updateUser = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, age, email }),
      });

      const result = await response.json();
      if (result.success) {
        alert("User updated successfully");
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update user");
    }
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

        <Button className="mt-6 w-full" onClick={updateUser}>
          Update User
        </Button>
      </div>
    </div>
  );
};

export default Page;
