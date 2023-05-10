const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HSmEDJT4OPZngFuhlxiUemPlZseB4dmnZDxdEjbBa1odMotAcwSljvX4StUv367Ld0T0m5zvGRLjB1xwAyG28dQ00AYmAcOEz')

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));

// - API routes

// - Listen command

