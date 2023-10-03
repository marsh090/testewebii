import { Router } from "express";
import ConsultaController from "../controllers/ConsultaController";

const ConsultaRouter = Router();

ConsultaRouter.get("/listar", ConsultaController.listarConsultas);
ConsultaRouter.post("/criar", ConsultaController.criarConsulta);
ConsultaRouter.get("/:id", ConsultaController.obterConsulta);
ConsultaRouter.patch("/:id", ConsultaController.atualizarConsulta);
ConsultaRouter.delete("/:id", ConsultaController.deletarConsulta);

export default ConsultaRouter;
