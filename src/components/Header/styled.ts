import styled from "styled-components";
import logo from "../../images/logo.svg";
import { defaultColors } from "../../theme/defaultColors";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: 0rem 5rem 0rem 5rem;
  width: 100%;
  @media (max-width: 375px) {
    justify-content: center;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 880px) {
    width: 100%;
  }
  ul {
    display: flex;
    list-style: none;
    width: 20rem;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    color: ${() => defaultColors.secondGray};
    border: solid transparent;
    @media (max-width: 880px) {
      width: 100%;
    }
  }
  li {
    cursor: pointer;
    transition: 0.5s;
    :hover {
      transition: 1s;
      color: ${(props) => props.theme.primaryOne};
    }
  }
`;
export const ContainerSection = styled.div`
  width: 14rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 880px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 2rem;
  }
`;
export const StyleButton = styled.button`
  background-color: ${() => defaultColors.primaryOne};
  height: 2rem;
  width: 6rem;
  border: none;
  border-radius: 2rem;
  color: ${() => defaultColors.white};
`;
export const NewStyledButton = styled(StyleButton)`
  background-color: transparent;
  color: ${() => defaultColors.secondGray};
  transition: 0.5s;
  :hover {
    transition: 1s;
    color: ${(props) => props.theme.primaryOne};
  }
`;
export const BackgroundLogo = styled.div`
  background-image: url(${logo});
  background-position: center;
  background-repeat: no-repeat;
  height: 5rem;
  width: 10rem;
  @media (max-width: 880px) {
    width: 100%;
  }
`;
