import ButtonStyled from './styles';

export default function CustomButton({ children, btnType, variant, bg }) {
  return (
    <ButtonStyled
      variant={variant}
      type={btnType}
      sx={{ backgroundColor: bg || 'primary.dark' }}
    >
      {children}
    </ButtonStyled>
  );
}
