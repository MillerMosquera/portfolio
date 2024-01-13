import Link from "next/link";
import React from "react";
import { ExperienceType } from "./types";
import ItemExperience from "./experience";

// data
const experiences: ExperienceType[] = [
  {
    id: 1,
    href: "/",
    title: "Title ",
    role: "Developer",
    date: "",
    description: (
      <>
        Desccripccion
        <br />
        <br />
        Continua
      </>
    ),
    links: [],
    tags: ["React js", "Firebase", "Tailwindcss", "JavaScript", "Axios"],
  },
];

// component
export default function ExperiencesSection() {
  return (
    <section id="experience" className="pt-24">
      <div>
        <h3 className="text-2xl font-bold tracking-tight mb-3 pb-4 dark:text-neutral-50 text-neutral-900">
          Experiencia
        </h3>
        {experiences.map((experience) => (
          <ItemExperience key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  );
}
