import { ReactNode } from 'react'
import { ContainerPreviewLink, ContentPreviewLink } from './styled'
interface typePropsPreview {
  data: string
  link: string
  children: ReactNode
}

export function PreviewLink({ data, link, children }: typePropsPreview) {
  return (
    <ContainerPreviewLink>
      <h1>{link}</h1>
      <ContentPreviewLink>
        {data}
        {children}
      </ContentPreviewLink>
    </ContainerPreviewLink>
  )
}
