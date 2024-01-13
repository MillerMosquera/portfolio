import React from "react";
import {Tooltip} from "@nextui-org/react";

export default function Tooltips() {
  return (
    <Tooltip 
      content="I am a tooltip"
      delay={0}
      closeDelay={0}
      motionProps={{
        variants: {
          exit: {
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: "easeIn",
            }
          },
          enter: {
            opacity: 1,
            transition: {
              duration: 0.15,
              ease: "easeOut",
            }
          },
        },
      }}
    >
    </Tooltip>
  );
}
