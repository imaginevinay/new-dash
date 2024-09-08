/* eslint-disable no-unused-vars */

import { Input, styled } from "@mui/joy";
import Link from '@mui/joy/Link';
import MenuButton from '@mui/joy/MenuButton';
import Menu from '@mui/joy/Menu';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { Avatar } from "@mui/joy";



export const NavBarWrapper = styled('div')(({ theme }) => ({
    height: '4rem',
    padding: '0.75rem 2.5rem',
    display : 'flex',
    backgroundColor: theme.palette.primary[200],
    color: theme.palette.primary[50],
    gap: '3.75rem',
    justifyContent: 'space-between'
}));

export const ButtonContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    gap: '3.75rem',
    flexShrink: 0,
}));

export const Navtitle = styled('span')(({ theme }) => ({
    fontSize: theme.vars.fontSize.xl2,
    fontWeight: theme.vars.fontWeight.xl
}));

export const StyledLink = styled(Link)(() => ({
    '&.active': {
        textDecorationLine: 'underline'
    }
}));


export const MenuButtonStyled = styled(MenuButton)(({ theme, isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.primary[50],
    textDecorationLine : isActive ? 'underline' : 'none',
    padding: 0,
    fontSize: theme.vars.fontSize.md,
    fontWeight: theme.vars.fontSize.md,
    "&:hover": {
        background : 'transparent',
        color: theme.palette.primary[50],
    }
}));


export const InputBox = styled(Input)(({ theme }) => ({
    fontSize: theme.vars.fontSize.md,
    width: '37.5rem',
    border: 'none'
}));


export const ActionIconsWrapper = styled('div')(({theme})=> ({
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
}))


export const MenuWraper = styled(Menu)(({ theme }) => ({
    padding: '0.62rem 0'
}));

export const NotificationIcon = styled(NotificationsNoneOutlinedIcon)(({ theme }) => ({
    width: '1.5rem',
    height: '1.5rem'
}));

export const SettingsIcon = styled(SettingsOutlinedIcon)(({ theme }) => ({
    width: '1.5rem',
    height: '1.5rem'
}));

export const UserProfile = styled(Avatar)(({ theme }) => ({
    width: '2.5rem',
    height: '2.5rem'
}));


export const MenuWrapper = styled(Menu)(({ theme }) => ({
    width: '25rem',
    padding: '1.25rem 0.75rem',
    gap: '0.875rem',
    boxShadow: theme.shadow.md,
    border: 0
}));





