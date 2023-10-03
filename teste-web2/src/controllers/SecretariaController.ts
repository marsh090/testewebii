import { Request, Response } from "express";
import SecretariaServices from "../services/SecretariaServices";

class SecretariaController {
  constructor() {}

  async listarSecretarias(req: Request, res: Response) {
    try {
      const secretarias = await SecretariaServices.listarSecretarias();
      res.status(200).json({ status: "ok", secretarias: secretarias });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async criarSecretaria(req: Request, res: Response) {
    try {
      const secretaria = await SecretariaServices.criarSecretaria(req.body);
      res.status(201).json({ status: "ok", secretaria: secretaria });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async atualizarSecretaria(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const secretaria = await SecretariaServices.atualizarSecretaria(id, req.body);
      res.status(200).json({ status: "ok", secretaria: secretaria });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async deletarSecretaria(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id); 
      const secretaria = await SecretariaServices.deletarSecretaria(id);
      res.status(200).json({ status: "ok", message: "Secretaria deletada", secretaria: secretaria });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async obterSecretaria(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const secretaria = await SecretariaServices.obterSecretaria(id);
      res.status(200).json({ status: "ok", secretaria: secretaria });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

}

export default new SecretariaController();
