import LogoImage from "../../../assets/logo.png";

type Props = {
  width: string;
  height: string;
};

const Logo = (props: Props) => {
  const { width, height } = props;
  return (
    <img className={`${width} ${height}`} src={LogoImage} alt="Logo Dumbways" />
  );
};

export default Logo;
