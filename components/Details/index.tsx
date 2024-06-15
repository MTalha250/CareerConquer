"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input2";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import axios from "axios";

interface DetailsProps {
  job: {
    _id: string;
    title: string;
    description: string;
    state: string;
    address: string;
    phone: string;
    candidates: any[];
    createdAt: string;
  };
}

const Details = (props: DetailsProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationality, setNationality] = useState("");
  const [education, setEducation] = useState("");
  const addCandidate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone || !nationality || !education) {
      toast.error("Please fill in all fields");
      return;
    }
    let found = false;
    props.job.candidates.forEach((candidate) => {
      if (candidate.email === email) {
        found = true;
      }
    });
    if (found) {
      toast.error("You have already applied for this job");
      return;
    }
    try {
      const response = await axios.put(`/api/job/${props.job._id}`, {
        candidates: [
          ...props.job.candidates,
          { name, email, phone, nationality, education },
        ],
      });
      props.job.candidates.push({
        name,
        email,
        phone,
        nationality,
        education,
      });
      toast.success("Application submitted successfully");
    } catch (error) {
      toast.error("Failed to submit application");
    } finally {
      setName("");
      setEmail("");
      setPhone("");
      setNationality("");
      setEducation("");
    }
  };
  return (
    <div className="w-full mx-auto p-6 bg-white shadow-lg rounded-lg md:border sticky top-32 h-[80vh] overflow-scroll scrollbar scrollbar-none">
      <h1 className="text-3xl font-bold mb-4">{props.job.title}</h1>
      <p
        className="text-gray-700 mb-4"
        dangerouslySetInnerHTML={{ __html: props.job.description }}
      ></p>
      <div className="mb-4">
        <span className="font-bold">Address:</span> {props.job.address}
      </div>
      <div className="mb-4">
        <span className="font-bold">State:</span> {props.job.state}
      </div>
      <div className="mb-4">
        <span className="font-bold">Mobile Number:</span> {props.job.phone}
      </div>
      <Dialog>
        <DialogTrigger className="mt-4 bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700">
          Apply Now
        </DialogTrigger>
        <DialogContent className="p-6 md:p-10">
          <form onSubmit={addCandidate} className="flex flex-col space-y-5">
            <p className="text-sm text-gray-600 w-[70%]">
              Please fill in the form below to apply for this job.
            </p>
            <Input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="tel"
              placeholder="Mobile number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Nationality"
              value={nationality}
              onChange={(e) => setNationality(e.target.value)}
            />
            <Textarea
              placeholder="Education"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
            <DialogClose
              disabled={!name || !email || !phone || !nationality || !education}
            >
              <button className="w-full bg-purple-900 text-white py-2 px-4 rounded hover:bg-purple-700">
                Submit Application
              </button>
            </DialogClose>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Details;
