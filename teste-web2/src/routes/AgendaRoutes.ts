import { Router } from "express";
import AgendaController from "../controllers/AgendaController";

const AgendaRouter = Router();

AgendaRouter.get("/listar", AgendaController.listarAgendas);
AgendaRouter.post("/criar", AgendaController.criarAgenda);
AgendaRouter.get("/:id", AgendaController.obterAgenda);
AgendaRouter.patch("/:id", AgendaController.atualizarAgenda);
AgendaRouter.delete("/:id", AgendaController.deletarAgenda);

export default AgendaRouter;
