import {
  Avatar,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/user/user.action";

const UserProfile = ({ name, url }) => {
  const navigate=useNavigate()
  const dispatch = useDispatch();

  return (
    <Menu>
      <MenuButton>
        <Avatar p="1" name={name} src={url} />
      </MenuButton>
      <MenuList>
        <MenuGroup fontSize="md" title={`Hello, ${name}`}>
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title="Help">
          <MenuItem>Docs</MenuItem>
          <MenuItem>FAQ</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuItem as="button" onClick={() => {
          dispatch(logOut())
          dispatch({type:"REMOVE_CART_DETAILS"})
          navigate('/')
          }}>
          Sign Out
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default UserProfile;
