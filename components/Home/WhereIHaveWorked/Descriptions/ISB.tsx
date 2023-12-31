import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";
export default function FISB() {
  const tasks = [
    {
      text: "Conducted extensive experimentation with various computer vision algorithms to analyze video frames and identify optical paths, using Python and computer vision techniques.",
      keywords: ["Python", "computer vision"],
    },
    {
      text: "Employed librosa library in Python to extract diverse sound features from the same video, enabling a comprehensive investigation into the influence of audio on audience engagement.",
      keywords: ["Python", "librosa"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Machine Learning Intern <span className="text-AAsecondary"> @ML</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">March - June 2023</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
