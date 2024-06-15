"use client";
import Details from "@/components/Details";
import JobCard from "@/components/JobCard";
import JobCardMobile from "@/components/JobCardMobile";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const { state } = useParams();
  const [jobs, setJobs] = useState([]);
  const [jobDetails, setJobDetails] = useState({} as any);
  const fetchJobs = async () => {
    try {
      const response = await axios.get(`/api/state/${state}`);
      console.log(response.data.jobs);
      setJobs(response.data.jobs);
      setJobDetails(response.data.jobs[0]);
    } catch (error) {
      console.error("Failed to fetch jobs");
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="pt-32 px-8 md:px-16 mb-10">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-800 tracking-wide">
        Job Listings in{" "}
        {state
          .toString()
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")}
      </h1>
      {jobs.length > 0 ? (
        <div className="flex mt-5 md:mt-10 gap-4 lg:gap-8">
          <div className="w-full md:w-[45%] space-y-5 shrink-0">
            {jobs?.map((job: any) => (
              <div key={job._id}>
                <div
                  onClick={() => setJobDetails(job)}
                  className="cursor-pointer hidden md:block"
                >
                  <JobCard job={job} />
                </div>
                <JobCardMobile job={job} />
              </div>
            ))}
          </div>
          <div className="hidden md:block w-0.5 bg-neutral-300"></div>
          <div className="hidden md:block w-full">
            <Details job={jobDetails} />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-[50vh] text-center text-lg text-gray-600 tracking-wide mt-10">
          <span>No Jobs Found</span>
        </div>
      )}
    </div>
  );
};

export default page;
