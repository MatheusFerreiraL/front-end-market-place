import ButtonStyled from './styles';

export default function CustomButton({
  children,
  btnType,
  variant,
  bg,
  onClickFunc,
  bgHover,
  btnClassName,
  startIcon,
  borderColor,
  disabledBtn,
}) {
  return (
    <ButtonStyled
      variant={variant}
      type={btnType}
      sx={{
        backgroundColor: bg || 'primary.dark',
        borderColor: borderColor || 'inherit',
        '&:hover': {
          background: bgHover,
          color: bgHover && 'inherit',
        },
      }}
      onClick={onClickFunc}
      startIcon={startIcon}
      className={btnClassName}
      disabled={disabledBtn || false}
    >
      {children}
    </ButtonStyled>
  );
}
