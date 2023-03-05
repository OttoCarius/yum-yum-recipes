import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 64px 0;
`;

export const Card = styled.div`
  height: 360px;
  border-radius: 32px;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 32px;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 16px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 1200px) {
    height: 300px;
    width: 300px;
  }

  @media (max-width: 900px) {
    height: 240px;
    width: 240px;
  }

  @media (max-width: 714px) {
    height: 200px;
    width: 200px;
  }
  @media (max-width: 600px) {
    height: 170px;
    width: 170px;
  }

  @media (max-width: 530px) {
    height: 150px;
    width: 150px;
  }
  @media (max-width: 440px) {
    height: 120px;
    width: 120px;
  }
  @media (max-width: 350px) {
    height: 160px;
    width: 160px;
  }

  @media (max-width: 714px) {
    p {
      font-size: 14px;
    }
  }

  @media (max-width: 530px) {
    p {
      font-size: 12px;
    }
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
