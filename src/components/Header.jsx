import { useItemsStore } from "../stores/itemsStore";
import Counter from "./Counter";
import Subject from "./Subject";

export default function Header() {
  const groups = useItemsStore(state => state.groups);
  const currentGroupIndex = useItemsStore(state => state.currentGroupIndex);
  const switchGroup = useItemsStore(state => state.switchGroup);
  const { items } = groups[currentGroupIndex];

  return (
    <header>
      <div className="subject">
        {groups.map(({ name }, idx) => (
          <Subject key={name} title={name} onClick={() => switchGroup(idx)} />
        ))}
      </div>
      <Counter numberOfItemsPacked={items.filter(item => item.packed).length} totalNumberOfItems={items.length} />
    </header>
  );
}
