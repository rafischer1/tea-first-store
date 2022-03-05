import { StyledComponent } from "styled-components";

export type StyledComponentGroup = {
  [p: string]: StyledComponent<any, any, {}, never>;
};
