type Props = {
  text: string;
  htmlfor: string;
};

const Label = (props: Props) => {
  const { text, htmlfor } = props;
  return (
    <div>
      <label
        htmlFor={htmlfor}
        className="block text-slate-700 text-[14px] font-bold mb-2"
      >
        {text}
      </label>
    </div>
  );
};

export default Label;
