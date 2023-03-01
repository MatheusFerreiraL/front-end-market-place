import ButtonStyled from './styles';

export default function CustomButton({
  children,
  btnType,
  variant,
  bg,
  onClickFunc,
  bgHover,
  btnClassName,
}) {
  return (
    <ButtonStyled
      variant={variant}
      type={btnType}
      sx={{
        backgroundColor: bg || 'primary.dark',
        '&:hover': {
          background: bgHover,
          color: bgHover && 'inherit',
        },
      }}
      onClick={onClickFunc}
      className={btnClassName}
    >
      {children}
    </ButtonStyled>
  );
}
