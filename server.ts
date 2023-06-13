import * as express from "express";
import * as path from "path";

const app = express();

const publicPath = path.join(__dirname, "dist");
app.use(express.static(publicPath));

app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
