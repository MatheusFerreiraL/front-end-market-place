import CenterBoxStyled from './styles';

export default function CenterBox({ children }) {
  return <CenterBoxStyled className='centerBox'>{children}</CenterBoxStyled>;
}
