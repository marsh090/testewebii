import { Router } from "express";
import PacienteController from "../controllers/PacienteController";

const PacienteRouter = Router();

PacienteRouter.get("/pacientes", PacienteController.listarPacientes);
PacienteRouter.post("/paciente", PacienteController.criarPaciente);
PacienteRouter.get("/paciente/:id", PacienteController.obterPaciente);
PacienteRouter.patch("/paciente/:id", PacienteController.atualizarPaciente);
PacienteRouter.delete("/paciente/:id", PacienteController.deletarPaciente);

export default PacienteRouter;
