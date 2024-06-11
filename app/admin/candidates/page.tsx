import JobCard from "@/components/JobCard";
import React from "react";
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
const page = () => {
  return (
    <div className="py-10 bg-gray-50 h-[82vh] overflow-hidden">
      <h1 className="text-4xl font-extrabold text-gray-700 tracking-wider mb-12 text-center">
        Candidates List
      </h1>
      <div className="flex h-full justify-between">
        <div className="w-1/3 h-full overflow-scroll space-y-5 scrollbar scrollbar-none p-5 pb-20 border-r shrink-0">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <div className="w-full px-5">
          <Table>
            <TableCaption>A list of all jobs posted so far.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Mobile Number</TableHead>
                <TableHead>Posted On</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Software Engineer</TableCell>
                <TableCell>San Francisco</TableCell>
                <TableCell>123 Main St</TableCell>
                <TableCell>123-456-7890</TableCell>
                <TableCell>2021-10-10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Product Manager</TableCell>
                <TableCell>San Francisco</TableCell>
                <TableCell>123 Main St</TableCell>
                <TableCell>123-456-7890</TableCell>
                <TableCell>2021-10-10</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Software Engineer</TableCell>
                <TableCell>San Francisco</TableCell>
                <TableCell>123 Main St</TableCell>
                <TableCell>123-456-7890</TableCell>
                <TableCell>2021-10-10</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
