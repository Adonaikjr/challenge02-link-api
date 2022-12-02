import { ContainerButtonVisible } from './styled'

interface typePropsButtonVisible {
  title: string
  onClick: any
}

export function ButtonVisible({ title, onClick }: typePropsButtonVisible) {
  return (
    <ContainerButtonVisible onClick={onClick}>{title}</ContainerButtonVisible>
  )
}
