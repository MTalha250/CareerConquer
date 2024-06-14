import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
interface JobCardProps {
  job: {
    title: string;
    description: string;
    state: string;
    address: string;
    phone: string;
    createdAt: string;
  };
}
const JobCard = (props: JobCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-white p-6 border hover:scale-[1.03] transition duration-200 ease-in-out">
      <div className="font-bold text-xl mb-2">{props.job.title}</div>
      <p
        className="text-gray-700 text-base mb-4 line-clamp-3"
        dangerouslySetInnerHTML={{ __html: props.job.description }}
      ></p>
      <div className="flex items-center mb-2">
        <FaLocationDot className="text-purple-900 mr-2" />
        <span className="text-gray-600">
          {props.job.address},{" "}
          {props.job.state
            .split("-")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ")}
        </span>
      </div>
      <div className="flex items-center">
        <FaClock className="text-purple-900 mr-2" />
        <span className="text-gray-600">
          {new Date(props.job.createdAt).toDateString()}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
