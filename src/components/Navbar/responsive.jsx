import * as Styled from "./Navbar.styles";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DataMenu from "./DataMenu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar, Grid } from "@mui/joy";
import SettingsMenu from "./SettingsMenu";





/* eslint-disable no-unused-vars */

import {Input, styled } from "@mui/joy";
import Link from '@mui/joy/Link';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';



export const NavBarWrapper = styled('div')(({ theme }) => ({
    height: '4rem',
    padding: '0.75rem 2.5rem',
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.primary[50],
    display: 'flex'
}));

export const Navtitle = styled('span')(({ theme }) => ({
    fontSize: theme.vars.fontSize.xl2,
    fontWeight: theme.vars.fontWeight.xl
}));

export const StyledLink = styled(Link)(({ isActive }) => ({
    textDecorationLine : isActive ? 'underline' : 'none',
}));


export const MenuButtonStyled = styled(MenuButton)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: theme.palette.primary[50],
    padding: 0,
    fontSize: theme.vars.fontSize.md,
    fontWeight: theme.vars.fontSize.md,
    ":hover": {
        background : 'transparent',
        color: theme.palette.primary[50],
        textDecorationLine : 'underline',

    }
}));


export const ButtonContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '3.75rem'
}));


export const InputBox = styled(Input)(({ theme }) => ({
    fontSize: theme.vars.fontSize.md,
    width: '80%'
}));


export const ActionIconsWrapper = styled('div')(({theme})=> ({
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
}))


export const MenuWraper = styled(Menu)(({ theme }) => ({
    padding: '0.62rem 0'
}));

export const GridContainer = styled(Grid)(({theme})=> ({
    alignItems: 'center',
    gap: '3.75rem'
}));

export const GridContainerRight = styled(Grid)(({theme})=> ({
    alignItems: 'center',
    gap: '2rem'
}));







const buttonList = [
  { id: 1, label: "Home", type: "link", route: "/" },
  { id: 2, label: "Data", type: "menu" },
  { id: 3, label: "Workspace", type: "link", route: "/workspace" },
  { id: 4, label: "Goals", type: "link", route: "/goals" },
  { id: 5, label: "Apps", type: "link", route: "/apps" },
  { id: 6, label: "Monitor", type: "link", route: "/monitor" },
];

const Navbar = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  return (
    <Styled.NavBarWrapper>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Styled.GridContainer container spacing={1}>
            <Grid item xs="auto">
              <Styled.Navtitle>Dashboards</Styled.Navtitle>
            </Grid>
            {buttonList.map((item) =>
              item.type === "link" ? (
                <Grid item xs="auto" key={item.id}>
                  <Styled.StyledLink
                    isActive={currentLocation === item.route}
                    component={RouterLink}
                    to={item.route}
                  >
                    {item.label}
                  </Styled.StyledLink>
                </Grid>
              ) : (
                <Grid item xs="auto" key={item.id}>
                  <DataMenu />
                </Grid>
              )
            )}
          </Styled.GridContainer>
        </Grid>
        <Grid item xs={4}>
          <Styled.InputBox
            startDecorator={<SearchIcon />}
            placeholder="Search"
          />
        </Grid>
        <Grid item xs={2}>
          <Styled.GridContainerRight container spacing={1}>
            <Grid item xs="auto">
              <NotificationsNoneOutlinedIcon color="primary" />
            </Grid>
            <Grid item xs="auto">
              <SettingsMenu />
            </Grid>
            <Grid item xs="auto">
              <Avatar />
            </Grid>
          </Styled.GridContainerRight>
        </Grid>
      </Grid>
    </Styled.NavBarWrapper>
  );
};

export default Navbar;
