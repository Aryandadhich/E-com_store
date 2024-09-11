import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header(){
    return (
         <AppBar position="static">
           <Toolbar>
            <Typography variant="h6">Re-store</Typography>
           </Toolbar>
         </AppBar>
    )
}