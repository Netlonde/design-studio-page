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
    font-family: "Poppins";
    font-weight: 400;
    font-size: 40px;
    line-height: 130%;
    color: #151515;

    span {
      color: #505050;
    }
  }

  .mainContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 32px;
    width: 1173px;
    height: 726px;
  }

  .options {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .leftOptions {
    display: flex;
    gap: 30px;
  }

  .imageContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 95px 70px;
    gap: 10px;

    width: 270px;
    background: #d9d9d9;
  }

  .imagesContainer {
    display: grid;
    grid-template-columns: 23% 23% 23% 23%;
    gap: 30px;
    max-width: 1170px;
    width: 100%;
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default Container;
