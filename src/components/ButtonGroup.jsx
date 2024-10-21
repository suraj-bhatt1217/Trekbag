import Button from "./Button";

const ButtonGroup = () => {
  return (
    <section className="button-group">
      <Button text='Mark all as complete'/>
      <Button text='Mark all as incomplete'/>
      <Button text='Reset to initial'/>
      <Button text='Remove all items'/>
    </section>
  );
};

export default ButtonGroup;
