import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { List, AppBar, ListItem, Switch, Toolbar, Typography, Button, IconButton, Badge, colors, typographyClasses, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  { title: 'catalog', path: '/catalog' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },
]

const rightLinks = [
  { title: 'login', path: '/login' },
  { title: 'register', path: '/register' },
]


interface Props {
  darkmode: boolean;
  handleThemeChange: () => void;
}

const navStyle = {
  color: 'inherit',
  textDecoration: 'none',
  typography: 'h6',
  transition: 'color 0.3s ease, transform 0.3s ease', // Smooth transition
  '&:hover': {
    color: 'grey.300', // Light grey on hover
    transform: 'scale(1.05)', // Slight scale effect on hover
    textDecoration: 'underline',
  },
  '&:active': {
    color: 'grey.500', // Darker grey when active
  },
}

export default function Header({ darkmode, handleThemeChange }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <Box display='flex' alignItems='center'>
          <Typography variant="h6" component={NavLink}
            to='/'
            sx={navStyle}
          >
            RE-STORE
          </Typography>

          <Switch checked={darkmode} onChange={handleThemeChange} />
        </Box>

        <List sx={{ display: 'flex', alignItems: 'center' }}>
          {midLinks.map(({ title, path }) => (
            <Button
              component={NavLink}
              to={path}
              key={path}
              sx={navStyle}>
              {title.toUpperCase()}
            </Button>
          ))}
        </List>

        <Box display='flex' alignItems='center'>
          <IconButton
            size="large"
            edge='end'
            color='inherit'
            sx={{
              ml: 2,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.2)', // Cart grows on hover
              },
            }}
          >
            <Badge badgeContent='4' color="secondary" sx={{
              '& .MuiBadge-badge': {
                animation: 'bounce 1.5s infinite', // Subtle bounce animation for the badge
                '@keyframes bounce': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-5px)' },
                },
              },
            }}>
              <ShoppingCart />
            </Badge>
          </IconButton>

          <List sx={{ display: 'flex' }}>
            {rightLinks.map(({ title, path }) => (
              <Button
                component={NavLink}
                to={path}
                key={path}
                sx={navStyle}>
                {title.toUpperCase()}
              </Button>
            ))}
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  )
}