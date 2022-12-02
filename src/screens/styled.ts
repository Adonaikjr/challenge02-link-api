import styled from 'styled-components'
import backgroundSection from '../images/illustration-working.svg'
import { defaultColors } from '../theme/defaultColors'
import secondImageInput from '../images/bg-boost-desktop.svg'
export const ContainerApp = styled.div`
  border: solid transparent;
`
export const ContainerMain = styled.main``
export const Section = styled.section`
  border: solid transparent;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    color: ${() => defaultColors.black};
    font-weight: 700;
    font-size: 50px;
    border: solid transparent;
    width: 30rem;
    border: solid transparent;
  }
  p {
    color: ${() => defaultColors.secondGray};
    border: solid transparent;
    width: 30rem;
  }
  button {
    background-color: ${() => defaultColors.primaryOne};
    border: none;
    height: 3rem;
    width: 10rem;
    border-radius: 4rem;
    margin-top: 2rem;
    color: ${() => defaultColors.white};
  }
  button,
  p,
  h1 {
    margin-left: 5rem;
  }
`
export const BackgroundImage = styled.div`
  background-image: url(${backgroundSection});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 30rem;
  width: 40rem;
`
export const ContentMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1230px) {
    justify-content: center;
    align-items: center;
  }
`
export const ContainerArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 5rem 0rem 5rem;
`
export const ContentArticle = styled.div`
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${secondImageInput});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: ${() => defaultColors.primaryTwo};
  border-radius: 1rem;
  width: 100%;

  input {
    width: 40rem;
    height: 4rem;
    border: solid transparent;
    border-radius: 10px;
    padding-left: 1rem;
    ::placeholder {
      color: ${() => defaultColors.secondGray};
      font-size: 18px;
    }
  }
  button {
    height: 3.5rem;
    width: 8rem;
    border-radius: 10px;
    border: solid transparent;
    margin: 1rem;
    color: ${() => defaultColors.white};
    background-color: ${() => defaultColors.primaryOne};
  }
`
export const ContainerAside = styled.aside`
  margin-top: -4rem;
  background-color: whitesmoke;
  height: 125vh;
  border: solid transparent;
`
export const ContentAside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SectionContentAside = styled.div`
  border-bottom: solid 10px ${() => defaultColors.primaryOne};
  height: 30rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    width: 34rem;
    color: ${() => defaultColors.secondVeryDarkBlue};
    margin-bottom: 15rem;
  }
`
export const ContainerComponentCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: -10rem;
  border: solid transparent;
`

export const NewContentArticle = styled(ContentArticle)`
  h1 {
    color: ${() => defaultColors.white};
  }
  border: solid transparent;
  border-radius: 0px;
  height: 15rem;
  flex-direction: column;
`
