import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Jacuzzi() {
  const tasks = [
    {
      text: "Built Frontend UI that is pixel-perfect from design and fully responsive for all cross browsers including Google Chrome, Firefox, Safari on Desktop, Mobile, Tablet devices.",
      keywords: ["pixel-perfect", "fully responsive", "all cross browsers"],
    },
    {
      text: "Integrated with backend APIs, worked with GitHub, Trello",
      keywords: ["Integrated", "APIs", "GitHub", "Trello"],
    },
    {
      text: "Communicated with team on slack",
      keywords: ["team","slack"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          Frontend developer <span className="text-AAsecondary">@ React</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June - August 2020</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.jacuzzispas.com.au/", "_blank")}
          >
            www.jacuzzispas.com.au
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
