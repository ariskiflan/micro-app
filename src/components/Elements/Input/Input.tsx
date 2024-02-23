type Props = {
  placeholder: string;
  type: string;
  name: string;
};

const Input = (props: Props) => {
  const { placeholder, type, name } = props;
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className=" border-solid border-[2px] border-black rounded-[10px] text-[20px] w-full px-[10px] py-[10px] placeholder: opacity-50"
      />
    </div>
  );
};

export default Input;
