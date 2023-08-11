import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function AnutaNetworks() {
  const tasks = [
    {
      text: "A Cloud and on-prem Network Orchestration and Assurance Software based on Java-SpringBoot as backend and Angular as front-end. Worked in full stack development team, responsible for releasing new features and enhancing quality of the product.",
      keywords: ["Java-SpringBoot", "Angular", "full stack"],
    },
    {
      text: "Identifying and resolving a critical bug in the product that improved its performance and enhanced the user experience using Java, Angular, JavaScript, Typescript",
      keywords: ["Java", "Angular", "JavaScript", "TypeScript"],
    },
    {
      text: "Creating automation tests using Selenium and Groovy to ensure that product was functioning as expected.",
      keywords: ["Selenium", "Groovy"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Software Developer Engineering Intern{" "}
          <span className="text-AAsecondary">@ Full-Stack</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">
          Oct 2022 - Jan 2023
        </span>
        <span
          className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
          style={{ fontSize: "0.6rem" }}
          // set on click to open the website
          onClick={() =>
            window.open("https://www.anutanetworks.com/", "_blank")
          }
        >
          www.anutanetworks.com
        </span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
        {tasks.map((item, index) => {
          return (
            <div key={index} className="flex flex-row space-x-2">
              <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
              <span
                className="text-gray-500 sm:text-sm text-xs"
                dangerouslySetInnerHTML={{
                  __html: getTasksTextWithHighlightedKeyword(
                    item.text,
                    item.keywords
                  ),
                }}
              ></span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
