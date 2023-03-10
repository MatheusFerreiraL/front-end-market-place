import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { css } from '@mui/styled-engine';

export const TableBoxContainer = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.palette.grey[200]};
    border-radius: 6px;
    min-height: 512px;
    width: 1632px;
    padding: 32px;
    margin: 0 144px 180px 144px;
  `}
`;

export const TopTableBox = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${theme.palette.grey[100]};
    padding: 10px 10px 15px 10px;
    margin-bottom: 20px;
  `}
`;

export const TableHeader = styled(Box)`
  display: flex;
  margin-bottom: 30px;
`;

export const TableRow = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background-color: ${theme.palette.background.default};
    max-width: 1568px;
    height: 112px;
    padding: 10px 20px 10px 10px;
    margin-left: 10px;
    margin-bottom: 10px;
    img {
      width: 80px;
      height: 80px;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .img-cell {
      width: 148px;
      height: 80px;
    }
    .name-cell {
      width: 530px;
      height: 20px;
    }
    .storage-cell {
      width: 135px;
      height: 20px;
    }
    .sold-cell {
      width: 110px;
      height: 20px;
    }
    .price-cell {
      margin-right: 170px;
    }
    .icons-btn {
      display: flex;
      gap: 40px;
    }
  `}
`;

export const TableCell = styled(Box)``;
