import { IPlaceDTO } from "./IPlaceDTO";

export interface ICategoryDTO {
  id: number;
  name: string;
  places: IPlaceDTO[];
};
