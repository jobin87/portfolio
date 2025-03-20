import { Box, Grid } from "@mui/material"
import { ProfileLoading } from "../loading-page"
import MiddlePage from "../middle-page"

export const ProfileView=()=>{
    return(
        <Box>
            <Grid xs={6}>
            <ProfileLoading/>
            </Grid>
            <MiddlePage/>

        </Box>

    )
}