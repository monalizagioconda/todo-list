import { initialGroups } from "../lib/constants";
import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Subject from "./Subject";

export default function Header() {
  const group = useItemsStore((state) => state.group);
  const switchGroup = useItemsStore((state) => state.switchGroup);
  return (
    <header>
      <div className="subject">
        {initialGroups.map(({ name }, idx) => {
          return (
            <Subject key={name} title={name} onClick={() => switchGroup(idx)} />
          );
        })}
      </div>
      <Counter
        numberOfItemsPacked={group.items.filter((item) => item.packed).length}
        totalNumberOfItems={group.items.length}
      />
    </header>
  );
}
