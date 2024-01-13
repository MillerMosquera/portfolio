export default function Footer() {
  return (
    <footer className="py-9 w-full border-t dark:border-t-neutral-900 border-t-neutral-300">
      <div className="flex items-center justify-center h-full mx-auto w-[600px] max-w-full">
        <div className="flex flex-col gap-2">
          <h4 className="text-left font-extrabold text-2xl tracking-tighter dark:text-white">
            <div className="flex gap-2 font-medium dark:text-neutral-400 text-neutral-900 text-xs">
              <span>De</span>
            </div>
            <a
              target="_blank"
              referrerPolicy="no-referrer"
              className="dark:text-neutral-50 text-neutral-900"
            >
              Colombia
            </a>
          </h4>
          <p className="mt-2 text-sm leading-normal dark:text-neutral-500 text-neutral-500 dark:hover:[&>a]:text-blue-500 hover:[&>a]:text-blue-600">

             Desarrollado con{' '}
            <a
              className="font-semibold  dark:text-neutral-50
              text-neutral-900"
              href="https://nextjs.org/"
              target="_blank"
            >
              Next.js
            </a>{' '}
            y{' '}
            <a
              className="font-semibold dark:text-neutral-50
              text-neutral-900"
              href="https://tailwindcss.com/"
              target="_blank"
            >
              Tailwind CSS,
            </a>{' '}
            Adaptado del Portafolio de {' '}
            <a
              className="font-semibold  
              dark:text-neutral-50
              text-neutral-900"
              href="https://brittanychiang.com/"
              target="_blank"
            >
              Brittany Chiang.
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
