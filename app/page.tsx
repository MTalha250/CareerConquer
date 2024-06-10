"use client";
import Details from "@/components/Details";
import JobCard from "@/components/JobCard";
import { Input } from "@/components/ui/Input";
import React from "react";
import Typewriter from "typewriter-effect";
const page = () => {
  return (
    <div className="pt-32 px-16">
      <h1 className="text-center font-bold text-4xl mb-10 bg-gradient-to-r from-indigo-900 via-purple-900 to-black text-white py-6 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <Typewriter
          options={{
            strings: [
              "Find Your Dream Job Today!",
              "Get Hired Today!",
              "Apply Now!",
            ],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </h1>
      <h1 className="text-2xl font-bold text-gray-800 tracking-wide mb-5">
        Search for Jobs
      </h1>
      <Input
        placeholders={[
          "What type of job are you seeking?",
          "Where would you like to be employed?",
          "Can you describe your ideal job?",
        ]}
        onChange={(e) => {}}
        onSubmit={(e) => {}}
      />
      <h1 className=" text-2xl font-bold text-gray-800 tracking-wide mt-10">
        Job Listings
      </h1>
      <div className="flex mt-10 gap-8">
        <div className="w-[45%] space-y-5 shrink-0">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className="w-0.5 bg-neutral-300"></div>
        <Details />
      </div>
    </div>
  );
};

export default page;
