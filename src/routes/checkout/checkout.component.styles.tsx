import { StyledComponentGroup } from "../../types/styled-component.types";
import styled from "styled-components";

export const CheckoutPageStyles: StyledComponentGroup = {
  Container: styled.div`
    width: 55%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0;
  `,
  Header: styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid darkgrey;
  `,
  HeaderBlock: styled.div`
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  `,
  Total: styled.div`
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  `,
  Warning: styled.div`
    color: red;
    text-align: center;
    margin-top: 40px;
    font-size: 24px;
  `,
};
