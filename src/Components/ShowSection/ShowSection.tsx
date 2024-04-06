import { IShowSection } from "../HomeTypes";

export const ShowSection = ({ section }: IShowSection) => {
  return <>{section.toString()}</>;
};
