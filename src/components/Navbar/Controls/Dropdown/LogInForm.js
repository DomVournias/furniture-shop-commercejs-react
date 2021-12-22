import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import GoogleLoginBtn from "./GoogleLoginBtn";
import { emailSignInStart } from "../../../../redux/User/user.actions";

const LogInForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <SignInForm onSubmit={handleSubmit}>
      <RowInput>
        <Username for="email">
          <b>Your email address:</b>
        </Username>
        <Input
          type="email"
          name="email"
          placeholder=""
          handleChange={(e) => setEmail(e.target.value)}
        />
      </RowInput>
      <RowInput>
        <Password for="password">
          <b>Password:</b>
        </Password>
        <Input
          type="password"
          name="password"
          placeholder=""
          handleChange={(e) => setPassword(e.target.value)}
        />
        <ForgotPassword>Forgot your password?</ForgotPassword>
      </RowInput>
      <RowInput>
        <LoginButton type="submit">
          <span>
            <LockOpenIcon />
          </span>
          <span>Log in</span>
        </LoginButton>
      </RowInput>
      <RowShort>
        <RegisterAccount>
          <span>Don't have an account?</span>
          <RegisterLink to="/register">Register now</RegisterLink>
        </RegisterAccount>
      </RowShort>
      <Divider>
        <Line></Line>
        <p>or log in using</p>
        <Line></Line>
      </Divider>
      <SocialLogins>
        <GoogleLoginBtn />
      </SocialLogins>
    </SignInForm>
  );
};

export default LogInForm;

const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: fit-content;
`;

const RowInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.8em;
`;

const Username = styled.label`
  padding-bottom: 5px;
  > b {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;
const Input = styled.input`
  background-color: transparent;
  border-radius: 8px;
  border: 1.5px solid #646464;
  padding: 0.4rem 0.6rem;
  font-size: 0.9rem;
  display: block;
  line-height: 1.4;
  text-align: left;
  word-wrap: break-word;
  appearance: none;
  transition: all 0.2 ease;
  color: white;
  box-shadow: inset 0 1px 4px rgb(0 0 0 / 10%);
  :focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.blackLighter};
  }
`;
const Password = styled.div`
  padding-bottom: 5px;
  > b {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

const ForgotPassword = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.orangeLight};
  margin-top: 5px;
`;

const LoginButton = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 90%;
  justify-content: center;
  align-self: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin: 0.6em 0;
  background-color: ${({ theme }) => theme.colors.orange};
  -webkit-box-shadow: 0 0 10px 5px rgb(0 0 0 / 21%);
  box-shadow: 0 4px 10px 5px rgb(0 0 0 / 21%),
    rgba(0, 0, 0, 0.17) 0px -13px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -16px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -19px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 2px 16px;
  > span {
    display: flex;
    width: fit-content;
    font-weight: 400;
    font-size: 1rem;
    > .MuiSvgIcon-root {
      font-size: 1.2rem;
    }
  }
`;

const RowShort = styled.div`
  display: flex;
`;
const RegisterAccount = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  text-align: center;
  > span {
    margin-right: 5px;
  }
`;
const RegisterLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.orangeLight};
`;

const Line = styled.span`
  position: relative;
`;

const Divider = styled.div`
  display: flex;
  width: 100%;
  margin: 1.2em 0;
  color: ${({ theme }) => theme.colors.grey};
  > ${Line} {
    ::before {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      border-top: 1px solid ${({ theme }) => theme.colors.grey};
    }
  }
  > p {
    padding: 0 15px;
    white-space: nowrap;
    line-height: 1;
    font-style: normal;
    text-align: center;
    font-size: 0.8rem;
    font-weight: 400;
    color: white;
    opacity: 0.5;
    text-transform: lowercase;
  }
`;

const SocialLogins = styled.div`
  display: flex;
  justify-content: center;
`;
