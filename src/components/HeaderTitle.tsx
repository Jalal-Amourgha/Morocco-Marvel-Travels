interface HeaderTitleProps {
  title: string;
  description?: string;
}
export const HeaderTitle = ({ title, description }: HeaderTitleProps) => {
  return (
    <div className="text-gray-4 text-center mb-10">
      <h1 className="text-3xl font-bold t mb-5">{title}</h1>
      <p className="font-normal">{description}</p>
    </div>
  );
};
