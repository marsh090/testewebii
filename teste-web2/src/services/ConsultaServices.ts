import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ConsultaServices {
  constructor() {}

  async listarConsultas() {
    try {
      const consultas = await prisma.consulta.findMany();
      return consultas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar consultas");
    }
  }

  async criarConsulta(data: any) {
    try {
      const consulta = await prisma.consulta.create({
        data: {
          data: data.data,
          nomePcnte: data.nomePcnte,
          nomeDents: data.nomeDents,
          pacienteId: data.pacienteId,
          secretariaId: data.secretariaId
        }
      });
      return consulta;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar consulta");
    }
}



  async atualizarConsulta(id: number, data: any) {
    try {
      const consulta = await prisma.consulta.update({
        where: { id: id },
        data: data
      });
      return consulta;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao atualizar consulta");
    }
  }

  async deletarConsulta(id: number) {
    try {
      const consulta = await prisma.consulta.delete({
        where: { id: id }
      });
      return consulta;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao deletar consulta");
    }
  }

  async obterConsulta(id: number) {
    try {
      const consulta = await prisma.consulta.findUnique({
        where: { id: id }
      });
      return consulta;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao obter consulta");
    }
  }

}

export default new ConsultaServices();
