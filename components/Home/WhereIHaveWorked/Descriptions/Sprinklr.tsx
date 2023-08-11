import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Sprinklr() {
  const tasks = [
    {
      text: "Leveraged Astro framework and React to enhance the performance of company landing pages by implementing static site generation and server-side rendering techniques",
      keywords: ["Astro", "React", "landing pages", "static site generation", "server-side rendering"],
    },
    {
      text: "Developed and implemented optimized workflows using Astro and React to generate static pages, resulting in a significant performance improvement from an initial score of 50-60 to an impressive 95+",
      keywords: ["Astro", "React", "static pages", "50-60", "95+"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Product Engineering Intern<span className="text-AAsecondary"> @Frontend</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">May 2023 - July 2023</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.sprinklr.com/", "_blank")}
          >
            www.sprinklr.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
