import { MouseEventHandler, useState } from "react";
import { Cover, Text } from "../../KaomojiPageStyle";
import { SectionType, ValueSectionType } from "../HomeTypes";
import { Section, Sections } from "./HomeStyle";
import { ShowSection } from "../ShowSection/ShowSection";

export default function Home() {
  const [selected, setSelected] = useState<SectionType>(SectionType.Happy);
  const goToSection =
    (key: keyof typeof SectionType) =>
    (e: any): void => {
      e.preventDefault();
      setSelected(SectionType[key]);
    };

  return (
    <>
      <Cover />
      <Sections>
        {(Object.keys(SectionType) as Array<keyof typeof SectionType>).map(
          (key) => {
            return (
              <Section onClick={goToSection(key)} key={`${key}-section`}>
                <Text>{key.toString()}</Text>
              </Section>
            );
          }
        )}
      </Sections>
      <ShowSection section={selected} />
    </>
  );
}
