import { List,AppBar, ListItem, Switch, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
  {title: 'catalog', path: '/catalog'},
  {title: 'about', path: '/about'},
  {title: 'contact', path: '/contact'},
]

const rightLinks = [
  {title: 'login', path: '/login'},
  {title: 'register', path: '/register'},
]

interface Props{
  darkmode: boolean;
  handleThemeChange: () => void;
}

export default function Header({darkmode, handleThemeChange} : Props){
    return (
         <AppBar position="static" sx={{mb: 4}}>
           <Toolbar>
            <Typography variant="h6">
              RE-STORE
            </Typography>
            <Switch  checked={darkmode} onChange={handleThemeChange}/>
            <List sx={{display: 'flex', alignItems:'center'}}>
                {midLinks.map(({title, path}) =>(
                  <Button
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{color: 'inherit',typography: 'h6',textDecoration: 'none','&:hover':{textDecoration: 'underline'}}}>
                 {title.toUpperCase()}
               </Button>
               ))}
            </List>
           </Toolbar>
         </AppBar>
    )
}