import Button from "./Button";

const ButtonGroup = () => {
  const secondaryButtons = [
    "Mark all as complete",
    "Mark all as incomplete",
    "Reset to initial",
    "Remove all items",
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((desc) => {
        return <Button key={desc} type="secondary" text={desc} />;
      })}
    </section>
  );
};

export default ButtonGroup;
