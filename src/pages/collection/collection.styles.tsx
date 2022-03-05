import styled from "styled-components";
import { StyledComponentGroup } from "../../types/styled-component.types";

export const CollectionStyles: StyledComponentGroup = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Title: styled.div`
    font-size: 38px;
    margin: 0 auto 30px;
  `,
  ItemsContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `,
};
