import React from 'react'
import HeaderFooterItem from './footer-item'
import { GithubIcon, LinkedinIcon } from '@/icons'

type Props = {}

export default function FooterHeader({}: Props) {
  return (
    <div className="mt-5 max-[700px]:mt-4">
      <div className="flex max-[700px]:flex-col items-center max-[700px]:items-start">
        <div className="flex items-center gap-3">
          <HeaderFooterItem
            href="https://github.com/MillerMosquera"
            title="Github"
            icon={<GithubIcon />}
          />
          <HeaderFooterItem
            href="https://www.linkedin.com/in/millermosquera"
            title="Linkedin"
            icon={<LinkedinIcon />}
          />
        </div>
      </div>
    </div>
  )
}
