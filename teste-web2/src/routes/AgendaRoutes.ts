import { Router } from "express";
import AgendaController from "../controllers/AgendaController";

const AgendaRouter = Router();

AgendaRouter.get("/agendas", AgendaController.listarAgendas);
AgendaRouter.post("/agenda", AgendaController.criarAgenda);
AgendaRouter.get("/agenda/:id", AgendaController.obterAgenda);
AgendaRouter.patch("/agenda/:id", AgendaController.atualizarAgenda);
AgendaRouter.delete("/agenda/:id", AgendaController.deletarAgenda);

export default AgendaRouter;
