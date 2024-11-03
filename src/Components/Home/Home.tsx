import { useState } from "react";
import { SectionType } from "../../IKaomoji";
import {
  Cover,
  Logo,
  Section,
  Sections,
  Text,
  EffectText,
} from "../../KaomojiStyle";
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
      <Cover>
        <Logo src="/logoKaomoji.png" alt="Welcome to Kaomoji" />
      </Cover>
      <Sections>
        {(Object.keys(SectionType) as Array<keyof typeof SectionType>).map(
          (key) => {
            return (
              <Section onClick={goToSection(key)} key={`${key}-section`}>
                <Text>{key.toString()}</Text>
                {/* <EffectText>{key.toString()}</EffectText> */}
              </Section>
            );
          }
        )}
      </Sections>
      <ShowSection section={selected} />
    </>
  );
}
