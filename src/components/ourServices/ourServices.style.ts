import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 135px;
  gap: 72px;

  width: 1440px;
  height: 708px;

  .title {
    font-family: "sans-serif";
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    color: #151515;

    span {
      color: #505050;
    }
  }

  .starContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 30px;
    width: 274px;
    height: 268px;
  }

  .starText {
    font-family: "sans-serif";
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #151515;
  }

  .mainContainer {
    display: flex;
    gap: 30px;
  }
`;

export default Container;
