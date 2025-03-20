import { Card, CardMedia, CardContent, Typography, Grid, Link } from "@mui/material";
import { m } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules"; // Removed Navigation
// import "swiper/css";
// import "swiper/css/pagination";
import { DashboardContent } from "src/layouts/dashboard";

// Image paths for projects
const hospitalImages = [
  "/images/s1.png",
  "/images/s2.png",
  "/images/s3.png",
];

const portfolioImages = [
  "/images/is1.png",
  "/images/is2.png",
];

const netflixImages = [
  "/images/n1.png",
  "/images/n2.png",
];

// Sample project data
const projects = [
  {
    title: "Hospital Management App",
    images: hospitalImages, 
    description: "A fully functional hospital management system that simplifies hospital operations.",
    link: "https://hosman-beta.netlify.app",
  },
  {
    title: "Portfolio Website",
    images: portfolioImages, 
    description: "A modern and interactive personal portfolio showcasing my skills and projects.",
  },
  {
    title: "Netflix Clone UI",
    images: netflixImages,
    description: "A Netflix UI design with basic user authentication for practice.",
  },
];

export default function MiddlePage() {
  return (
    <DashboardContent>
      <Typography variant="h3" fontWeight="bold" textAlign="center" sx={{ mb: 4 }}>
        My Projects
      </Typography>

      {/* Responsive Grid Layout */}
      <Grid container spacing={4} justifyContent="center" sx={{ px: { xs: 2, md: 5 } }}>
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
              {/* Conditionally render Swiper if project has multiple images */}
              {project.images && project.images.length > 1 ? (
                <Swiper
                  modules={[Pagination, Autoplay]} // Removed Navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop
                  style={{ height: "200px" }}
                >
                  {project.images.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt={`Slide ${idx + 1}`}
                        sx={{ objectFit: "cover" }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                // Show a single image if project has only one image
                project.images && project.images.length === 1 && (
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.images[0]}
                    alt={project.title}
                    sx={{ objectFit: "cover" }}
                  />
                )
              )}

              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>

                {/* Project Link Below Description */}
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
    </DashboardContent>
  );
}
