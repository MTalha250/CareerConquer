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
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
const page = () => {
  return (
    <div className="p-10 bg-gray-50 h-[80vh]">
      <h1 className="text-4xl font-extrabold text-gray-700 tracking-wider mb-5 text-center">
        Jobs List
      </h1>
      <div className="flex space-x-5">
        <input
          type="text"
          className="w-full border-b bg-transparent"
          placeholder="Search for jobs..."
        />
        <button className="bg-purple-800 text-sm text-white px-4 py-2 rounded whitespace-nowrap">
          Add New Job
        </button>
      </div>
      <Table className="mt-5">
        <TableCaption>A list of all jobs posted so far.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Job Title</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Mobile Number</TableHead>
            <TableHead>Posted On</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Software Engineer</TableCell>
            <TableCell>San Francisco</TableCell>
            <TableCell>123 Main St</TableCell>
            <TableCell>123-456-7890</TableCell>
            <TableCell>2021-10-10</TableCell>
            <TableCell className="flex items-center justify-end">
              <AiFillEdit className="text-2xl text-purple-800" /> |{" "}
              <MdDelete className="text-2xl text-purple-800" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Product Manager</TableCell>
            <TableCell>San Francisco</TableCell>
            <TableCell>123 Main St</TableCell>
            <TableCell>123-456-7890</TableCell>
            <TableCell>2021-10-10</TableCell>
            <TableCell className="flex items-center justify-end">
              <AiFillEdit className="text-2xl text-purple-800" /> |{" "}
              <MdDelete className="text-2xl text-purple-800" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Software Engineer</TableCell>
            <TableCell>San Francisco</TableCell>
            <TableCell>123 Main St</TableCell>
            <TableCell>123-456-7890</TableCell>
            <TableCell>2021-10-10</TableCell>
            <TableCell className="flex items-center justify-end">
              <AiFillEdit className="text-2xl text-purple-800" /> |{" "}
              <MdDelete className="text-2xl text-purple-800" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
