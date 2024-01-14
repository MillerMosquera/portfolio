import ItemEducation from "./education";
import { EducationType } from "./types";

// data
const educations: EducationType[] = [
  {
    id: 1,
    title: "Universidad Santiago De Cali",
    date: "AGO 2019 - Actualmente",
    description: (
      <>
        Actualmente me encuentro cursando la carrera de
        Ingeniería de Sistemas, donde estoy cultivando destrezas en programación orientada a objetos 
        y el desarrollo de software.
        <br />
      </>
    ),
  },
  {
    id: 2,
    title: "Colnodo",
    date: "SEP — NOV 2021",
    description: (
      <>
        Curso de Desarrollo Web, impartido por Colnodo y apoyado por Google,
        obtuve un certificado que acredita mis habilidades como Desarrollador
        Web Junior.
        <br />
        <br />
        Tecnologías usadas:
        <br />
        <span className="dark:text-neutral-50 text-neutral-900 font-semibold">HTML, CSS, JavaScript, React, C# con .Net, SQL Sever</span>
      </>
    ),
  },
  {
    id: 3,
    title: "Politécnico de Colombia",
    date: "SEP — OCT 2022",
    description: (
      <>
        Diplomado en Java, durante el curso, adquirí habilidades avanzadas en
        programación Java, incluyendo la aplicación y desarrollo de algoritmos.
        Este programa me permitió desarrollar una profunda comprensión de Java y
        su uso en la creación de software de alta calidad.
        <br />
      </>
    ),
  },
];

// component
export default function EducationSection() {
  return (
    <section id="education" className="pt-18">
      <div>
        <h3 className="text-2xl font-bold tracking-tight mb-3 pb-4 dark:text-neutral-50 text-neutral-900">
          Educación
        </h3>
        {educations.map((education) => (
          <ItemEducation key={education.id} {...education} />
        ))}
      </div>
    </section>
  );
}
