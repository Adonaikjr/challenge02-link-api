import {
  ContainerHeader,
  BackgroundLogo,
  Nav,
  ContainerSection,
  StyleButton,
  NewStyledButton,
} from './styled'

export function Header() {
  return (
    <ContainerHeader>
      <Nav>
        <BackgroundLogo />
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </Nav>
      <ContainerSection>
        <NewStyledButton>Login</NewStyledButton>
        <StyleButton>Sign Up</StyleButton>
      </ContainerSection>
    </ContainerHeader>
  )
}
