import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { css } from '@mui/styled-engine';

export const MainContainer = styled(Box)`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      background: ${theme.palette.grey[200]};
      height: 769px;
      width: 1632px;
      margin-bottom: 54px;
      padding: 32px 24px 32px 24px;
      input,
      .select {
        border-radius: 6px;
        width: 200px;
      }
      .first-input-container {
        display: flex;
        gap: 32px;
        margin-top: 24px;
        margin-bottom: 64px;
      }
      .second-input-container {
        display: flex;
        gap: 51px;
        margin-top: 32px;
        margin-bottom: 32px;
      }
      .MuiFormHelperText-root {
        color: ${theme.palette.error.main};
      }
    `}
`;

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  gap: 32px;
  margin-left: 250px;
  margin-top: 32px;
`;
