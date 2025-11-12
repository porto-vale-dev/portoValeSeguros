"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface FaqProps {
  title: string;
  content: string;
}

export default function Faq({ title, content }: FaqProps) {
  const [expanded, setExpanded] = React.useState(false);

  const toggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="section-faq flex flex-col items-center">
      <div className="faq-container mx-auto flex w-[85%] max-w-[900px] items-center justify-center py-[10px] md:w-full">
        <div
          className={cn(
            "faq-panel w-full rounded-[20px] bg-[#d9d9d9] p-[15px_20px] transition-all duration-500 ease-in-out md:w-[800px] md:rounded-[30px] md:p-[15px_40px]",
            expanded && "bg-[#ececec]"
          )}
        >
          <div
            className="faq-header flex cursor-pointer select-none items-center gap-[15px] md:gap-[30px]"
            onClick={toggle}
          >
            <span
              className={cn(
                "faq-title flex-1 text-left text-[16px] text-[#685a5d] md:text-[18px]",
                expanded && "font-bold text-primary"
              )}
            >
              {title}
            </span>
            <ChevronDown
              className={cn(
                "arrow shrink-0 text-primary transition-transform duration-500 ease-in-out",
                expanded && "rotate-180"
              )}
              size={30}
              strokeWidth={2}
            />
          </div>
          <div
            className={cn(
              "grid text-left text-sm text-[#736d71] transition-all duration-500 ease-in-out",
              {
                "grid-rows-[1fr] opacity-100 pt-5": expanded,
                "grid-rows-[0fr] opacity-0": !expanded,
              }
            )}
          >
            <div className="overflow-hidden">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
