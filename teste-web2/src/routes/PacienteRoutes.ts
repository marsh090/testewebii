import { Router } from "express";
import PacienteController from "../controllers/PacienteController";

const PacienteRouter = Router();

PacienteRouter.get("/listar", PacienteController.listarPacientes);
PacienteRouter.post("/criar", PacienteController.criarPaciente);
PacienteRouter.get("/:id", PacienteController.obterPaciente);
PacienteRouter.patch("/:id", PacienteController.atualizarPaciente);
PacienteRouter.delete("/:id", PacienteController.deletarPaciente);

export default PacienteRouter;
