import { ContainerCard, StyleComponentImage } from './styled'
interface typeProps {
  title: string
  img: any
  text: string
}
export function Card({ title, img, text }: typeProps) {
  return (
    <ContainerCard>
      <StyleComponentImage>{img}</StyleComponentImage>
      <h1>{title}</h1>
      <p>{text}</p>
    </ContainerCard>
  )
}
