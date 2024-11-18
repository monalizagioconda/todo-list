import { create } from "zustand";
import { initialGroups } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemsStore = create(
  persist(
    (set) => ({
      group: initialGroups[0],
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };

        set((state) => ({
          group: { ...state.group, items: [...state.group.items, newItem] },
        }));
      },
      deleteItem: (id) => {
        set((state) => {
          const newItems = state.group.items.filter((item) => item.id !== id);
          return { group: { ...state.group, items: newItems } };
        });
      },
      toggleItem: (id) => {
        set((state) => {
          const newItems = state.group.items.map((item) => {
            if (item.id === id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { group: { ...state.group, items: newItems } };
        });
      },
      removeAllItems: () => {
        set((state) => ({ group: { ...state.group, items: [] } })); // group będzie nowym obiektem ze sklonowaną group i nadpisanymi items-ami
      },
      resetToInitial: () => {
        set((state) => {
          const initialGroup = initialGroups.find(
            (obj) => obj.id === state.group.id
          );
          return { group: initialGroup };
        });
      },
      markAllAsComplete: () => {
        set((state) => {
          // stan bieżący stanu, czyli cały tutaj wielki obj / akcja powoduje modyfikacje stanu
          const newItems = state.group.items.map((item) => {
            return { ...item, packed: true };
          });
          return { group: { ...state.group, items: newItems } };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.group.items.map((item) => {
            return { ...item, packed: false };
          });
          return { group: { ...state.group, items: newItems } };
        });
      },
      switchGroup: (idx) => {
        set(() => ({ group: initialGroups[idx] }));
      },
    }),
    {
      name: "items",
    }
  )
);
