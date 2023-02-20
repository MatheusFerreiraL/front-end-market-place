import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { css } from '@mui/styled-engine';
import { Container } from '@mui/system';

export const FormBox = styled(Box)`
  ${({ theme }) =>
    css`
      display: flex;
      flex-direction: column;
      min-height: 767px;
      width: 446px;
      padding-top: 52px;
      padding-right: 32px;
      padding-bottom: 32px;
      padding-left: 32px;
      background-color: ${theme.palette.textColor.white};
      position: relative;
      .MuiFormHelperText-root {
        color: ${theme.palette.error.main};
      }
    `}
`;
export const ContainerInput = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;
  margin-bottom: 24px;
`;
