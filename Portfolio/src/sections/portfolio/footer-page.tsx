import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { DashboardContent } from "src/layouts/dashboard";

export const AboutMePage = () => {
  const profileImage = "/images/jobin_jose.jpg";
  const theme = useTheme();
  const textColor = theme.palette.mode === "dark" ? "white" : "black";
  const bgColor =
    theme.palette.mode === "dark" ? theme.palette.background.paper : "white";
  return (
    <DashboardContent>
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
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ color: textColor, mx: 2 }}
        >
          About Me
        </Typography>
        <Divider sx={{ flexGrow: 1, bgcolor: textColor, height: "2px" }} />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: {
            xs: 0,
            lg: 10,
          },
          mt: 1,
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {/* Profile Image Card */}
        <Card
          sx={{
            boxShadow: 4,
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            maxWidth: "100%",
          }}
        >
          <Avatar
            src={profileImage}
            alt="Jobin Jose"
            sx={{
              width: { xs: 330, md: 200 },
              height: { xs: 400, md: 250 },
              borderRadius: "12px",
              objectFit: "cover",
              transition: "0.3s ease-in-out",
              boxShadow:
                "inset 10px 10px 20px rgba(0, 0, 0, 0.3), inset -10px -10px 20px rgba(255, 255, 255, 0.2)", // Concave effect
              transform: "perspective(800px) rotateX(10deg)", // Subtle 3D tilt
              "&:hover": {
                transform: "perspective(800px) rotateX(10deg) scale(1.05)", // Enhancing effect on hover
                boxShadow:
                  "inset 12px 12px 25px rgba(0, 0, 0, 0.4), inset -12px -12px 25px rgba(255, 255, 255, 0.25)", // Deeper concave on hover
              },
            }}
          />
        </Card>


        {/* Skills and Bio */}
      </Box>
      <Card
        sx={{
          p: 3,
          boxShadow: 4,
          flex: 1,
          maxWidth: "100%",
          borderRadius: 3,
          backgroundColor: bgColor,
          mt: 5,
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
          </strong>
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
         <Button variant="contained" color="primary" sx={{ ml: 3 }}>
            Hire Me
          </Button>
      </Card>

      {/* Closing Quote */}
      
    </DashboardContent>
  );
};
