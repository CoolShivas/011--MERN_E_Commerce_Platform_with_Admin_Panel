import express from "express";

const server = express();

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running at Port :-) ${PORT}`);
});
