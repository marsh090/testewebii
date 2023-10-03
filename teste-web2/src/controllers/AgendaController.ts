import { Request, Response } from "express";
import AgendaServices from "../services/AgendaServices";

class AgendaController {
  constructor() {}

  async listarAgendas(req: Request, res: Response) {
    try {
      const agendas = await AgendaServices.listarAgendas();
      res.status(200).json({ status: "ok", agendas: agendas });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async criarAgenda(req: Request, res: Response) {
    try {
      const agenda = await AgendaServices.criarAgenda(req.body);
      res.status(201).json({ status: "ok", agenda: agenda });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async atualizarAgenda(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const agenda = await AgendaServices.atualizarAgenda(id, req.body);
      res.status(200).json({ status: "ok", agenda: agenda });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async deletarAgenda(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const agenda = await AgendaServices.deletarAgenda(id);
      res.status(200).json({ status: "ok", message: "Agenda deletada", agenda: agenda });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async obterAgenda(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const agenda = await AgendaServices.obterAgenda(id);
      res.status(200).json({ status: "ok", agenda: agenda });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

}

export default new AgendaController();
