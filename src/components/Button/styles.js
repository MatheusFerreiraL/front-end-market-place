import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { css } from '@mui/styled-engine';

const ButtonStyled = styled(Button)`
  ${({ theme }) =>
    css`
      transition: 0.4s ease-out;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      text-transform: none;
      padding: 20px 16px;
      gap: 8px;
      border-radius: 30px;
      height: 56px;
      :hover {
        background: ${theme.palette.secondary.light};
        transition: 0.4s ease-in;
        color: ${theme.palette.grey[200]};
      }
    `}
`;
export default ButtonStyled;
