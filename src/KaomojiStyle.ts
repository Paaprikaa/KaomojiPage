import styled from "styled-components";

export const Text = styled.div`
  font-weight: normal;
  font-family: "Gluten";
  font-weight: 800;
  font-size: 45px;
  color: #f865b1;

  @media only screen and (max-width: 930px) and (min-width: 615px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 615px) {
    font-size: 20px;
  }
`;

export const EffectText = styled.div`
 font-weight:normal;
  font-family:"Gluten";
  font-weight:300;
  color:white;
  position:absolute;
  font-size: 39px;
  padding-left: 12px;
  letter-spacing: 9px;

  @media only screen and (max-width: 930px) and (min-width: 615px) {
    font-size: 35px;
  }

  @media only screen and (max-width: 615px) {
    font-size: 20px;
  }
}
`;

export const Cover = styled.div`
  width: 100%;
  height: 500px;
  background-color: #ffbddf;
  display: flex;
`;
export const Logo = styled.img`
  width: 100%;
  align-content: center;
  object-fit: contain;
`;

export const Sections = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
`;

export const Section = styled.button`
  all: unset;
  width: 25%;
  background-color: #ffbddf;
  padding: 5px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f865b1;
    div {
      color: #fff5fa;
    }
    EffectText {
      display: none;
    }
  }
`;

export const ShowedSection = styled.div`
  width: 100%;
  gap: 4vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const KaomojiIndividual = styled.div`
  background-color: #f6e2ec;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
  padding: 2px;
  cursor: default;
  flex: 1 0 21%;
  display: flex;
  justify-content: center;
  padding: 15px 0px;
  flex: 0 0 21%;
`;
