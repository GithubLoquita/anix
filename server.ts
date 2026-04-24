import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // In-memory leads storage (for the "Inquiry Dashboard")
  const leads: any[] = [];

  // API Route: Submit Lead
  app.post("/api/leads", (req, res) => {
    const { name, email, message, service } = req.body;
    if (!name || !email) {
      return res.status(400).json({ error: "Missing required fields" });
    }
    const newLead = {
      id: Date.now().toString(),
      name,
      email,
      message,
      service,
      status: "new",
      createdAt: new Date().toISOString(),
    };
    leads.push(newLead);
    res.status(201).json(newLead);
  });

  // API Route: Get Leads (Admin/Dashboard)
  app.get("/api/leads", (req, res) => {
    res.json(leads);
  });

  // API Route: Update Lead Status
  app.patch("/api/leads/:id", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const lead = leads.find((l) => l.id === id);
    if (lead) {
      lead.status = status;
      res.json(lead);
    } else {
      res.status(404).json({ error: "Lead not found" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
