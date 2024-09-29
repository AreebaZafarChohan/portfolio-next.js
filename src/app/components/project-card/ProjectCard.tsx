import React from "react";
import { ProjectCardProps } from "../../../../type/componentsTypes";
import Image from "next/image";

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  url,
}) => {
  return (
    <div className="transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(166,87,197)] hover:scale-105 bg-transparent rounded-lg overflow-hidden flex flex-col justify-between items-center border-2 border-purple-400 text-center">
      <div className="relative mt-6 w-40 h-40">
      <Image
        src={image} 
        alt={title}
        layout="fill"
        objectFit="cover"
        className="shadow-[0_0_8px_4px_rgb(160,84,190)] rounded-full"
      />
      </div>
      <div className="p-4">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-blue-400 mb-6 mt-0">{title}</h3>
        <p className="text-white mb-4 font-serif">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-1 py-1 rounded-full  bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 "> <span className="transition-colors transform duration-300 border-2 border-transparent hover:scale-150 hover:border-[#d62c8f] bg-[#121212] rounded-full px-3 py-2 text-white">Click Here</span>
        </a>
      </div>
    </div>
  );
};
