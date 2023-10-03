import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PacienteServices {
  constructor() {}

  async listarPacientes() {
    try {
      const pacientes = await prisma.paciente.findMany();
      return pacientes;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar pacientes");
    }
  }

  async criarPaciente(data: any) {
    try {
      const paciente = await prisma.paciente.create({
        data: {
          nomePcnte: data.nomePcnte,
          senha: data.senha,
          usuario: data.usuario
        }
      });
      return paciente;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar paciente");
    }
  }

  async atualizarPaciente(id: number, data: any) {
    try {
      const paciente = await prisma.paciente.update({
        where: { id: id },
        data: data
      });
      return paciente;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao atualizar paciente");
    }
  }

  async deletarPaciente(id: number) {
    try {
      const paciente = await prisma.paciente.delete({
        where: { id: id }
      });
      return paciente;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao deletar paciente");
    }
  }

  async obterPaciente(id: number) {
    try {
      const paciente = await prisma.paciente.findUnique({
        where: { id: id }
      });
      return paciente;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao obter paciente");
    }
  }

}

export default new PacienteServices();
