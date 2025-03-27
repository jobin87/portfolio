import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  Link,
  Button,
} from "@mui/material";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // ✅ Ensure Swiper CSS is imported
import "swiper/css/pagination";
import { DashboardContent } from "src/layouts/dashboard";

// ✅ Image paths for projects (Ensure images exist in /public/images/ if using Next.js)
const hospitalImages = ["/images/s1.png", "/images/s2.png", "/images/s3.png"];
const portfolioImages = ["/images/is1.png", "/images/is2.png"];
const netflixImages = ["/images/n1.png", "/images/n2.png"];

const resume = "/resume/jobin_jose_resume(1).pdf";

const projects = [
  {
    title: "Hospital Management App",
    images: hospitalImages,
    description:
      "A fully functional hospital management system that simplifies hospital operations.",
    link: "https://hosman-beta.netlify.app",
  },
  {
    title: "Portfolio Website",
    images: portfolioImages,
    description:
      "A modern and interactive personal portfolio showcasing my skills and projects.",
  },
  {
    title: "Netflix Clone UI",
    images: netflixImages,
    description:
      "A Netflix UI design with basic user authentication for practice.",
  },
];

export default function MiddlePage() {
  // ✅ Debugging: Check if images exist
  console.log(
    "Project Images:",
    projects.map((p) => p.images)
  );

  return (
    <DashboardContent>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        sx={{ mb: 4 }}
      >
        My Projects
      </Typography>
      {/* ✅ Responsive Grid Layout */}
      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ px: { xs: 2, md: 5 } }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            component={m.div}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                overflow: "hidden",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "scale(1.05)" }, // Hover effect
              }}
            >
              {/* ✅ Render Swiper if project has multiple images */}
              {project.images && project.images.length > 1 ? (
                <Swiper
                  key={project.title} // ✅ Force Swiper to re-render when project changes
                  modules={[Pagination, Autoplay]}
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop
                  style={{ height: "200px", overflow: "hidden" }} // ✅ Explicit height to prevent Swiper from collapsing
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt={`Slide ${idx + 1}`}
                        sx={{
                          objectFit: "contain",
                          backgroundColor: "#f5f5f5",
                        }} // ✅ Prevents image clipping
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                // ✅ Show a single image if project has only one image
                project.images?.length === 1 && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.images[0]}
                    alt={project.title}
                    sx={{ objectFit: "contain", backgroundColor: "#f5f5f5" }}
                  />
                )
              )}

              {/* ✅ Card Content */}
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>

                {/* ✅ Project Link */}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="body2"
                    color="primary"
                    sx={{ display: "block", mt: 1 }}
                  >
                    View Project
                  </Link>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4 }}
        onClick={() => {
          const link = document.createElement("a");
          link.href = resume;
          link.download = "Jobin_Jose_Resume.pdf"; // Rename the downloaded file
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      >
        Download Resume
      </Button>
      L{" "}
    </DashboardContent>
  );
}
