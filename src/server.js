const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "..", "dist")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "views", "no_hash.html"));
});

app.get("/buildhash", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "build_hash.html"));
});

app.get("/chunkhash", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "chunk_hash.html"));
});

app.get("/vendor", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "vendor.html"));
});

app.get("/vendorbetter", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "vendor_better.html"));
});

app.get("/vendorevenbetter", (req, res) => {
  res.sendFile(
    path.resolve(__dirname, "..", "dist", "vendor_even_better.html")
  );
});

app.get("/vendorbest", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "vendor_best.html"));
});

app.listen(3000);
