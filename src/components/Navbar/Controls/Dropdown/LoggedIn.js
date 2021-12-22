import React from "react";
import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";

const LoggedIn = (props) => {
  return (
    <LoggedInForm>
      <UserInfo>
        <UserAvatar>
          <img
            src="https://1.gravatar.com/avatar/be8819126bd50fa16210bc5dd249beb2?s=360"
            alt=""
          />
        </UserAvatar>
        <Info>
          <UserName>Dom Vournias</UserName>
          <LogOut>
            <LogOutButton onClick={props.logOut}>
              <span>
                <LogoutIcon />
              </span>
              <span>Log out</span>
            </LogOutButton>
          </LogOut>
        </Info>
      </UserInfo>

      <LogControls>
        <ControlPanel>Control Panel</ControlPanel>
      </LogControls>
    </LoggedInForm>
  );
};

export default LoggedIn;

const LoggedInForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: fit-content;
`;
const UserInfo = styled.div`
  display: flex;
  width: 100%;
  gap: 0.7em;
  justify-content: center;
  align-items: center;
`;

const UserAvatar = styled.div`
  display: flex;
  width: 25%;
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.colors.orange};
  > img {
    width: 100%;
    border-radius: 100px;
  }
`;
const Info = styled.div`
  display: flex;
  width: 100%;
`;
const UserName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LogControls = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const ControlPanel = styled.div`
  display: flex;
  gap: 5px;
  font-weight: 400;
  font-size: 1rem;
  align-items: center;
  width: 90%;
  justify-content: center;
  align-self: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  margin: 0.6em 0;
  background-color: ${({ theme }) => theme.colors.blackLighter};
  -webkit-box-shadow: 0 0 10px 5px rgb(0 0 0 / 10%);
  box-shadow: 0 4px 10px 5px rgb(0 0 0 / 10%),
    rgba(0, 0, 0, 0.17) 0px -13px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -16px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -19px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 2px 16px;
`;

const LogOut = styled.div`
  display: flex;
  margin: 1em 0;
  justify-content: center;
`;

const LogOutButton = styled.button`
  display: flex;
  width: fit-content;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
  padding: 0.3em 0.6em;
  border-radius: 8px;
  border: 2px solid ${({ theme }) => theme.colors.blackLighter};
  background-color: transparent;
  color: white;
  cursor: pointer;
  transition-duration: 200ms;
  :hover {
    border: 2px solid white;
  }
  > span {
    display: flex;
    font-size: 0.9rem;
    font-weight: 400;
    width: fit-content;
    > .MuiSvgIcon-root {
      font-size: 1.2em;
    }
  }
`;
