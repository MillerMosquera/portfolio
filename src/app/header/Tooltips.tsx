import { Tooltip } from "@nextui-org/react"

export const Tooltips = () => {
    return(
        <span className="">
              <Tooltip
                content="Disponible para trabajar"
                delay={0}
                closeDelay={0}
                motionProps={{
                  variants: {
                    exit: {
                      opacity: 0,
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
                <span className="flex gap-2 flex-row-reverse right-6 bottom-11">
                  <span className="dot"></span>
                </span>
              </Tooltip>
            </span>
    )
}