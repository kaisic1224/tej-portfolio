const TextCardBorder = ({
  children,
  bgBorder,
  bg
}: {
  children: any;
  bgBorder: string;
  bg: string;
}) => {
  return (
    <div
      className={`${bg} isolate relative p-4 before:absolute before:w-full before:h-full
       before:-z-20 before:bg-transparent before:border-2 before:-translate-x-1 before:-translate-y-1 before:${bgBorder} before:-z-10`}
    >
      {children}
    </div>
  );
};
export default TextCardBorder;
