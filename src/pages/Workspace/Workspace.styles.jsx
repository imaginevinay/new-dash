import { Button, MenuButton, styled } from "@mui/joy";


export const Header = styled('div')(()=>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1.6rem 2.5rem',
    fontSize: '1.5rem'
}))


export const WorkspaceTitle = styled('div')(()=>({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
}))


export const SettingsBtn = styled(Button)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: theme.palette.primary[200],
    background: theme.palette.primary[50],
    fontSize: '1.25rem',
    fontWeight: 400,
    "&:hover" : {
        background: 'transparent'
    }
}))

export const ButtonWrapper = styled('div')(()=>({
    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem',    
}))


export const ButtonItem = styled(Button)(({theme, isSelected})=>({
    display: 'flex',
    alignItems: 'center',
    gap: '0.62rem', 
    borderRadius: '2rem',
    background : isSelected ? theme.palette.primary[100] : theme.palette.primary[50],
    color: isSelected ? theme.palette.primary[50] : theme.palette.primary[200],
    border : isSelected ? '1px solid #D4AF37' : '1px solid #89939E',
    fontSize: theme.vars.fontSize.md,
    fontWeight: 400,
    "&:hover": {
        background: isSelected ? theme.palette.primary[100] : theme.palette.primary[50]
    }
}))

export const MidRow = styled('div')(()=>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',  
    padding: '1.69rem 2.5rem',
    border: '1px solid rgba(137, 147, 158, 0.25)',
}))


export const MenuButtonItem = styled(MenuButton)(({theme})=>({
    fontSize: theme.vars.fontSize.md,
    width: '11.625rem',
    justifyContent: 'space-between'
}))



