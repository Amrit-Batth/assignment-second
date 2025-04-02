import express from "express";
import swaggerDocs from "./swagger.js";


const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());
// Load Swagger Docs
swaggerDocs(app);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`Swagger Docs available at http://localhost:${port}/api-docs`);
});
