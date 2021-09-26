import { memo } from "react";
import useForm from "./useForm";

import {
  Wrapper,
  TextHeading,
  Text,
  FormContainer,
  InputField,
  InputFieldContainer,
  CheckField,
  CheckFieldContainer,
  RightCheckFieldContainer,
  Button,
} from "./index.styled.js";

const HomeComponent = memo(() => {
  const { formData, handleChange, handleSubmit } = useForm();
  const { name, phone, email, password, password_confirmation, agree } =
    formData;
  return (
    <Wrapper>
      <TextHeading>Get Started Free</TextHeading>
      <Text giveMargin={true}>Its time to enjoy ulitmate shopping </Text>
      <Text>experience through Whatsapp</Text>
      <FormContainer>
        <InputFieldContainer>
          <InputField
            placeholder={"First Name"}
            name='name'
            value={name}
            onChange={handleChange}
          />
        </InputFieldContainer>

        <InputFieldContainer>
          <InputField
            placeholder={"Whatsapp Number"}
            name='phone'
            value={phone}
            onChange={handleChange}
          />
        </InputFieldContainer>

        <InputFieldContainer>
          <InputField
            placeholder={"Email"}
            name='email'
            value={email}
            onChange={handleChange}
          />
        </InputFieldContainer>

        <InputFieldContainer>
          <InputField
            type={"password"}
            placeholder={"Password"}
            name='password'
            value={password}
            onChange={handleChange}
          />
        </InputFieldContainer>

        <InputFieldContainer>
          <InputField
            type={"password"}
            placeholder={"confirm Password"}
            name='password_confirmation'
            value={password_confirmation}
            onChange={handleChange}
          />
        </InputFieldContainer>

        <CheckFieldContainer>
          <CheckField
            type={"checkbox"}
            name='agree'
            value={agree}
            onChange={handleChange}
          />
          <RightCheckFieldContainer>
            Please accept the term and condition to proceed
          </RightCheckFieldContainer>
        </CheckFieldContainer>

        <Button type={"submit"} onClick={handleSubmit}>
          Customer
        </Button>
      </FormContainer>
    </Wrapper>
  );
});

export default HomeComponent;
