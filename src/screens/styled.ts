import styled from "styled-components";
import backgroundSection from "../images/illustration-working.svg";
import { defaultColors } from "../theme/defaultColors";
import secondImageInput from "../images/bg-boost-desktop.svg";
export const ContainerApp = styled.div`
  border: solid transparent;
`;
export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Section = styled.section`
  border: solid transparent;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 1230px) {
    width: 100%;
  }
  h1 {
    color: ${() => defaultColors.black};
    font-weight: 700;
    font-size: 50px;
    border: solid transparent;
    width: 30rem;
    padding: 1rem;
    @media (max-width: 1230px) {
      width: 100%;
    }
  }
  p {
    color: ${() => defaultColors.secondGray};
    border: solid transparent;
    width: 30rem;
    padding: 1rem;
    @media (max-width: 1230px) {
      width: 100%;
    }
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
`;
export const BackgroundImage = styled.div`
  background-image: url(${backgroundSection});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 30rem;
  width: 40rem;
  @media (max-width: 880px) {
    width: 100%;
    height: 20rem;
  }
`;
export const ContentMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  border: solid transparent;
  width: 100%;
  @media (max-width: 1235px) {
   flex-direction: column-reverse;
  }
`;
export const ContainerArticle = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 5rem 0rem 5rem;
  border: solid transparent;
  z-index: 99;
  width: 100%;
  @media (max-width: 704px) {
    padding: 0rem 1rem 0rem 1rem;
  }
`;
export const ContentArticle = styled.div`
  height: 8rem;
  width: 50rem;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${secondImageInput});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-color: ${() => defaultColors.primaryTwo};
  border-radius: 1rem;
  border: solid transparent;

  @media (max-width: 704px) {
    height: 12rem;
   
  }
  form {
    border: solid transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @media (max-width: 704px) {
      flex-wrap: wrap;
      
    }
  }

  input {
    width: 90%;
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
`;
export const ContainerAside = styled.aside`
  margin-top: -4rem;
  background-color: whitesmoke;
  height: 100%;
  width: 100%;
  border: solid transparent;
`;
export const ContentAside = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const SectionContentAside = styled.div`
  border-bottom: solid 10px ${() => defaultColors.primaryOne};
  height: 30rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    width: 50%;
    color: ${() => defaultColors.secondVeryDarkBlue};
    margin-bottom: 15rem;
  }
`;
export const ContainerComponentCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: -10rem;
  border: solid transparent;
`;

export const NewContentArticle = styled(ContentArticle)`
  width: 100%;
  h1 {
    color: ${() => defaultColors.white};
  }
  border: solid transparent;
  border-radius: 0px;
  margin: 0px;
  padding:0px;
  height: 15rem;
  flex-direction: column;
`;
