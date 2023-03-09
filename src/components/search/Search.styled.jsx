import styled from "styled-components";

export const StyledSearch = styled.header`
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  color: #ffffff;

  
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 580px;
  border-radius: 3px;
  overflow: hidden;
  color: #333333;
  border-radius: 20px;
  background: #ffffff;
  background: linear-gradient(35deg, #494949, #313131);

  @media (max-width: 900px) {
    max-width: 500px;
}

@media (max-width: 640px) {
    max-width: 320px;
}
`;

export const StyledButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;
  outline: none;
  :hover {
    background-color: #9c9999;
  }
`;

export const StyledLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const StyledInput = styled.input`
  font-family: Georgia, serif;
  font-size: 22px;
  letter-spacing: 0.8px;
  word-spacing: 3.2px;
  color: #fff;
  font-weight: 700;
  text-decoration: none solid rgb(68, 68, 68);
  font-style: italic;
  font-variant: normal;
  text-transform: capitalize;
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;
