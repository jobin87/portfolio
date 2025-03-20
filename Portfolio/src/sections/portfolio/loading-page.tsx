import { Avatar, Box, Card, Grid, Typography } from "@mui/material";
import { AnimatedCard } from "src/components/animate/animate-card";
import { AnimatedText } from "src/components/animate/animate-textvisible";
import { DashboardContent } from "src/layouts/dashboard";

export const ProfileLoading = () => {
  const profileImage = "/images/jobin_jose.jpg"; // Path to your profile image

  return (
    <DashboardContent>
      {/* Profile Section with Responsive Layout */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Column on XS, Row on MD+
          alignItems: "center",
          gap: 2, // Spacing between avatar and text
          mt:4
        }}
      >
        <Avatar 
          src={profileImage} 
          alt="Jobin Jose"
          variant="square" // Makes it a square avatar
          sx={{ width: {
            xs: 360, lg:120
          }, height:{
            xs: 430,lg: 150
          }, borderRadius: 2 }} // Slightly rounded corners
        />

        <AnimatedCard 
          bgcolor="transparent" 
          duration={0.7} 
          delay={0.5} 
          sx={{ mt: { xs: 2, md: 0 }, textAlign: "center" }} // Moves text down on XS
        >
         <Box sx={{display:'flex', flexDirection:"column"}}>
         <Typography 
            variant="h4" 
            fontWeight="bold" 
            color="black"
          >
            Hi, I am Jobin Jose
          </Typography>
         </Box>
        </AnimatedCard>
        <AnimatedCard 
          bgcolor="transparent" 
          duration={0.7} 
          delay={0.5} 
          sx={{ mt: { xs: 2, md: 0 }, textAlign: "center" }} // Moves text down on XS
        >
         <Box sx={{display:'flex', flexDirection:"column"}}>
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            color="black"
          >
            Web Full Stack Developer
          </Typography> 
         </Box>
        </AnimatedCard>
      </Box>

      {/* Introductory Text */}
      <AnimatedText>
        <Typography variant="h2" color="black" sx={{ mt: 3 }}>
          Passionate about crafting seamless digital experiences. Explore my work below!
        </Typography>
      </AnimatedText>

      {/* Skill Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 3,
          justifyContent: "center",
          alignItems: "center",
          mt: 6,
        }}
      >
        {["Web Development", "UI/UX Design", "Project Management"].map(
          (title, index) => (
            <Card
              key={index}
              sx={{
                flex: 1,
                width: { xs: "100%", md: "auto" },
                minWidth: 150,
                height: 150,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {title}
              </Typography>
            </Card>
          )
        )}
      </Box>

      {/* Closing Quote */}
      <Typography variant="h4" color="black" sx={{ mt: 5 }}>
        Ideas without action are the greatest gifts left unopened.
      </Typography>
    </DashboardContent>
  );
};
