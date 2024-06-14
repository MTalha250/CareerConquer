"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Editor } from "@tinymce/tinymce-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { Input } from "@/components/ui/input2";

import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [search, setSearch] = useState("");
  const [jobs, setJobs] = useState([]);
  const editor = useRef(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !title ||
      description == "<p>Description</p>" ||
      !state ||
      !address ||
      !phone
    ) {
      toast.error("Please fill all fields");
      return;
    }
    try {
      const response = await axios.post("/api/job", {
        title,
        description,
        state,
        address,
        phone,
      });
      toast.success(response.data.message);
    } catch (error) {
      toast.error("Failed to create job");
    } finally {
      setTitle("");
      setDescription("");
      setState("");
      setAddress("");
      setPhone("");
      fetchJobs();
    }
  };
  return (
    <div className="p-10 bg-gray-50 h-[80vh]">
      <h1 className="text-4xl font-extrabold text-gray-700 tracking-wider mb-5 text-center">
        Jobs List
      </h1>
      <div className="flex space-x-5">
        <input
          type="text"
          className="w-full border-b bg-transparent focus:outline-none"
          placeholder="Search for jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Dialog>
          <DialogTrigger className="bg-purple-800 text-sm text-white px-4 py-2 rounded whitespace-nowrap">
            Add Job
          </DialogTrigger>
          <DialogContent className="p-10">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
              <Input
                placeholder="Job Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Editor
                ref={editor}
                apiKey="g0zqs3p6v9zx7zhnrzgdphkxjcz3dvgt6kl7bxln19etxto6"
                initialValue="Description"
                onEditorChange={(content, editor) => setDescription(content)}
                tabIndex={10}
              />

              <Select value={state} onValueChange={(e) => setState(e)}>
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="queensland">Queensland</SelectItem>
                  <SelectItem value="victoria">Victoria</SelectItem>
                  <SelectItem value="south-australia">
                    South Australia
                  </SelectItem>
                  <SelectItem value="western-australia">
                    Western Australia
                  </SelectItem>
                  <SelectItem value="tasmania">Tasmania</SelectItem>
                  <SelectItem value="new-south-wales">
                    New South Wales
                  </SelectItem>
                </SelectContent>
              </Select>

              <Input
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <DialogClose
                disabled={
                  !title ||
                  description == "<p>Description</p>" ||
                  !state ||
                  !address ||
                  !phone
                }
              >
                <button className="w-full bg-purple-800 text-white px-4 py-2 rounded">
                  Add Job
                </button>
              </DialogClose>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table className="mt-5">
        <TableCaption>A list of all jobs posted so far.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Job Title</TableHead>
            <TableHead>State</TableHead>
            <TableHead>Address</TableHead>
            <TableHead>Mobile Number</TableHead>
            <TableHead>Posted On</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {jobs
            .filter(
              (job: any) =>
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.state.toLowerCase().includes(search.toLowerCase())
            )
            .map((job: any) => (
              <TableRow key={job._id}>
                <TableCell>{job.title}</TableCell>
                <TableCell>{job.state}</TableCell>
                <TableCell>{job.address}</TableCell>
                <TableCell>{job.phone}</TableCell>
                <TableCell>{new Date(job.createdAt).toDateString()}</TableCell>
                <TableCell className="flex items-center justify-end">
                  <AiFillEdit className="text-2xl text-purple-800 cursor-pointer" />{" "}
                  |{" "}
                  <MdDelete
                    className="text-2xl text-purple-800 cursor-pointer"
                    onClick={async () => {
                      try {
                        const response = await axios.delete(
                          `/api/job/${job._id}`
                        );
                        toast.success(response.data.message);
                      } catch (error) {
                        toast.error("Failed to delete job");
                      } finally {
                        fetchJobs();
                      }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
