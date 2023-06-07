import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 72px 135px;
  gap: 72px;
  width: 1440px;

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
    grid-template-columns: 33% 33% 33%;
    padding: 0px 100px;
    gap: 32px;
    width: 1173px;
  }

  .priceContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 28px;
    width: 258px;
    height: 460px;
    border: 1px solid #151515;

    button {
      padding: 9px 28px;
      color: #fff;
      height: 43px;
      background: #505050;
    }
  }

  .priceBlackContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px;
    gap: 28px;
    width: 258px;
    height: 460px;
    border: 1px solid #151515;
    background-color: #151515;

    .priceTitle,
    .price,
    .time,
    .text {
      color: #fff;
    }

    button {
      padding: 9px 28px;
      color: #000;
      height: 43px;
      background: #fff;
    }
  }

  .priceTitle {
    font-family: "sans-serif";
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #151515;
  }

  .price {
    font-family: "sans-serif";
    font-style: normal;
    font-weight: 400;
    font-size: 44px;
    text-align: center;
    color: #151515;
  }

  .time {
    font-family: "sans-serif";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #151515;
  }

  .text {
    font-family: "sans-serif";
    font-size: 14px;
    line-height: 170%;
    text-align: center;
    color: #151515;
  }

  .buyButton {
    margin-top: 20px;
  }

  hr {
    width: 100%;
    color: #f3f3f3;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default Container;
