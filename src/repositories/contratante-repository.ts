import {
  Contratante,
  ContratanteCreationAttributes,
} from "../models/contratante-model";

export class ContratanteRepository {
  public async create(
    data: ContratanteCreationAttributes
  ): Promise<Contratante> {
    try {
      const contratante = await Contratante.create(data);
      return contratante;
    } catch (error) {
      throw new Error(
        `Unable to create contratante: ${(error as Error).message}`
      );
    }
  }
}
