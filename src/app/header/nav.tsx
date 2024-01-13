import React from 'react'
import NavItem from './nav-item'

type Props = {}

export default function NavHeader({}: Props) {
  return (
    <nav className="my-10 max-[800px]:hidden">
      <ul className="flex flex-col gap-1 text-base font-semibold">
        <NavItem href="#about" label="Acerca" />
        <NavItem href="#projects" label="Proyectos" />
        <NavItem href="#education" label="Educación"/>
        <NavItem href="#contact" label="Contáctame" />
      </ul>
    </nav>
  )
}
