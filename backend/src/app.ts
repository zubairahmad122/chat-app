import express from "express";
import authRoutes from "./route/authRoutes";
import userRoutes from "./route/userRoutes";
import chatRoutes from "./route/chatRoutes";
import messageRoutes from "./route/messageRoutes";

const app = express();

app.use(express.json()); // parse incoming JSON request  bodies and put the parsed data in req.body

app.get("/", (req, res) => {
  res.json({ status: "ok", message: "Server is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

export default app;
