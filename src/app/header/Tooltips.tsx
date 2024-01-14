"use client";
import { Tooltip } from "@nextui-org/react";

export default function Tooltips() {
  return (
    <Tooltip
      content={<div className="dark:text-neutral-50 text-neutral-900">Disponible para trabajar</div>}
      delay={0}
      closeDelay={0}
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            color: "dark:text-neutral-500 text-neutral-900",
            transition: {
              duration: 0.1,
              ease: "easeIn",
            },
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            },
          },
        },
      }}
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
    </Tooltip>
  );
}
