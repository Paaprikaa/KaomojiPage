export enum SectionType {
  Happy = "Happy",
  Sad = "Sad",
  Angry = "Angry",
  Scared = "Scared",
  Tired = "Tired",
}

export enum KaomojiLibraryType {
  Happy = "HappyKaomoji",
  Sad = "SadKaomoji",
  Angry = "AngryKaomoji",
  Scared = "ScaredKaomoji",
  Tired = "TiredKaomoji",
}

type ValueOf<T> = T[keyof T];
export type ValueSectionType = ValueOf<typeof SectionType>;

export interface IShowSection {
  section: SectionType;
}
