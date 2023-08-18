import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Signature() {
  const tasks = [
    {
      text: "Contributed to official website frontend using Vue.js/Nuxt.js",
      keywords: ["Vue.js/Nuxt.js"],
    },
    {
      text: "Delivered adding new features, building new pages, improving existing features & UI, maintaining the entire website",
      keywords: ["adding", "improving", "maintaining"],
    },
    {
      text: "Optimized Frontend performance and speed by writing high-quality code of best practices, tested it on page speed insights, etc",
      keywords: ["high-quality", "best practices"],
    },
    {
      text: "Communicated with backend team to integrate backend APIs and services",
      keywords: ["integrate", "APIs", "services"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
          
          Frontend Development <span className="text-AAsecondary">@ Nuxt.js</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">June 2018 - November 2018</span>
        <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            // set text size on style attribute
            style={{ fontSize: "0.6rem" }}
            onClick={() => window.open("https://www.signature.co.nz/", "_blank")}
          >
            www.signature.co.nz
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
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
      </div>
    </div>
  );
}
