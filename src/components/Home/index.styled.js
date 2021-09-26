import styled from "styled-components";
export const Wrapper = styled.div`
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 600px;
  height: auto;
  width: 400px;
  border: 1px solid gray;
  border-radius: 4px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0, 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TextHeading = styled.p`
  margin-top: 70px;
  font-weight: bold;
  font-size: 25px;
  color: blue;
`;

export const Text = styled.p`
  margin-top: ${({ giveMargin }) => giveMargin && "10px"};
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
`;

export const FormContainer = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  min-width: 80%;
`;

export const InputFieldContainer = styled.div`
  margin-top: 10px;
  border-radius: 4px;
  border: 1px solid black;
  position: relative;
  min-width: 100%;
`;

export const InputField = styled.input`
  border: none;
  outline: none;
  padding: 10px 10px;
`;

export const CheckFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

export const RightCheckFieldContainer = styled.div`
  margin-left: 5px;
  font-size: 16px;
  display: flex;
  flex-flow: row;
`;

export const CheckField = styled.input`
  margin-top: 22px;
`;

export const Button = styled.button`
  border-radius: 20px;
  height: 40px;
  width: 200px;
  align-self: center;
  padding: 10px;
  margin-top: 40px;
`;
