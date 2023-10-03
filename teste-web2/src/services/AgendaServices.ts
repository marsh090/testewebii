import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AgendaServices {
  constructor() {}

  async listarAgendas() {
    try {
      const agendas = await prisma.agenda.findMany();
      return agendas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar agendas");
    }
  }

  async criarAgenda(data: any) {
    try {
      const agenda = await prisma.agenda.create({
        data: {
          data: data.data,
          nomePcnte: data.nomePcnte
        }
      });
      return agenda;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar agenda");
    }
  }

  async atualizarAgenda(id: number, data: any) {
    try {
      const agenda = await prisma.agenda.update({
        where: { id: id },
        data: data
      });
      return agenda;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao atualizar agenda");
    }
  }

  async deletarAgenda(id: number) {
    try {
      const agenda = await prisma.agenda.delete({
        where: { id: id }
      });
      return agenda;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao deletar agenda");
    }
  }
  async obterAgenda(id: number) {
    try {
      const agenda = await prisma.agenda.findUnique({
        where: { id: id }
      });
      return agenda;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao obter agenda");
    }
  }

}

export default new AgendaServices();
