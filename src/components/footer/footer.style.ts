import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 72px 135px;
  gap: 243px;
  width: 1440px;
  height: 428px;
  background: #f5f6fb;

  .detailContainer {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
  }

  .contactsContainer {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }

  .text {
    width: 300px;
    font-family: "sans-serif";
    font-size: 16px;
    line-height: 150%;
    color: #151515;
  }

  .navigationContainer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
  }

  .buttonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-bottom: -10px;

    button {
      width: 20px;
      height: 20px;
    }
  }

  .icon {
    width: 100%;
    height: 100%;
  }

  .contactContainer {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
      font-family: "sans-serif";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 150%;
      color: #505050;
    }

    p {
      font-family: "sans-serif";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #151515;
    }
  }

  button:hover {
    opacity: 0.8;
  }
`;

export default Container;
