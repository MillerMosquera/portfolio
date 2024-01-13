import React from 'react'
import { EducationType } from './types'
import { ExternalIcon } from '@/icons'

export default function ItemEducation(education: EducationType) {
  return (
    <article key={education.id} className="mb-14">
      <div className="group relative grid  transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 "></div>
        <header
          className="z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide dark:text-neutral-500 text-neutral-500 sm:col-span-2"
          aria-label="2021"
        >
          {education.date}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium flex flex-col gap-1 text-neutral-900">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight dark:text-neutral-50 hover:dark:text-blue-500 hover:text-blue-500  group/link text-lg"
                target="_blank"
                rel="noreferrer"
                aria-label={education.title}
              >
                <span className="inline-block font-semibold">
                  {education.title}
                </span>
                <span className="absolute -inset-x-3 -inset-y-3"></span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-neutral-700 dark:text-neutral-500 dark:[&>a]:text-neutral-50 dark:hover:[&>a]:text-blue-500 text">
            {education.description}
          </p>
        </div>
      </div>
    </article>
  )
}
