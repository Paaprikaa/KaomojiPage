import {
  AngryKaomoji,
  HappyKaomoji,
  SadKaomoji,
  ScaredKaomoji,
  TiredKaomoji,
} from "../../KaomojiLibrary/KaomojiLibrary";
import { IShowSection, KaomojiLibraryType, SectionType } from "../../IKaomoji";
import { KaomojiIndividual, ShowedSection } from "../../KaomojiStyle";

export const ShowSection = ({ section }: IShowSection) => {
  const SectionSelectedKaomoji: Array<string> =
    section === SectionType.Happy
      ? HappyKaomoji
      : section === SectionType.Sad
      ? SadKaomoji
      : section === SectionType.Angry
      ? AngryKaomoji
      : section === SectionType.Scared
      ? ScaredKaomoji
      : TiredKaomoji;
  return (
    <ShowedSection>
      {SectionSelectedKaomoji.map((kaomoji, index) => {
        return (
          <KaomojiIndividual key={`${section}-kaomoji-${index}`}>
            {kaomoji}
          </KaomojiIndividual>
        );
      })}
    </ShowedSection>
  );
};
