import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  InputBase,
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { colors } from "../theme";

type NavbarProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

export default function Navbar({ searchTerm, setSearchTerm }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const isMobile = useMediaQuery("(max-width:768px)");

  function handleProfileClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function handleLogout() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAnchorEl(null);
    navigate("/login");
  }
  function handleSwitchAccount() {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAnchorEl(null);
    navigate("/login");
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1400px",
          width: "100%",
          mx: "auto",
          py: 1.5,
          px: 1,
          gap: 2,
        }}
      >
        {/* Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: "12px",
              bgcolor: "#8B5E3C",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              fontWeight: 800,
              fontSize: "1rem",
            }}
          >
            C
          </Box>
          {!isMobile && (
            <Typography
              variant="h6"
              sx={{
                color: colors.text,
                fontWeight: 800,
                letterSpacing: "-0.03em",
              }}
            >
              Cozy Loops
            </Typography>
          )}
        </Box>

        {/* Navigation (Desktop) */}
        {!isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {[
              { label: "Shop", path: "/products" },
              { label: "Orders", path: "/orders" },
            ].map((item) => {
              const active = location.pathname.startsWith(item.path);
              return (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  sx={{
                    px: 2,
                    py: 0.6,
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: active ? "#fff" : colors.text,
                    bgcolor: active ? colors.primary : "transparent",
                    "&:hover": {
                      bgcolor: active ? colors.primary : "#F6F1EC",
                      color: active ? "#fff" : colors.primary,
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>
        )}

        {/* Search */}
        {!isMobile && (
          <Box
            sx={{
              flexGrow: 1,
              maxWidth: 420,
              mx: "auto",
              display: "flex",
              alignItems: "center",
              bgcolor: "#FCFAF8",
              border: "1px solid #E8DDD3",
              borderRadius: "999px",
              px: 2,
              py: 0.6,
              "&:focus-within": {
                bgcolor: "#fff",
                borderColor: colors.primary,
                boxShadow: "0 0 0 4px rgba(120,82,52,.12)",
              },
            }}
          >
            <SearchIcon sx={{ color: "#8B5E3C", fontSize: 20 }} />
            <InputBase
              placeholder="Search handmade treasures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ ml: 1, width: "100%", color: colors.text }}
            />
          </Box>
        )}

        {/* Right Side */}
        <Box sx={{ ml: "auto", display: "flex", alignItems: "center", gap: 1 }}>
          <Button
            component={Link}
            to="/cart"
            startIcon={
              <Badge badgeContent={0} color="success">
                <ShoppingCartOutlinedIcon />
              </Badge>
            }
            sx={{
              px: isMobile ? 1.5 : 2,
              py: 0.8,
              borderRadius: "999px",
              border: "1px solid #E8DDD3",
              color: colors.text,
              textTransform: "none",
              fontWeight: 600,
              "&:hover": { bgcolor: "#F6F1EC" },
            }}
          >
            {!isMobile && "Cart"}
          </Button>

          {token ? (
            <>
              <IconButton
                onClick={handleProfileClick}
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  border: "1px solid #E8DDD3",
                  color: colors.primary,
                  "&:hover": { bgcolor: "#F6F1EC" },
                }}
              >
                <AccountCircleIcon sx={{ fontSize: 36 }} />
              </IconButton>
              <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    navigate("/orders");
                  }}
                >
                  My Orders
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSwitchAccount}>Switch Account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              component={Link}
              to="/login"
              variant="contained"
              sx={{
                bgcolor: colors.primary,
                color: colors.white,
                borderRadius: "999px",
                textTransform: "none",
                px: isMobile ? 2 : 3,
                py: 0.8,
                fontWeight: 700,
                boxShadow: "none",
                "&:hover": { bgcolor: "#1F2937", boxShadow: "none" },
              }}
            >
              Sign In
            </Button>
          )}

          {/* Mobile Hamburger */}
          {isMobile && (
            <>
              <IconButton onClick={(e) => setMobileMenuAnchor(e.currentTarget)}>
                <MenuIcon />
              </IconButton>
              <Menu
                anchorEl={mobileMenuAnchor}
                open={Boolean(mobileMenuAnchor)}
                onClose={() => setMobileMenuAnchor(null)}
              >
                <MenuItem component={Link} to="/products">Shop</MenuItem>
                <MenuItem component={Link} to="/orders">Orders</MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
