import { Box, Grid } from "@mui/material"
import { ProfileLoading } from "../loading-page"
import MiddlePage from "../middle-page"
import { AboutMePage } from "../footer-page"

export const ProfileView=()=>{
    return(
        <Box>
            <Grid xs={6}>
            <ProfileLoading/>
            <MiddlePage/>
            <AboutMePage/>
            </Grid>


        </Box>

    )
}