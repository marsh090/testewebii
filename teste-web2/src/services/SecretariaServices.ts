import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class SecretariaServices {
  constructor() {}

  async listarSecretarias() {
    try {
      const secretarias = await prisma.secretaria.findMany();
      return secretarias;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao listar secretarias");
    }
  }

  async criarSecretaria(data: any) {
    try {
      const secretaria = await prisma.secretaria.create({
        data: {
          nome: data.nome,
          RG: data.RG
        }
      });
      return secretaria;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao criar secretaria");
    }
  }

  async atualizarSecretaria(id: number, data: any) {
    try {
      const secretaria = await prisma.secretaria.update({
        where: { id: id },
        data: data
      });
      return secretaria;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao atualizar secretaria");
    }
  }

  async deletarSecretaria(id: number) {
    try {
      const secretaria = await prisma.secretaria.delete({
        where: { id: id }
      });
      return secretaria;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao deletar secretaria");
    }
  }

  async obterSecretaria(id: number) {
    try {
      const secretaria = await prisma.secretaria.findUnique({
        where: { id: id }
      });
      return secretaria;
    } catch (error) {
      console.log(error);
      throw new Error("Erro ao obter secretaria");
    }
  }

}

export default new SecretariaServices();
