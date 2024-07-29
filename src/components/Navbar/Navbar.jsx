import * as Styled from "./Navbar.styles";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import DataMenu from "./DataMenu";
import SettingsMenu from "./SettingsMenu";
import SearchIcon from "@mui/icons-material/Search";

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
    <Styled.NavBarWrapper className="NavBarWrapper">
      <Styled.ButtonContainer>
        <Styled.Navtitle>Dashboards</Styled.Navtitle>
        {buttonList.map((item) =>
          item.type === "link" ? (
            <Styled.StyledLink
              isActive={currentLocation === item.route}
              component={RouterLink}
              to={item.route}
              key={item.id}
            >
              {item.label}
            </Styled.StyledLink>
          ) : (
            <DataMenu key={item.id} />
          )
        )}
      </Styled.ButtonContainer>
      <Styled.InputBox startDecorator={<SearchIcon />} placeholder="Search" />
      <Styled.ActionIconsWrapper>
        <Styled.NotificationIcon color="primary" />
        <SettingsMenu />
        <Styled.UserProfile />
      </Styled.ActionIconsWrapper>
    </Styled.NavBarWrapper>
  );
};

export default Navbar;
