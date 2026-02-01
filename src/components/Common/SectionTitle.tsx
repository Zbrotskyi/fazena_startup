const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  dark,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  dark?: boolean;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`mb-4 text-3xl font-bold leading-tight! sm:text-4xl md:text-[45px] ${dark ? "text-white" : "text-black dark:text-white"}`}>
          {title}
        </h2>
        <p className={`text-base leading-relaxed! md:text-lg ${dark ? "text-white/60" : "text-body-color"}`}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

