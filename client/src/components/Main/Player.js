import React from "react";
import { StyledCharacter } from "../Main/Styles/styles";

const { min } = Math;

const Character = ({ x, y }) => {
  return (
    <StyledCharacter
      style={{ gridColumn: min(x + 1, 30), gridRow: min(y + 1, 50) }}
    />
  );
};

export default Character;
