import { create } from "zustand";
import { initialGroups } from "../lib/constants";
import { persist } from "zustand/middleware";

function updateItems(state, newItems) {
  const newGroups = [...state.groups];
  const currentGroup = newGroups[state.currentGroupIndex];
  const newGroup = { ...currentGroup, items: newItems };

  newGroups.splice(state.currentGroupIndex, 1, newGroup);

  return { groups: newGroups };
}

export const useItemsStore = create(
  persist(
    set => ({
      groups: initialGroups,
      currentGroupIndex: 0,
      addItem: newItemText => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };

        set(state => {
          const newItems = [...state.groups[state.currentGroupIndex].items, newItem];

          return updateItems(state, newItems);
        });
      },
      deleteItem: id => {
        set(state => {
          const newItems = state.groups[state.currentGroupIndex].items.filter(item => item.id !== id);

          return updateItems(state, newItems);
        });
      },
      toggleItem: id => {
        set(state => {
          const newItems = state.groups[state.currentGroupIndex].items.map(item => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });

          return updateItems(state, newItems);
        });
      },
      removeAllItems: () => {
        set(state => {
          const newItems = [];

          return updateItems(state, newItems);
        });
      },
      resetToInitial: () => {
        set(state => {
          const newGroups = [...state.groups];

          newGroups.splice(state.currentGroupIndex, 1, initialGroups[state.currentGroupIndex]);

          return { groups: newGroups };
        });
      },
      markAllAsComplete: () => {
        set(state => markAllAs(state, true));
      },
      markAllAsIncomplete: () => {
        set(state => markAllAs(state, false));
      },
      switchGroup: idx => {
        set({ currentGroupIndex: idx });
      },
    }),
    {
      name: "items",
    }
  )
);

function markAllAs(state, complete) {
  const newItems = state.groups[state.currentGroupIndex].items.map(item => ({ ...item, packed: complete }));

  return updateItems(state, newItems);
}
