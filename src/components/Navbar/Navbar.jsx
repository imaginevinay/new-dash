import * as Styled from "./Navbar.styles";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DataMenu from "./DataMenu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Avatar, Grid } from "@mui/joy";
import SettingsMenu from "./SettingsMenu";

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
    // <Styled.NavBarWrapper>
    //   <Styled.ButtonContainer>
    //     <Styled.Navtitle>Dashboards</Styled.Navtitle>
    //     {buttonList.map((item) =>
    //       item.type === "link" ? (
    //         <Styled.StyledLink
    //           isActive={currentLocation === item.route}
    //           component={RouterLink}
    //           to={item.route}
    //           key={item.id}
    //         >
    //           {item.label}
    //         </Styled.StyledLink>
    //       ) : (
    //         <DataMenu key={item.id} />
    //       )
    //     )}
    //   </Styled.ButtonContainer>
    //   <Styled.InputBox startDecorator={<SearchIcon />} placeholder="Search" />
    //   <Styled.ActionIconsWrapper>
    //     <NotificationsNoneOutlinedIcon color="primary" />
    //     <SettingsMenu />
    //     <Avatar />
    //   </Styled.ActionIconsWrapper>
    // </Styled.NavBarWrapper>
    <Grid container spacing={2}>
      <Grid item xs={8} direction={'row'}>
        <div>Dashboards</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
     </Grid>
      <Grid item xs={4}>
        <div>input box</div>
      </Grid>
      <Grid item xs={2}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Grid>
    </Grid>
  );
};

export default Navbar;
