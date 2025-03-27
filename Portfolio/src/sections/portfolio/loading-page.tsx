import {
  Avatar,
  Box,
  Card,
  Typography,
  Button,
  Divider,
  useTheme,
} from "@mui/material";
import { DashboardContent } from "src/layouts/dashboard";
import JavascriptIcon from "@mui/icons-material/Javascript";
import HtmlIcon from "@mui/icons-material/Html";
import CssIcon from "@mui/icons-material/Css";
import { SiGithub } from "react-icons/si";
import {
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiGit,
  SiSwagger,
  SiGraphql,
  SiDocker,
  SiKubernetes,
  SiNextdotjs,
  SiMysql,
  SiOpenjdk,
  SiNetlify,
  SiRender,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const techIcons = {
  HTML: <HtmlIcon fontSize="large" color="primary" />,
  CSS: <CssIcon fontSize="large" color="primary" />,
  JavaScript: <JavascriptIcon fontSize="large" sx={{ color: "#F7DF1E" }} />,
  TypeScript:<SiTypescript size={40} color="#3178C6" />,
  React: <SiReact size={40} color="#61DAFB" />,
  "Node.js": <SiNodedotjs size={40} color="#83CD29" />,
  MongoDB: <SiMongodb size={40} color="#47A248" />,
  Git: <SiGit size={40} color="#F05032" />,
  github:<SiGithub size={40} color="black" />,
  "Swagger API": <SiSwagger size={40} color="#85EA2D" />,
  Netlify: <SiNetlify size={40} color="#00C7B7" />,  // Netlify teal color
  Render: <SiRender size={40} color="#46E3B7" />,

  
};

const learningStack = {
  "React Native": <FaReact size={40} color="#61DAFB" />,
  "Next.js": <SiNextdotjs size={40} color="black" />,
  SQL: <SiMysql size={40} color="#00758F" />,
  "DSA (Java)": <SiOpenjdk size={40} color="#007396" />,
  GraphQL: <SiGraphql size={40} color="#E10098" />,
  Docker: <SiDocker size={40} color="#2496ED" />,
  Kubernetes: <SiKubernetes size={40} color="#326CE5" />,
};

export const ProfileLoading = () => {
  const theme = useTheme();

  const textColor = theme.palette.mode === "dark" ? "white" : "black";
  const bgColor = theme.palette.mode === "dark" ? theme.palette.background.paper : "white"; 
  const fontGreenRed = theme.palette.mode === "dark" ? "green" : "red";

  return (
    <DashboardContent
      sx={{
        minHeight: "100vh",
        color: textColor,
        overflowX: "hidden",
      }}
    >
      {/* Animated Header */}
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: "bold",
        }}
      >
        CRAFT INNOVATIVE
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          mt: 1,
          fontSize: { xs: "1rem", md: "1.5rem" },
          color: fontGreenRed,
        }}
      >
        PERFORMANCE-DRIVEN WEBSITES AND WEB APPLICATIONS THAT STAND OUT
      </Typography>

      {/* Intro Text */}
      <Typography
        textAlign="center"
        sx={{
          maxWidth: "90%",
          mx: "auto",
          fontSize: { xs: "0.9rem", md: "1.1rem" },
        }}
      >
        Passionate about crafting dynamic websites using HTML, CSS, JavaScript,
        MERN, and TypeScript. Also experienced in backend development with
        MongoDB, Express.js, and Node.js.
      </Typography>

      {/* Hire Me Button */}
      {/* <Box textAlign="center" sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ px: 4, py: 1.5, borderRadius: 2 }}
        >
          Hire Me
        </Button>
      </Box> */}

      {/* Tech Stack Section */}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h5" fontWeight="bold">
          Tech Stack
        </Typography>
        <Divider
          sx={{
            width: "60px",
            height: "2px",
            mx: "auto",
            mt: 1,
            bgcolor: textColor,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 3,
            flexWrap: "wrap",
          }}
        >
          {Object.entries(techIcons).map(([tech, icon]) => (
            <Box key={tech} sx={{ textAlign: "center" }}>
              {icon}
              <Typography>{tech}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h5" fontWeight="bold">
          Currently Learning
        </Typography>
        <Divider
          sx={{
            width: "60px",
            height: "2px",
            mx: "auto",
            mt: 1,
            bgcolor: textColor,
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            mt: 3,
            flexWrap: "wrap",
          }}
        >
          {Object.entries(learningStack).map(([tech, icon]) => (
            <Box key={tech} sx={{ textAlign: "center" }}>
              {icon}
              <Typography>{tech}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </DashboardContent>
  );
};
