import { Link } from "react-router-dom";

type Props = {
  lgnBtn: string;
  text: string;
};

const Button = (props: Props) => {
  const { lgnBtn, text } = props;

  // const [isLogin, setIsLogin] = useState(false);

  // const handleClick = () => {
  //   setIsLogin(!isLogin);
  // };

  return (
    <>
      <Link to="/login">
        <button className={`${lgnBtn}`}>{text}</button>
      </Link>
      {/* {isLogin ? (
        <button
          onClick={handleClick}
          className="rounded-full font-bold w-10 h-10 text-center items-center bg-white text-black p-2"
        >
          D
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="bg-white text-black text-xl font-bold rounded-md py-1 px-5"
        >
          LOGIN
        </button>
      )} */}
    </>
  );
};

export default Button;
