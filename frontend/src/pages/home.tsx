import React, { useState } from "react";
import { Box, Typography, Card, CardContent, Button, Modal } from "@mui/material";
import { Rnd } from "react-rnd";
import "./home.css";
import AppSidebar from "../components/app-sidebar/sidebar";

interface Widget {
  id: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

const Home: React.FC = () => {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [open, setOpen] = useState(false);

  const handleAddWidget = () => {
    setWidgets([
      ...widgets,
      { id: Date.now(), x: 50, y: 50, width: 300, height: 200 },
    ]);
    setOpen(false);
  };

  return (
    <Box className="home-layout">
      <AppSidebar />
      <Box className="home-container">
        {widgets.length === 0 ? (
          <Box className="empty-state" onClick={() => setOpen(true)}>
            <Typography variant="h6" className="empty-text">
              + Adicionar Exibição
            </Typography>
          </Box>
        ) : (
          widgets.map((widget) => (
            <Rnd
              key={widget.id}
              default={{
                x: widget.x,
                y: widget.y,
                width: widget.width,
                height: widget.height,
              }}
              bounds="parent"
              className="widget"
            >
              <Card className="widget-card">
                <CardContent>
                  <Typography variant="body1">Novo Widget</Typography>
                </CardContent>
              </Card>
            </Rnd>
          ))
        )}

        {/* Modal */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box className="add-widget-modal">
            <Typography variant="h6" gutterBottom>
              Adicionar Exibição
            </Typography>
            <Button variant="contained" color="primary" onClick={handleAddWidget}>
              Confirmar
            </Button>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default Home;
