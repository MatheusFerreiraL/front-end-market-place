import CardMedia from '@mui/material/CardMedia';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import { css } from '@mui/styled-engine';
import Card from '@mui/material/Card';

export const ProductCardMedia = styled(CardMedia)`
  max-width: 342px;
  max-height: 342px;
  margin: 20px 20px 0 20px;
`;

export const ContainerProductCardMedia = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
    margin-right: 97px;
    margin-bottom: 160px;
    margin-left: 117px;
    color: ${theme.palette.primary.main};
  `}
`;

export const ContainerPagination = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 10px;
  .display-page {
    width: 3.5rem;
    padding: auto;
  }
`;

export const PageDisplay = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CustomCard = styled(Card)`
  width: 382px;
  transition: 0.4s ease-in;
  :hover {
    transform-origin: center;
    transform: scale(110%);
    z-index: 0;
    transition-duration: 0.4s;
  }
`;
