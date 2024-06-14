"use client";
import Details from "@/components/Details";
import JobCard from "@/components/JobCard";
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
    <div className="pt-32 px-16 mb-10">
      <h1 className=" text-2xl font-bold text-gray-800 tracking-wide mt-10">
        Job Listings in{" "}
        {state
          .toString()
          .split("-")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")}
      </h1>
      {jobs.length > 0 ? (
        <div className="flex mt-10 gap-8">
          <div className="w-[45%] space-y-5 shrink-0">
            {jobs.map((job: any) => (
              <div
                key={job._id}
                onClick={() => setJobDetails(job)}
                className="cursor-pointer"
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
          <div className="w-0.5 bg-neutral-300"></div>
          <Details job={jobDetails} />
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
