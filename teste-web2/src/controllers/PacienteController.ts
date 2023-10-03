import { Request, Response } from "express";
import PacienteServices from "../services/PacienteServices";

class PacienteController {
  constructor() {}

  async listarPacientes(req: Request, res: Response) {
    try {
      const pacientes = await PacienteServices.listarPacientes();
      res.status(200).json({ status: "ok", pacientes: pacientes });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async criarPaciente(req: Request, res: Response) {
    try {
      const paciente = await PacienteServices.criarPaciente(req.body);
      res.status(201).json({ status: "ok", paciente: paciente });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async atualizarPaciente(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const paciente = await PacienteServices.atualizarPaciente(id, req.body);
      res.status(200).json({ status: "ok", paciente: paciente });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }
  
   async deletarPaciente(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const paciente = await PacienteServices.deletarPaciente(id);
      res.status(200).json({ status: "ok", message: "Paciente deletado", paciente: paciente });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

  async obterPaciente(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const paciente = await PacienteServices.obterPaciente(id);
      res.status(200).json({ status: "ok", paciente: paciente });
    } catch (error) {
      res.status(500).json({ status: "error", message: (error as any).message });
    }
  }

}

export default new PacienteController();
