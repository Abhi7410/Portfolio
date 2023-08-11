import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function IMarkovML() {
  const tasks = [
    {
      text: "Developed a Content Driven Quiz and Summary Generator tool that utilize user-provided content to automatically generate quiz questions and answers and summary of the content.",
      keywords: ["Content Driven Quiz"],
    },
    {
      text: "The Dataset was created by scraping the web using Python and Selenium from various institutional and educational websites.",
      keywords: ["Python", "Selenium"],
    },
    {
      text: "The Dataset is analyzed using MarkovML platform for various insights and patterns like LDA analysis, Topic Modeling, and Sentiment Analysis.",
      keywords: ["MarkovML", "LDA analysis", "Topic Modeling", "Sentiment Analysis"],

    },
    {
      text: "A basic interface is made where user can give input the content and get the summary and quiz questions and answers and download the pdf for same using React, HTML, CSS.",
      keywords: ["React", "HTML", "CSS"],
    }
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            ML Pioneer <span className="text-AAsecondary">@ML</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">
            July - August 2023
          </span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.markovml.com/", "_blank")}
          >
            www.markovml.com
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
    </>
  );
}
