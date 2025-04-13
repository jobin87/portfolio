import { Box, Grid } from "@mui/material"
import { ProfileLoading } from "../loading-page"
import MiddlePage from "../middle-page"
import { AboutMePage } from "../footer-page"
import { HireMe } from "../hire-me"

export const ProfileView=()=>{
    return(
        <Box>
            <Grid>
            <ProfileLoading/>
            <MiddlePage/>
            <AboutMePage/>
            <HireMe/>
            </Grid>


        </Box>

    )
}