import CheckItem from "@/components/atoms/CheckItem/CheckItem";

const ContentChecks = () => {
  return (
    <>
      <div className="flex w-full flex-1 flex-col gap-4">
        <CheckItem isChecked>Best Worker Services</CheckItem>
        <CheckItem isChecked>Best Worker Services</CheckItem>
        <CheckItem isChecked>Best Worker Services</CheckItem>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <CheckItem isChecked>Best Worker Services</CheckItem>
        <CheckItem isChecked>Best Worker Services</CheckItem>
        <CheckItem isChecked>Best Worker Services</CheckItem>
      </div>
    </>
  );
};

export default ContentChecks;
