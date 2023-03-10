import noProds from '../../assets/noProds.svg';
import ImageBoxStyled from './styles';

export default function NoProducts() {
  return (
    <ImageBoxStyled>
      <img src={noProds} alt='no products' />
    </ImageBoxStyled>
  );
}
