import styled from "styled-components";

export const screenWidths = {
  mobile: "768px",
};

const Layout = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  min-height: 100vh;
  @media (max-width: ${screenWidths.mobile}) {
    grid-template-columns: auto;
  }
`;

export const Main = styled.main`
  grid-column-start: 2;
  padding: 20px 64px;
  border-left: 1px solid black;
  @media (max-width: ${screenWidths.mobile}) {
    grid-column-start: auto !important;
    border-left: none;
    border-top: 1px solid black;
  }
`;

export const Aside = styled.aside`
  position: fixed;
  top: 0px;
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  @media (max-width: ${screenWidths.mobile}) {
    position: static;
    width: 70%;
    margin-inline: auto;
  }
`;

export default Layout;
