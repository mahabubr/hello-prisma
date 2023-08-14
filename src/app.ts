import express, { Application } from "express";
import cors from "cors";
import { UserRoutes } from "./module/user/user.route";
import { CategoryRoutes } from "./module/category/category.route";
import { PostRouter } from "./module/post/post.route";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", UserRoutes);
app.use("/api/v1/category", CategoryRoutes);
app.use("/api/v1/post", PostRouter);

export default app;
