import { Tooltips } from "./Tooltips";
import FooterHeader from "./footer";
import NavHeader from "./nav";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="flex col-span-1 max-[800px]:col-span-2 top-0 h-screen max-[800px]:h-auto min-[800px]:sticky  gap-3">
      <div className="h-full py-24 px-13 max-[800px]:px-2 flex-col flex">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-neutral-900 dark:text-[#fff] relative item-s text-5xl inline-block tracking-tighter">
            Miller Mosquera
            <span className="absolute">
              <Tooltips />
            </span>
          </h1>
          <h2 className=" text-neutral-800 dark:text-neutral-400 item-s tracking-tighter text-gradient text-xl">
            Desarrollador de Software
          </h2>
          <p className="w-96 max-[700px]:w-full opacity-90 dark:text-neutral-500 text-neutral-900 item-s  leading-5">
            Constuyo y desarrollo aplicaciones.
          </p>
        </div>
        <NavHeader />
        <FooterHeader />
      </div>
    </header>
  );
}
