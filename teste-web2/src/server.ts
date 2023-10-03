import express from "express";
import * as dotenv from "dotenv";

import PacienteRouter from "./routes/PacienteRoutes";
import SecretariaRouter from "./routes/SecretariaRoutes";
import ConsultaRouter from "./routes/ConsultaRoutes";
import AgendaRouter from "./routes/AgendaRoutes";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/api/paciente", PacienteRouter);
app.use("/api/secretaria", SecretariaRouter);
app.use("/api/consulta", ConsultaRouter);
app.use("/api/agenda", AgendaRouter);

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
} else {
  console.log("Fail to load environment");
}

