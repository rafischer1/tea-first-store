import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import styled from "styled-components";

const SignInAndSignUpContainer = styled.div`
  width: 900px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;
`;

const SignInAndSignUp = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpContainer>
);

export default SignInAndSignUp;
