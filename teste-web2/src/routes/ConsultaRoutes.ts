import { Router } from "express";
import ConsultaController from "../controllers/ConsultaController";

const ConsultaRouter = Router();

ConsultaRouter.get("/consultas", ConsultaController.listarConsultas);
ConsultaRouter.post("/consulta", ConsultaController.criarConsulta);
ConsultaRouter.get("/consulta/:id", ConsultaController.obterConsulta);
ConsultaRouter.patch("/consulta/:id", ConsultaController.atualizarConsulta);
ConsultaRouter.delete("/consulta/:id", ConsultaController.deletarConsulta);

export default ConsultaRouter;
