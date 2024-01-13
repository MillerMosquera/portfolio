import { Skilltype } from "./types";


export default function Skill (skill: Skilltype ) {
  return (
    <div>
      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
        {skill.tags.map((tag) => (
          <li className="mr-1.5 mt-2 " key={tag}>
            <div className="flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 dark:text-white text-neutral-900">
            <span className="text-blue-500 text-lg leading-6">▹</span>{tag}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
