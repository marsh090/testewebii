import { Router } from "express";
import SecretariaController from "../controllers/SecretariaController";

const SecretariaRouter = Router();

SecretariaRouter.get("/listar", SecretariaController.listarSecretarias);
SecretariaRouter.post("/criar", SecretariaController.criarSecretaria);
SecretariaRouter.get("/:id", SecretariaController.obterSecretaria);
SecretariaRouter.patch("/:id", SecretariaController.atualizarSecretaria);
SecretariaRouter.delete("/:id", SecretariaController.deletarSecretaria);

export default SecretariaRouter;
