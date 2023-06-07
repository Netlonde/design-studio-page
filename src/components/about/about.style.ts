import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 72px 135px;

  width: 1440px;
  height: 414px;
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

  .text {
    font-family: "sans-serif";
    font-size: 16px;
    line-height: 170%;
    color: #151515;
  }
`;

export default Container;
