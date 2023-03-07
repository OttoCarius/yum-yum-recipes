import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 64px 60px;

  @media (max-width: 1200px) {
    margin: 64px 50px;
  }

  @media (max-width: 900px) {
    margin: 64px 40px;
  }

  @media (max-width: 714px) {
    margin: 64px 35px;
  }
  @media (max-width: 600px) {
    margin: 64px 30px;
  }

  @media (max-width: 530px) {
    margin: 64px 25px;
  }
  @media (max-width: 440px) {
    margin: 64px 15px;
  }
`;

export const Card = styled.div`
  height: 300px;
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
  }

  @media (max-width: 900px) {
    height: 240px;
  }

  @media (max-width: 714px) {
    height: 200px;
  }
  @media (max-width: 600px) {
    height: 170px;
  }

  @media (max-width: 530px) {
    height: 150px;
  }
  @media (max-width: 440px) {
    height: 120px;
  }
  @media (max-width: 350px) {
    height: 160px;
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
