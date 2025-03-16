import { create } from "zustand";
import { Group, initialGroups, type Item } from "../lib/constants";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type ItemsStore = {
  groups: Group[];
  currentGroupIndex: number;
  addItem: (text: string) => void;
  deleteItem: (id: number) => void;
  toggleItem: (id: number) => void;
  removeAllItems: () => void;
  resetToInitial: () => void;
  markAllAsComplete: () => void;
  markAllAsIncomplete: () => void;
  switchGroup: (idx: number) => void;
};

export const useItemsStore = create(
  persist(
    immer<ItemsStore>(set => ({
      groups: initialGroups,
      currentGroupIndex: 0,
      addItem: newItemText => {
        const newItem: Item = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };

        set(state => {
          state.groups[state.currentGroupIndex].items.push(newItem);
        });
      },
      deleteItem: id => {
        set(state => {
          const { items } = state.groups[state.currentGroupIndex];

          items.splice(
            items.findIndex(item => item.id === id),
            1
          );
        });
      },
      toggleItem: id => {
        set(state => {
          const item = state.groups[state.currentGroupIndex].items.find(item => item.id === id);

          if (item) {
            item.packed = !item.packed;
          }
        });
      },
      removeAllItems: () => {
        set(state => {
          state.groups[state.currentGroupIndex].items = [];
        });
      },
      resetToInitial: () => {
        set(state => {
          state.groups[state.currentGroupIndex] = initialGroups[state.currentGroupIndex];
        });
      },
      markAllAsComplete: () => {
        // set(state => markAllAs(state, true));
        set(markAllAs(true));
      },
      markAllAsIncomplete: () => {
        set(markAllAs(false));
      },
      switchGroup: idx => {
        set({ currentGroupIndex: idx });
      },
    })),
    {
      name: "items",
    }
  )
);

// currying
// markAllAs(state, false)
// const innerfunction = markAllAs(false);
// innerfunction(state);
// markAllAs(false)(state)

const markAllAs = (complete: boolean) => (state: ItemsStore) => {
  state.groups[state.currentGroupIndex].items.forEach(item => {
    item.packed = complete;
  });
};
