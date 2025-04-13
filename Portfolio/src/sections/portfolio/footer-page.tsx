import {
  Box,
  Card,
  Divider,
  Typography,
  useTheme,

} from "@mui/material";


import { DashboardContent } from "src/layouts/dashboard";

export const AboutMePage = () => {
  const profileImage = "/images/jobin_jose.png";
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "white" : "black";
  const bgColor =
    theme.palette.mode === "dark" ? theme.palette.background.paper : "white";


  return (
    <DashboardContent id="about" sx={{pb:0}}>
      {/* About Me Section */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          my: 3,
          mt: 2,
        }}
      >
        <Divider sx={{ flexGrow: 1, bgcolor: textColor, height: "2px" }} />
        {/* ✅ Updated About Section */}
        <Box
          sx={{
            maxWidth: "500px", // ✅ Restrict width to prevent excess spacing
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" }, // ✅ Align text properly
            mr: { md: 2 }, // ✅ Adjust spacing on desktop
            
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", md: "3rem" },
            }}
          >
            About Me
          </Typography>
        </Box>
        <Divider sx={{ flexGrow: 1, bgcolor: textColor, height: "2px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 1, lg: 2 }, // ✅ Reduced gap
          mt: 1,
          width: "100%",
          maxWidth: "1200px",
          px: { xs: 2, md: 4 },
          flexWrap: "nowrap", // ✅ Prevents wrapping to keep them together
        }}
      >
        {/* ✅ Fixed-Size Profile Image */}
        <Box
          sx={{
            width: { xs: 170, md: 140 }, // ✅ Slightly increased for larger screens
            height: { xs: 170, md: 150 },
            borderRadius: "10%",
            overflow: "hidden",
            backgroundImage: `url(${profileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center top", // ✅ Keeps head positioning stable
            }}
        />
      </Box>

      <Card
        sx={{
          p: 3,
          boxShadow: 4,
          flex: 1,
          maxWidth: "100%",
          borderRadius: 3,
          backgroundColor: bgColor,
          mt: 2,
          
        }}
      >
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          I’m Jobin Jose
        </Typography>
        <Typography variant="body1" paragraph>
          A passionate MERN stack developer with a strong focus on building
          modern, high-performance, and user-friendly web applications.
        </Typography>
        <Typography variant="body1" paragraph>
          My expertise lies in creating{" "}
          <strong>responsive, scalable, and intuitive</strong> digital solutions
          that elevate user experiences. With a deep understanding of{" "}
          <strong>MongoDB, Express.js, React, and Node.js</strong>, I specialize
          in crafting seamless front-end experiences and robust back-end
          systems.
        </Typography>
        <Typography variant="body1" paragraph>
          Additionally, I am expanding my skill set with{" "}
          <strong>
            React Native, Next.js, SQL, and Data Structures & Algorithms (DSA)
            using Java
          </strong>{" "}
          to develop optimized and scalable applications.
        </Typography>
        <Typography variant="body1" paragraph>
          My goal is to <strong>transform ideas into reality</strong> through{" "}
          <strong>clean, maintainable code</strong> and innovative solutions.
        </Typography>
        <Typography variant="h5" fontWeight="bold" mt={3}>
          Let’s collaborate and build something extraordinary together!
        </Typography>

        <Divider
          sx={{
            my: 3,
            bgcolor: theme.palette.mode === "dark" ? "#444" : "#ddd",
          }}
        />

        {/* ✅ Hire Me Button - Opens Dialog */}
        
      </Card>

      {/* ✅ Hire Me Dialog */}
      
    </DashboardContent>
  );
};
