import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ShiftKey() {
  const tasks = [
    {
      text: "Developed cross-platform mobile app of Android and iOS using React Native",
      keywords: ["Android", "iOS"],
    },
    {
      text: "Built high-quality mobile apps that are not only visually appealing but also intuitive, easy to use, and bug-free",
      keywords: ["high-quality", "visually appealing", "intuitive", "easy to use", "bug-free"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Mobile App Developer for Healthcare <span className="text-AAsecondary">@ React Native</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">April 2021 - March 2022</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://apps.apple.com/us/app/shiftkey-prn-healthcare-jobs/id1532097671", "_blank")}
          >
            https://apps.apple.com/us/app/shiftkey-prn-healthcare-jobs/id1532097671
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
