import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Sertus() {
  const tasks = [
    {
      text: "Delivered new features and fixing bugs with advanced technologies (React, Typescript, styled-components).",
      keywords: ["new features", "fixing bugs"],
    },
    {
      text: "By writing unit tests for UI components, main functionalities, boosted the test coverage by over 90%",
      keywords: ["unit tests", "over 90%"],
    },
    {
      text: "Collaborated with cross-functioning team of 5 top-tier engineers to find out best working solutions with latest libraries in React ecosystem.",
      keywords: ["Collaborated"],
    },
    {
      text: "Implemented new additional features from customers while working directly with CEO, CTO",
      keywords: ["working directly"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            UI/UX Developer <span className="text-AAsecondary">@ React</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">February 2019 - February 2020</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://sertus.uk/", "_blank")}
          >
            sertus.uk
        </span>
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
