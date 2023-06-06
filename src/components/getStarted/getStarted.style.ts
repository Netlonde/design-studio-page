import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  max-width: 1440px;

  .rightContainer {
    display: flex;
    align-items: flex-start;
    padding: 310px 312px;
    gap: 10px;
    width: 100%;
    height: 750px;
    background: #d9d9d9;
  }

  .leftContainer {
    width: 100%;
    padding: 200px 312px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
  }

  .textContainer {
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  .title {
    font-family: "Poppins";
    font-weight: 400;
    font-size: 52px;
    line-height: 72px;
    letter-spacing: 0.01em;
    color: #151515;
  }

  .text {
    font-family: "Poppins";
    font-size: 16px;
    line-height: 24px;
    color: #151515;
  }

  .buttonContainer {
    width: 500px;
    display: flex;
    justify-content: left;

    button {
      padding: 12px 42px;
      width: 175px;
      height: 48px;
      border: 2.5px solid #151515;
    }
  }
`;

export default Container;
