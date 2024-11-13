import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function ButtonGroup() {
  //   const secondaryButtons = [
  //     { text: "Mark all as complete", onClick: handleMarkAllAsComplete },
  //     { text: "Mark all as incomplete", onClick: handleMarkAllAsIncomplete },
  //     { text: "Reset to initial", onClick: handleResetToInitial },
  //     { text: "Remove all items", onClick: handleRemoveAllItems },
  //   ];

  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  return (
    <section className="button-group">
      <Button onClick={markAllAsComplete} buttonType="secondary">
        Mark all as complete
      </Button>
      <Button onClick={markAllAsIncomplete} buttonType="secondary">
        Mark all as incomplete
      </Button>
      <Button onClick={resetToInitial} buttonType="secondary">
        Reset to initial
      </Button>
      <Button onClick={removeAllItems} buttonType="secondary">
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
