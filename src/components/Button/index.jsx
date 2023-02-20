import ButtonStyled from './styles';

export default function CustomButton({ children, btnType }) {
  return (
    <ButtonStyled variant='contained' type={btnType}>
      {children}
    </ButtonStyled>
  );
}
