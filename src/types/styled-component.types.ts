import { StyledComponent } from "styled-components";

export type StyledComponentGroup = {
  [key: string]: StyledComponent<any, any, {}, never>;
};
