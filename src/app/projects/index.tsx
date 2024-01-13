"use client";

import ItemProjects from "./project";
import { ProjectType } from "./types";

const projects: ProjectType[] = [
  {
    id: 1,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8d759.appspot.com/o/Fotos%2FCaptura%20de%20pantalla%202024-01-08%20215258.png?alt=media&token=7c991399-54bb-4204-a4de-875da9713b5d",
    deploy: "https://crud-springboot-production.up.railway.app/api/user",
    statu: "En producción",
    repository: "https://github.com/MillerMosquera/crud-springboot",
    title: "Api Rest",
    description: (
      <>
        Api Rest desarrollada con Spring Boot y desplegada en Railway
        <br />
      </>
    ),
    tags: ["Java", "Spring boot"],
  },
  {
    id: 2,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8d759.appspot.com/o/Fotos%2FCaptura%20de%20pantalla%202023-10-23%20224200.png?alt=media&token=f5446f56-2abd-4808-a350-6dfabc0e7bde",
    statu: "Retirada",
    title: "El cafecito",
    repository: "https://github.com/MillerMosquera/react-cafe-bar",
    description: (
      <>
        Aplicación web que tenía como objetivo principal permitir a los clientes
        hacer pedidos en línea y facilitar el proceso de pedidos y reservación
        para el restaurante.
      </>
    ),
    tags: ["React Js", "C#", ".NET", "SQLServer"],
  },
  {
    id: 3,
    image:
      "https://firebasestorage.googleapis.com/v0/b/portfolio-8d759.appspot.com/o/Fotos%2FCaptura%20de%20pantalla%202023-10-31%20102448.png?alt=media&token=988111c1-985a-40bf-bc26-ec82a2bc451f&_gl=1*1vidrau*_ga*MjcwMDEzMTQyLjE2OTc5NDUxMDI.*_ga_CW55HF8NVT*MTY5ODc4NjU4Ny43LjEuMTY5ODc4NjcyMS42MC4wLjA",
    statu: "Retirada",
    title: "Gamer Technology",
    repository: "https://github.com/MillerMosquera/GAMER_TECHNOLOGY",
    description: (
      <>
        Aplicación web para personalizar y comprar PC gaming eligiendo entre
        variados componentes. Calcula costo total en tiempo real, con sistema de
        carrito, pago y seguimiento de pedidos. Permite registro y login de
        usuarios.
      </>
    ),
    tags: ["HTML","C#", ".NET", "SQLServer"],
  },
];

// component
export default function ProjectsSection() {
  return (
    <section id="projects" className="pt-24 max-[800px]:pt-5">
      <h3 className="text-2xl font-semibold tracking-tight mb-3 pb-4 dark:text-neutral-50 text-neutral-900">
        Proyectos
      </h3>
      {projects.map((project) => (
        <ItemProjects key={project.id} {...project} />
      ))}
    </section>
  );
}
