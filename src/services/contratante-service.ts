import { Contratante } from "../models/contratante-model.js";

export class ContratanteService {
  public async createContratante(nomeCompleto: string): Promise<Contratante> {
    try {
      const contratante = await Contratante.create({ nomeCompleto });
      return contratante;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Unable to create contratante: ${error.message}`);
      } else {
        throw new Error("An unknow error ocurred.");
      }
    }
  }

  public async getAllContratantes(): Promise<Contratante[]> {
    try {
      return await Contratante.findAll();
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Unable to fetch contratantes: ${error.message}`);
      } else {
        throw new Error("An unknow error ocurred.");
      }
    }
  }
}
