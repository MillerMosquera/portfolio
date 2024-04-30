"use client";
import CustomLink from "@/components/custom-link";
import Link from "next/link";
import Skill from "./skill";
import { Skilltype } from "./types";

type Props = {};

const skill: Skilltype[] = [
  {
    id: 1,
    tags: ["Java", "JavaScript", "Sprint boot", "React", "MySQL", ".NET"],
  },
];

const CV =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-8d759.appspot.com/o/Miller%20Mosquera%20-%20Resume.pdf?alt=media&token=01ed356c-4e4b-4dc2-adbf-bd2d8da46c92";

export default function AboutSection({}: Props) {
  return (
    <section id="about" className="pt-24 max-[800px]:pt-0">
      <h3 className="text-2xl max-[800px]:block hidden font-semibold tracking-tight mb-3 pb-4 dark:text-neutral-50 text-black/80">
        Acerca de mí
      </h3>
      <div className="dark:text-neutral-500 text-neutral-500">
        <p className="mb-4 leading-6 text-base">
          Hola! Soy Miller Mosquera, estudiante de
          <CustomLink className="dark:text-neutral-50 text-neutral-900">
            Ingeniería de Sistemas
          </CustomLink>{" "}
          y un apasionado del desarrollo de software. Estoy dedicando mi tiempo
          y esfuerzo a aprender y mejorar como
          <CustomLink className="dark:text-neutral-50 text-neutral-900">
            desarrollador
          </CustomLink>
          , con el objetivo de crecer tanto personal como profesionalmente en
          este vasto y emocionante mundo de la
          <CustomLink className="dark:text-neutral-50 text-neutral-900">
            tecnología
          </CustomLink>
          .
          <br />
          <br />
          Aquí hay algunas tecnologías con las que he trabajado:
        </p>
        <div>
          {skill.map((skills) => (
            <Skill key={skills.id} {...skills} />
          ))}
        </div>
        <div className="mt-12">
          <Link
            className="inline-flex items-center leading-tight text-slate-200 font-semibold group"
            aria-label="ver cv"
            href={CV}
          >
            <span
              className="whitespace-nowrap dark:hover:text-blue-500
            hover:text-blue-500 text-neutral-900 dark:text-neutral-50"
            >
              Descargar cv
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
