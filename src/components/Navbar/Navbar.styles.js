/* eslint-disable no-unused-vars */

import { Input, styled } from "@mui/joy";
import Link from '@mui/joy/Link';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';



export const NavBarWrapper = styled('div')(({ theme }) => ({
    height: '4rem',
    padding: '0.75rem 2.5rem',
    display : 'flex',
    backgroundColor: theme.palette.primary[100],
    color: theme.palette.primary[50]
}));

export const ButtonContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '3.75rem'
}));

export const Navtitle = styled('span')(({ theme }) => ({
    fontSize: theme.vars.fontSize.xl2,
    fontWeight: theme.vars.fontWeight.xl
}));

export const StyledLink = styled(Link)(({ isActive }) => ({
    textDecorationLine : isActive ? 'underline' : 'none',
}));


export const MenuButtonStyled = styled(MenuButton)(({ theme, isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.62rem',
    color: theme.palette.primary[50],
    textDecorationLine : isActive ? 'underline' : 'none',
    padding: 0,
    fontSize: theme.vars.fontSize.md,
    fontWeight: theme.vars.fontSize.md,
    ":hover": {
        background : 'transparent'
    }
}));


export const InputBox = styled(Input)(({ theme }) => ({
    fontSize: theme.vars.fontSize.md,
    marginRight: '7.81rem',
    width: '37.5rem',
    margin: 'auto'
}));


export const ActionIconsWrapper = styled('div')(({theme})=> ({
    display: 'flex',
    gap: '2rem',
    alignItems: 'center'
}))


export const MenuWraper = styled(Menu)(({ theme }) => ({
    padding: '0.62rem 0'
}));





