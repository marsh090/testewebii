import { Router } from "express";
import SecretariaController from "../controllers/SecretariaController";

const SecretariaRouter = Router();

SecretariaRouter.get("/secretarias", SecretariaController.listarSecretarias);
SecretariaRouter.post("/secretaria", SecretariaController.criarSecretaria);
SecretariaRouter.get("/secretaria/:id", SecretariaController.obterSecretaria);
SecretariaRouter.patch("/secretaria/:id", SecretariaController.atualizarSecretaria);
SecretariaRouter.delete("/secretaria/:id", SecretariaController.deletarSecretaria);

export default SecretariaRouter;
