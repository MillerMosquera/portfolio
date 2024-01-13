import React from 'react'
import { ExperienceType } from './types'
import { ExternalIcon } from '@/icons'

export default function ItemExperience(experience: ExperienceType) {
  return (
    <article key={experience.id} className="mb-14">
      <div className="group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 border border-transparent hover:dark:border-neutral-950 hover:border-neutral-450 z-0 hidden rounded-lg transition motion-reduce:transition-none lg:block lg:group-hover:dark:bg-neutral-800/20 lg:group-hover:bg-neutral-300/20 lg:group-hover:dark:shadow-[inset_0_1px_0_0_rgba(221, 223, 225, 0.1)] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <header
          className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide dark:text-neutral-500 text-neutral-500 sm:col-span-2"
          aria-label="2021"
        >
          {experience.date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium flex flex-col gap-1 text-neutral-900">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight dark:text-neutral-50 hover:dark:text-blue-500 hover:text-blue-500  group/link text-lg"
                href={experience.href}
                target="_blank"
                rel="noreferrer"
                aria-label={experience.title}
              >
                <span className="inline-block font-semibold">
                  {experience.title}
                  <ExternalIcon />
                </span>
                <span className="absolute -inset-x-3 -inset-y-3"></span>
              </a>
            </div>
            <div>
              <div
                className="dark:text-neutral-500 text-neutral-700 font-normal"
                aria-hidden="true"
              >
                {experience.role}
              </div>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-neutral-700 dark:text-neutral-500 dark:[&>a]:text-neutral-50 dark:hover:[&>a]:text-blue-500 text">
            {experience.description}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {experience.tags.map((tag) => (
              <li className="mr-1.5 mt-2" key={tag}>
                <div className="flex items-center rounded-full bg-blue-500 dark:bg-opacity-10 bg-opacity-10 g px-3 py-1 text-xs font-medium leading-5 dark:text-blue-500 text-blue-500 ">
                  {tag}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
