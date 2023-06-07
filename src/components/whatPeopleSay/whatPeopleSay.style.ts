import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 135px;
  gap: 72px;
  width: 1440px;
  background: #f3f3f3;

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

  .mainContainer {
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 40px;
    width: 1173px;
  }

  .cardContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 0px;
    gap: 24px;

    width: 570px;
    height: 395px;
    background: #ffffff;
    position: relative;
  }

  .top {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .imageContainer {
    margin-left: -100px;
    z-index: 1;
  }

  .userDetail {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    width: 150%;

    h3 {
      font-family: "sans-serif";
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #151515;
    }

    span {
      font-family: "sans-serif";
      font-size: 18px;
      color: #d9d9d9;
      margin-bottom: 15px;
    }
  }

  .icon {
    width: 100%;
    height: 100%;
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: -10px;
  }

  .text {
    font-family: "sans-serif";
    font-size: 16px;
    color: #151515;
    width: 400px;
    height: 135px;
  }

  .changePageContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: -30px;
  }

  .page {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #d9d9d9;
    cursor: pointer;
  }

  .pageSelected {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #505050;
    cursor: pointer;
  }

  .page:hover,
  .pageSelected:hover {
    opacity: 0.8;
  }

  hr {
    position: absolute;
    width: 100%;
    left: 0;
    right: 0;
    top: 140px;
    z-index: 0 !important;
  }

  button {
    width: 20px;
    height: 20px;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default Container;
