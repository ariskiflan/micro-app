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
        className=" border-solid border-[2px] border-black rounded-[10px] text-[14px] w-full px-[5px] py-[5px] placeholder: opacity-50"
      />
    </div>
  );
};

export default Input;
