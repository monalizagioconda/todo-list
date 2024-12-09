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

        set(state => updateItems(state, [...state.groups[state.currentGroupIndex].items, newItem]));
      },
      deleteItem: id => {
        set(state =>
          updateItems(
            state,
            state.groups[state.currentGroupIndex].items.filter(item => item.id !== id)
          )
        );
      },
      toggleItem: id => {
        set(state =>
          updateItems(
            state,
            state.groups[state.currentGroupIndex].items.map(item => {
              if (item.id === id) {
                return { ...item, packed: !item.packed };
              }
              return item;
            })
          )
        );
      },
      removeAllItems: () => {
        set(state => updateItems(state, []));
      },
      resetToInitial: () => {
        set(state => {
          const newGroups = [...state.groups];

          newGroups.splice(state.currentGroupIndex, 1, initialGroups[state.currentGroupIndex]);

          return { groups: newGroups };
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
    }),
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

const markAllAs = complete => state =>
  updateItems(
    state,
    state.groups[state.currentGroupIndex].items.map(item => ({ ...item, packed: complete }))
  );
