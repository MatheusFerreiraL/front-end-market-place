import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ImageBoxStyled = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  gap: 13px;
  img {
    height: 59px;
    width: 43px;
  }
`;

export default ImageBoxStyled;
