import express from "express";
import { authRouter , blogRouter} from "./routes/index.js";
import { dbConnect } from "./config/index.js";
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
dbConnect()
app.use("/auth", authRouter);
app.use("/blog", blogRouter);

app.use((err, req, res, next) => {
	console.error(err.message);
	res.status(500).send("Something broken!");
});

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});