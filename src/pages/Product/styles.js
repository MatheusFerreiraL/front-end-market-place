import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { css } from '@mui/styled-engine';

export const CustomContainer = styled(Box)`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      background: ${theme.palette.background};
      border-radius: 6px;
      min-height: 512px;
      width: 1632px;
      margin: 0 144px 180px 144px;

      .breadcrumbs {
        margin-bottom: 32px;
      }
    `}
`;

export const CustomProductContainer = styled(Box)`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      background: ${theme.palette.grey[200]};
      min-height: 512px;
      width: 1632px;
      margin-bottom: 40px;
      padding: 32px 200px 46px 32px;

      .wrap-product-container {
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        gap: 52px;

        .title {
          margin-bottom: 8px;
        }
        .price {
          margin-top: 22px;
          margin-bottom: 24px;
        }
      }
    `}
`;

export const ProductPicture = styled(Box)`
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 6px;
  min-height: 448px;
  width: 464px;
`;

export const ContainerIcons = styled(Box)`
  display: flex;
  gap: 24px;
  cursor: pointer;
  margin-top: 18px;
  margin-bottom: 28px;
`;

export const ContainerQuantity = styled(Box)`
  ${({ theme }) =>
    css`
      display: flex;
      align-items: center;
      margin-top: 8px;
      margin-bottom: 24px;
      .control-quantity {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: ${theme.palette.background.default};
        border-radius: 6px;
        gap: 40px;
        margin-right: 16px;
      }
    `}
`;

export const ShippingAdressField = styled(TextField)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 167px;
`;

export const ContainerButtons = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 38px;
`;

export const CustomDescriptionContainer = styled(Box)`
  ${({ theme }) =>
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${theme.palette.grey[200]};
      height: 112px;
      width: 100%;
      margin-bottom: 32px;
      padding: 0 140px 0 150px;
      position: sticky;
      top: 0;
      z-index: 1;

      .hidden {
        display: none;
      }
    `}
`;
