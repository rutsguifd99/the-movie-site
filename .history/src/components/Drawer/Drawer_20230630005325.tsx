import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import LocalPlayIcon from "@mui/icons-material/LocalPlay";
import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import WeekendIcon from "@mui/icons-material/Weekend";
import MovingIcon from "@mui/icons-material/Moving";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { Link } from "react-router-dom";

const drawerWidth = 300;

const styles = {
  iconButton: {
    display: { sm: "none" },
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 5,
  },
  navBox: {
    width: { sm: drawerWidth },
    flexShrink: { sm: 0 },
  },
  mainBox: {
    flexGrow: 1,
    width: { sm: `calc(100% - ${drawerWidth}px)` },
  },
  icon: {
    height: "24px",
    width: "24px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    width: "100%",
  },
};

type Props = {
  children: string | JSX.Element | JSX.Element[];
  header: string | JSX.Element | JSX.Element[];
};

const pages = [
  {
    path: "/",
    text: "Home",
    icon: <WeekendIcon sx={styles.icon} />,
  },
  {
    path: "/favorite",
    text: "Favorite",
    icon: <FavoriteIcon sx={styles.icon} />,
  },
  {
    path: "/genres",
    text: "Genres",
    icon: <LocalPlayIcon sx={styles.icon} />,
  },
  {
    path: "/popular",
    text: "Popular",
    icon: <MovingIcon sx={styles.icon} />,
  },
  {
    path: "/upcoming",
    text: "Coming soon",
    icon: <CalendarTodayIcon sx={styles.icon} />,
  },
];

export function ResponsiveDrawer({ children, header }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
      <Link style={{ textDecoration: "none", color: "inherit" }} to="/">
        <Container
          disableGutters
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            my: 4,
          }}
        >
          <EmojiFoodBeverageIcon
            sx={{ width: "32px", height: "32px", mr: 2 }}
          />
          <Typography fontWeight="600" fontSize="22px">
            WATCH
          </Typography>
        </Container>
      </Link>
      <Divider />
      <Stack>
        {pages.map((page) => (
          <Container
            key={page.path}
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            {/* <Link to="/favorites" style={styles.link}> */}
            {page.icon}
            <Typography fontSize="16px">{page.text}</Typography>
            {/* </Link> */}
          </Container>
        ))}
      </Stack>
    </>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Container maxWidth={false} disableGutters sx={{ display: "flex" }}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        sx={styles.iconButton}
      >
        <MenuIcon />
      </IconButton>

      <Box component="nav" sx={styles.navBox} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={styles.mainBox}>
        {header}
        {children}
      </Box>
    </Container>
  );
}
