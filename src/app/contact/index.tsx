import Image from "next/image";
import { email } from "../config";
// component
export default function EducationSection() {
  return (
    <section id="contact" className="pt-18">
      <div>
        <h2 className="text-sm font-bold tracking-tight mb-3 pb-4 dark:text-neutral-500 text-neutral-900">
          ¿Que sigue?
        </h2>
        <h3 className="text-2xl font-bold tracking-tight mb-3 pb-4 dark:text-neutral-50 text-neutral-900">
          Contáctame
        </h3>
        <p className="mt-2 text-sm leading-normal text-neutral-700 dark:text-neutral-500 dark:[&>a]:text-neutral-50 dark:hover:[&>a]:text-blue-500 text">
          Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada
          es como un lienzo en blanco esperando tu mensaje. Si deseas compartir
          una oportunidad, estaré encantado de trabajar contigo. ¡Atrévete a
          escribir y yo estaré aquí para responder!
        </p>
        <div className="mt-8 mb-8">
          <a
            className="inline-flex items-center leading-tight text-slate-200 font-semibold group"
            aria-label="contact me"
            href={`mailto:${email}`}
          >
            <span
              className="flex dark:text-neutral-50 text-neutral-900"
            >
              Di Hola
              <span className="ml-1">
                <Image
                  className="color:transparent shake-left-right"
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/portfolio-8d759.appspot.com/o/Foto_icono%2Fwave.webp?alt=media&token=959e271a-84ba-4101-9642-79f078f2ea07&_gl=1*12spykx*_ga*MjcwMDEzMTQyLjE2OTc5NDUxMDI.*_ga_CW55HF8NVT*MTY5ODg1ODI3MS45LjEuMTY5ODg1ODMxMi4xOS4wLjA."
                  }
                  alt="wave icon"
                  loading="lazy"
                  width={"20"}
                  height={"20"}
                  decoding="async"
                ></Image>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
