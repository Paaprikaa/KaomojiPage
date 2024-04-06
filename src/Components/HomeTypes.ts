export enum SectionType {
  Happy = "Happy",
  Sad = "Sad",
  Angry = "Angry",
  Scared = "Scared",
  Tired = "Tired",
}

type ValueOf<T> = T[keyof T];
export type ValueSectionType = ValueOf<typeof SectionType>;

export interface IShowSection {
  section: SectionType;
}
