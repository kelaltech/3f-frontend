import React from 'react'

export type HomeSlidesItemType = {
  src: string
  links?: React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >[]
}
