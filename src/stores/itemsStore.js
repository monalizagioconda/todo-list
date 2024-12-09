import { create } from "zustand";
import { initialGroups } from "../lib/constants";
import { persist } from "zustand/middleware";

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
          const newGroups = [...state.groups];
          const currentGroup = newGroups[state.currentGroupIndex];
          const newGroup = { ...currentGroup, items: [...currentGroup.items, newItem] };

          newGroups.splice(state.currentGroupIndex, 1, newGroup);

          return { groups: newGroups };
        });
      },
      deleteItem: id => {
        set(state => {
          const newGroups = [...state.groups];
          const currentGroup = newGroups[state.currentGroupIndex];
          const newGroup = { ...currentGroup, items: currentGroup.items.filter(item => item.id !== id) };

          newGroups.splice(state.currentGroupIndex, 1, newGroup);

          return { groups: newGroups };
        });
      },
      toggleItem: id => {
        set(state => {
          const newGroups = [...state.groups];
          const currentGroup = newGroups[state.currentGroupIndex];
          const newItems = currentGroup.items.map(item => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          const newGroup = { ...currentGroup, items: newItems };

          newGroups.splice(state.currentGroupIndex, 1, newGroup);

          return { groups: newGroups };
        });
      },
      removeAllItems: () => {
        set(state => {
          const newGroups = [...state.groups];
          const currentGroup = newGroups[state.currentGroupIndex];
          const newGroup = { ...currentGroup, items: [] }; // group będzie nowym obiektem ze sklonowaną group i nadpisanymi items-ami

          newGroups.splice(state.currentGroupIndex, 1, newGroup);

          return { groups: newGroups };
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
        set(state => {
          const newGroups = [...state.groups];
          const currentGroup = newGroups[state.currentGroupIndex];
          const newItems = currentGroup.items.map(item => {
            return { ...item, packed: true };
          });
          const newGroup = { ...currentGroup, items: newItems };

          newGroups.splice(state.currentGroupIndex, 1, newGroup);

          return { groups: newGroups };
        });
      },
      markAllAsIncomplete: () => {
        set(state => {
          const newGroups = [...state.groups];
          const currentGroup = newGroups[state.currentGroupIndex];
          const newItems = currentGroup.items.map(item => {
            return { ...item, packed: false };
          });
          const newGroup = { ...currentGroup, items: newItems };

          newGroups.splice(state.currentGroupIndex, 1, newGroup);

          return { groups: newGroups };
        });
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
