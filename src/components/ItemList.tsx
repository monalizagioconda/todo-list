import Select from "react-select";
import EmptyView from "./EmptyView";
import { useMemo, useState } from "react";
import { useItemsStore } from "../stores/itemsStore";
import type { Item } from "../lib/constants";

type SortBy = "default" | "packed" | "unpacked";

type SortingOption = {
  label: string;
  value: SortBy;
};

const sortingOptions: SortingOption[] = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  const groups = useItemsStore(state => state.groups);
  const currentGroupIndex = useItemsStore(state => state.currentGroupIndex);
  const deleteItem = useItemsStore(state => state.deleteItem);
  const toggleItem = useItemsStore(state => state.toggleItem);
  const [sortBy, setSortBy] = useState<SortBy>("default");
  const { items } = groups[currentGroupIndex];

  const sortedItems = useMemo(() => {
    if (sortBy === "default") return items;

    return [...items].sort((a, b) =>
      sortBy === "packed" ? Number(b.packed) - Number(a.packed) : Number(a.packed) - Number(b.packed)
    );
  }, [items, sortBy]);

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 && (
        <section className="sorting">
          <Select
            onChange={option => {
              if (option) setSortBy(option.value);
            }}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {sortedItems.map(item => (
        <Item key={item.id} item={item} onDeleteItem={deleteItem} onToggleItem={toggleItem} />
      ))}
    </ul>
  );
}

type ItemProps = {
  item: Item;
  onDeleteItem: (id: number) => void;
  onToggleItem: (id: number) => void;
};

function Item({ item, onDeleteItem, onToggleItem }: ItemProps) {
  return (
    <li className="item">
      <label>
        <input onChange={() => onToggleItem(item.id)} checked={item.packed} type="checkbox" />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
