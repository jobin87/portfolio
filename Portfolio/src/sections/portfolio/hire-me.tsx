import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";
import PhoneIcon from "@mui/icons-material/Phone";
import { DashboardContent } from "src/layouts/dashboard";

const resume = "/resume/jobin_jose_resume(1).pdf";

export const HireMe = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
    if (location.hash === "#connect") {
      setOpenDialog(true);
    }
  }, [location]);

  useEffect(() => {
    if (openDialog) {
      setTimeout(() => setFadeIn(true), 50);
    } else {
      setFadeIn(false);
    }
  }, [openDialog]);

  return (
    <DashboardContent id="connect" sx={{ pb: 3, mb: 0 }}>
      {/* Hire Me Section */}
      <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center", mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          sx={{ width: "150px", mx: 1 }}
          onClick={() => {
            const link = document.createElement("a");
            link.href = resume;
            link.download = "Jobin_Jose_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
        >
          Download Resume
        </Button>
        <Button variant="contained" color="primary" onClick={() => setOpenDialog(true)}>
          Hire Me
        </Button>
      </Box>

      {/* Connect With Me Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        fullWidth
        maxWidth="xs"
        sx={{
          backdropFilter: fadeIn ? "blur(10px)" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          transition: "backdrop-filter 0.3s ease-in-out, background 0.3s ease-in-out",
        }}
        PaperProps={{
          sx: {
            width: "90%",
            maxWidth: "300px",
            background: fadeIn ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0)",
            backdropFilter: fadeIn ? "blur(20px)" : "none",
            borderRadius: "15px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.2)",
            transition: "background 0.3s ease-in-out, backdrop-filter 0.3s ease-in-out",
          },
        }}
      >
        <DialogTitle>
          Connect With Me
          <IconButton
            aria-label="close"
            onClick={() => setOpenDialog(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 3,
            opacity: fadeIn ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
            mt: 0, // ✅ Remove extra spacing
          }}
        >
          <Button
            startIcon={<SiGmail size={24} color="red" />}
            variant="contained"
            color="secondary"
            href="mailto:jose.jobiin@gmail.com"
            target="_blank"
            sx={{ justifyContent: "flex-start" }}
          >
            Gmail
          </Button>
          <Button
            startIcon={<SiLinkedin size={24} color="#0A66C2" />}
            variant="contained"
            color="primary"
            href="https://www.linkedin.com/in/jobin-jose-1aa5b8316"
            target="_blank"
            sx={{ justifyContent: "flex-start" }}
          >
            LinkedIn
          </Button>
          <Button
            startIcon={<SiGithub size={24} color="black" />}
            variant="contained"
            color="inherit"
            href="https://github.com/jobin87"
            target="_blank"
            sx={{ justifyContent: "flex-start" }}
          >
            GitHub
          </Button>
          <Button
            startIcon={<PhoneIcon />}
            variant="contained"
            color="success"
            href="tel:7034760724"
            sx={{ justifyContent: "flex-start" }}
          >
            Phone
          </Button>
        </DialogContent>
      </Dialog>
    </DashboardContent>
  );
};
