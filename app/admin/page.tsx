"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const page = () => {
  const [jobs, setJobs] = useState([]);
  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/job");
      setJobs(response.data.jobs);
    } catch (error) {
      toast.error("Failed to fetch jobs");
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="py-10 px-4 md:px-8 bg-gray-50 h-[80vh]">
      <h1 className="text-4xl font-extrabold text-gray-700 tracking-wider mb-12 text-center">
        Analytics Dashboard
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 rounded-lg shadow-lg bg-white border-t-4 border-purple-600">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                  Total Jobs
                </h1>
                <h1 className="text-5xl font-bold text-gray-900">
                  {jobs.length}
                </h1>
              </div>
              <div className="text-purple-600">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v16h16V4H4zm2 14h12V6H6v12zm3-6h3v3H9v-3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="p-8 rounded-lg shadow-lg bg-white border-t-4 border-green-600">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-700 mb-4">
                  Total Candidates
                </h1>
                <h1 className="text-5xl font-bold text-gray-900">
                  {jobs
                    .map((job: any) => job.candidates.length)
                    .reduce((a, b) => a + b, 0)}
                </h1>
              </div>
              <div className="text-green-600">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v16h16V4H4zm2 14h12V6H6v12zm3-6h3v3H9v-3z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
