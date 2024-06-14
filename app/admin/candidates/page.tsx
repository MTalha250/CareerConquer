"use client";
import JobCard from "@/components/JobCard";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { set } from "mongoose";
const page = () => {
  const [jobs, setJobs] = useState([]);
  const [candidates, setCandidates] = useState([]);
  const fetchJobs = async () => {
    try {
      const response = await axios.get("/api/job");
      setJobs(response.data.jobs);
      setCandidates(response.data.jobs[0].candidates);
    } catch (error) {
      console.error("Failed to fetch jobs");
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div className="py-10 bg-gray-50 h-[82vh] overflow-hidden">
      <h1 className="text-4xl font-extrabold text-gray-700 tracking-wider mb-12 text-center">
        Candidates List
      </h1>
      <div className="flex h-full justify-between">
        <div className="w-1/3 h-full overflow-scroll space-y-5 scrollbar scrollbar-none p-5 pb-20 border-r shrink-0">
          {jobs.map((job: any) => (
            <div
              key={job._id}
              className="cursor-pointer"
              onClick={() => setCandidates(job.candidates)}
            >
              <JobCard job={job} />
            </div>
          ))}
        </div>
        <div className="w-full px-5">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Mobile Number</TableHead>
                <TableHead>Nationality</TableHead>
                <TableHead>Education</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate: any) => (
                <TableRow key={candidate.email}>
                  <TableCell>{candidate.name}</TableCell>
                  <TableCell>{candidate.email}</TableCell>
                  <TableCell>{candidate.phone}</TableCell>
                  <TableCell>{candidate.nationality}</TableCell>
                  <TableCell>{candidate.education}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
