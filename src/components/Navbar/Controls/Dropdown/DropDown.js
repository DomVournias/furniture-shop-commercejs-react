import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogInForm from "./LogInForm";
import LoggedIn from "./LoggedIn";
import { auth } from "../../../../firebase/config";
import { connect } from "react-redux";

const DropDown = (props) => {
  const { currentUser } = props;
  const [drop, setDrop] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) setDrop(false);
    });
  });

  return (
    <Controls>
      <UserControls onClick={() => setDrop(!drop)}>
        <AccountCircleIcon />
      </UserControls>
      <DropDownContainer>
        <DropDownMenu
          ref={menuRef}
          display={drop ? "flex" : "none"}
          drop={drop}
        >
          {currentUser && <LoggedIn logOut={() => auth.signOut()} />}
          {!currentUser && <LogInForm />}
        </DropDownMenu>
      </DropDownContainer>
    </Controls>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps, null)(DropDown);

const DropDownContainer = styled.div`
  position: relative;
  height: fit-content;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
`;

const UserControls = styled.div`
  display: flex;
  width: fit-content;
  padding: 0.6em;
  border-radius: 30px;
  transition-duration: 300ms;
  cursor: pointer;
  :hover {
    background-color: #ffffff32;
  }
  > .MuiSvgIcon-root {
    font-size: 27px;
  }
`;

const DropDownMenu = styled.div`
  position: absolute;
  display: ${(props) => props.display};
  row-gap: 2em;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  margin-top: 10px;
  margin-left: -250px;
  overflow: visible;
  padding: 12px 15px;
  width: fit-content;
  border-radius: 8px;
  font-weight: 600;
  -webkit-box-shadow: 0 0 10px 5px rgb(0 0 0 / 31%);
  box-shadow: 0 0 10px 5px rgb(0 0 0 / 31%);
`;
// const Login = styled(Link)`
//   padding: 4px 8px;
//   text-decoration: none;
//   color: ${({ theme }) => theme.colors.black};
//   border-radius: 4px;
//   :hover {
//     background-color: ${({ theme }) => theme.colors.blackLight};
//   }
// `;
// const Register = styled(Link)`
//   padding: 4px 8px;
//   text-decoration: none;
//   color: ${({ theme }) => theme.colors.black};
//   border-radius: 4px;
//   :hover {
//     background-color: ${({ theme }) => theme.colors.blackLight};
//   }
// `;
