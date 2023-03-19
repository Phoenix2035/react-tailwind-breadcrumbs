interface PageTitleProps {
  title: string;
  textColor: string;
  borderColor: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  textColor,
  borderColor,
}) => {
  return (
    <h1
      className={`w-[80%] text-[22px] text-center text-[${textColor}] mx-auto p-3 border-b-[0.5px] border-[${borderColor}] border-opacity-20 mb-4`}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
