import { cn } from '@/libs'

type LinkType = {
  children: React.ReactNode | string
  className?: string
}
const CustomLink = ({children, className }: LinkType) => {
  return (
    <a
      className={cn(
        'font-medium ml-1 transition-colors dark:text-neutral-50 ',
        className
      )}
      target="_blank"
      referrerPolicy="no-referrer"
    >
      {children}
    </a>
  )
}

export default CustomLink
