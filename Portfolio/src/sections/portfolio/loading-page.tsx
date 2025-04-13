import { m } from "framer-motion";
import {  Box, Typography, Divider, useTheme } from "@mui/material";
import { DashboardContent } from "src/layouts/dashboard";
import { SiGithub, SiMongodb, SiNodedotjs, SiReact, SiGit, SiSwagger, SiGraphql, SiDocker, SiKubernetes, SiNextdotjs, SiMysql, SiOpenjdk, SiNetlify, SiRender, SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import AnimatedOneText from "src/components/animate/animate-one-text";


const scaleBounce = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const techIcons = {
  TypeScript: <SiTypescript size={40} color="#3178C6" />,
  React: <SiReact size={40} color="#61DAFB" />,
  "Node.js": <SiNodedotjs size={40} color="#83CD29" />,
  MongoDB: <SiMongodb size={40} color="#47A248" />,
  Git: <SiGit size={40} color="#F05032" />,
  GitHub: <SiGithub size={40} color="black" />,
  "Swagger API": <SiSwagger size={40} color="#85EA2D" />,
  Netlify: <SiNetlify size={40} color="#00C7B7" />,
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
  const fontGreenRed = theme.palette.mode === "dark" ? "white" : "black";

  return (
    <DashboardContent id="techstack"
      sx={{ minHeight: "80vh", color: textColor, overflowX: "hidden",pb:4 }}
    >
        <AnimatedOneText sx={{ textAlign: "center", fontWeight: "bold" }}>
          CRAFT INNOVATIVE
        </AnimatedOneText>

      <m.div initial="hidden" animate="visible" variants={scaleBounce}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mt: 1,
            fontSize: { xs: "1rem", md: "1.5rem" },
            color: fontGreenRed,
          }}
        >
          PERFORMANCE-DRIVEN WEBSITES AND WEB APPLICATIONS THAT STAND OUT
        </Typography>
      </m.div>

      {/* Intro Text */}
      {/* Tech Stack Section */}
      <Box  sx={{ textAlign: "center", mt: 6  }} >
        <Typography variant="h5" fontWeight="bold" >
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
          {Object.entries(techIcons).map(([tech, icon], index) => (
            <m.div key={tech} initial="hidden" animate="visible" variants={iconVariants} transition={{ delay: index * 0.1 }}>
              <Box sx={{ textAlign: "center" }}>
                {icon}
                <Typography>{tech}</Typography>
              </Box>
            </m.div>
          ))}
        </Box>
      </Box>

      {/* Learning Section */}
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
          {Object.entries(learningStack).map(([tech, icon], index) => (
            <m.div key={tech} initial="hidden" animate="visible" variants={iconVariants} transition={{ delay: index * 0.1 }}>
              <Box sx={{ textAlign: "center" }}>
                {icon}
                <Typography>{tech}</Typography>
              </Box>
            </m.div>
          ))}
        </Box>
      </Box>
    </DashboardContent>
  );
};
