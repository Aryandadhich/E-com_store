import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingComponent() {
    return(
        <Backdrop open={true} invisible={true}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100vh'>
                <CircularProgress size={100} color='secondary'/>
                <Typography variant='h4' sx={{justifyContent: 'center', position: 'fixed'}}>
                </Typography>
            </Box>
        </Backdrop>
    )
}