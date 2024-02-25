type Props = {
  text: string;
};

const Label = (props: Props) => {
  const { text } = props;
  return (
    <div>
      <label
        htmlFor=""
        className="block text-slate-700 text-[14px] font-bold mb-2"
      >
        {text}
      </label>
    </div>
  );
};

export default Label;
