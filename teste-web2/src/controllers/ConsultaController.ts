import { Request, Response } from "express";
import ConsultaServices from "../services/ConsultaServices";

class ConsultaController {
  constructor() {}

  async listarConsultas(req: Request, res: Response) {
    try {
      const consultas = await ConsultaServices.listarConsultas();
      res.status(200).json({ status: "ok", consultas: consultas });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async criarConsulta(req: Request, res: Response) {
    try {
      const consulta = await ConsultaServices.criarConsulta(req.body);
      res.status(201).json({ status: "ok", consulta: consulta });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async atualizarConsulta(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const consulta = await ConsultaServices.atualizarConsulta(id, req.body);
      res.status(200).json({ status: "ok", consulta: consulta });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async deletarConsulta(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const consulta = await ConsultaServices.deletarConsulta(id);
      res.status(200).json({ status: "ok", message: "Consulta deletada", consulta: consulta });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async obterConsulta(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const consulta = await ConsultaServices.obterConsulta(id);
      res.status(200).json({ status: "ok", consulta: consulta });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

}

export default new ConsultaController();
