type Props = {
  placeholder: string;
  type: string;
  name: string;
  id: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: Props) => {
  const { placeholder, type, name, id, onchange } = props;
  return (
    <div>
      <input
        onChange={onchange}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        className=" border-solid border-[2px] border-black rounded-[10px] text-[14px] w-full px-[5px] py-[5px] placeholder: opacity-50"
      />
    </div>
  );
};

export default Input;
