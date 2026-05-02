const LayoutDashboardTeacher = ({
  children,
  model,
}: {
  children: React.ReactNode;
  model: React.ReactNode;
}) => {
  return (
    <main dir="ltr">
      {children}
      {model}
    </main>
  );
};

export default LayoutDashboardTeacher;
