import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 135px;
  width: 100%;
  max-width: 1440px;
  height: 116px;

  .logoContainer {
    margin-right: 20px;
  }

  .leftContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    button {
      font-family: "sans-serif";
      font-size: 15px;
      color: #161616;
    }

    button:hover {
      opacity: 0.8;
    }
  }

  .rightContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    span,
    button {
      font-family: "sans-serif";
      font-size: 15px;
      line-height: 24px;
      color: #161616;
    }

    button:hover {
      opacity: 0.8;
    }
  }

  .arrowIcon {
    margin-bottom: -2px;
  }
`;

export default Container;
