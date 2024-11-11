import Button from "./Button";
import { useItemsContext } from "../lib/hooks";

export default function ButtonGroup() {
  //   const secondaryButtons = [
  //     { text: "Mark all as complete", onClick: handleMarkAllAsComplete },
  //     { text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
  //     { text: "Reset to initial", onClick: handleResetToInitial },
  //     { text: "Remove all items", onClick: handleRemoveAllItems },
  //   ];

  const {
    handleMarkAllAsComplete,
    handleMarkAllAsIncomplete,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useItemsContext();

  return (
    <section className="button-group">
      <Button onClick={handleMarkAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={handleMarkAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={handleResetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={handleRemoveAllItems} buttonType="secondary">
        Remove all items
      </Button>

      {/* renderowanie template'a z danych
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + onClick.toString()}  lub onClick.name -> wypisze nazwę f. (tak samo dla zwykłej f. jak nazwę zmiennej dla arrow f.)
          buttonType="secondary"
          onClick={onClick}
        >
          {text}
        </Button>
      ))} */}
    </section>
  );
}
