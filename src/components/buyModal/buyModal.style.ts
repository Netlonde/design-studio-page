"use client";

import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 37px 43px;
  gap: 10px;
  width: 1151px;
  height: 720px;
  background-color: #ffffff;
  border: 1px solid #dde2e6;
  border-radius: 20px;
  flex-direction: column;

  .progress-bar {
    width: 100%;
    background-color: #e2e6f9;
    border-radius: 4px;
  }

  .progress {
    height: 10px;
    background-color: #5570f1;
    width: 0%;
    border-radius: 4px;
    transition: width 0.5s ease-in-out;
  }

  .topData {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: relative;

    p {
      position: absolute;
      right: 0;
      bottom: 25px;
      font-family: "sans-serif";
      font-size: 14px;
      line-height: 17px;
      color: #5570f1;
    }

    span {
      color: #83898c;
    }

    h3 {
      font-family: "sans-serif";
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: #2b2f32;
    }
  }

  .mainContainer {
    display: grid;
    grid-template-columns: 50% 50%;
    padding-top: 30px;
    gap: 30px;

    input {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 8px 16px;
      gap: 10px;

      width: 510.5px;
      height: 52px;
      border: none;
      background: rgba(239, 241, 249, 0.6);
      border-radius: 8px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: rgba(0, 0, 0, 0.9);
    }
  }

  .buttonsContainer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 35px;
    padding-top: 30px;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 17px 16px;
      gap: 10px;
      width: 180px;
      height: 58px;
      border: 2px solid #5570f1;
      border-radius: 12px;
      transition: all ease-in-out 0.2s;
      font-family: "Inter";
      font-size: 16px;
      line-height: 24px;
    }

    button:hover {
      opacity: 0.8;
    }
  }

  .continueButton {
    border-color: #fff;
    background-color: #5570f1;
    color: #fff;
  }

  .customSelect {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 16px;
    gap: 10px;

    width: 510.5px;
    height: 52px;
    border: none;
    background: rgba(239, 241, 249, 0.6);
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  .phoneContainer {
    width: 100%;
    gap: 10px;
    display: flex;
    margin-top: 15px;
  }

  .ddd {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 65px;
    gap: 10px;

    width: 130px !important;
    height: 52px;
    border: none;
    background: rgba(239, 241, 249, 0.6);
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.5);

    cursor: pointer;
  }

  .imageContainer {
    position: absolute;
    bottom: 18px;
    left: 16px;

    max-width: 35px;
    max-height: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .dddContainer {
    margin-top: -34px;
    position: relative;

    label {
      font-family: "Inter";
      font-size: 13px;
      line-height: 35px;
      color: #5e6366;
    }
  }

  .phoneNumber {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 16px;
    gap: 10px;

    width: 372px !important;
    height: 52px;
    border: none;
    background: rgba(239, 241, 249, 0.6);
    border-radius: 8px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(0, 0, 0, 0.8);
  }

  .accountTypeContainer {
    margin-top: -20px;
    position: relative;

    label {
      font-family: "Inter";
      font-size: 13px;
      line-height: 35px;
      color: #5e6366;
    }
  }

  .cardInputContainer {
    display: flex;
    flex-direction: column;
    margin-left: 180px;
    width: 300px;
  }

  .cardContainer {
    display: flex;
    margin-left: 35px;
    align-items: center;
    justify-content: center;
  }

  .rccs__card {
    height: 219.44px;
    width: 348px;
  }
`;

export default Container;
