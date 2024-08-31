import { Button } from '@mui/joy';
import ButtonGroup from '@mui/joy/ButtonGroup';
import { styled } from "@mui/joy";
import AddIcon from '@mui/icons-material/Add';



export const ButtonWrapper = styled(ButtonGroup)(()=> ({
    marginTop: '2.56rem',
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '3rem',
    gap: '1.25rem'
}))


export const ChartButton = styled(Button)(({theme})=> ({
    background: theme.palette.secondary['lightYellow'],
    borderRadius: '0.25rem',
    color: theme.palette.primary[100],
    border: 'none',
    borderLeft: 'none !important',
    borderRight: 'none !important',
    display: 'flex',
    gap: '0.62rem',
    ":hover": {
        background : theme.palette.secondary['lightYellow'],
    }
}))

export const AddIconWhite = styled(AddIcon)(()=> ({
    width: '1.25rem',
    height: '1.25rem'
}));