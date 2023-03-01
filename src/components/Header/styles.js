import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { css } from '@mui/styled-engine';

export const HeaderStyled = styled(Box)`
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

export const ContainerIcons = styled(Box)`
  display: flex;
  gap: 24px;
`;
