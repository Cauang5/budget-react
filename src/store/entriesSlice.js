import { createSlice } from '@reduxjs/toolkit';

const initialEntries = [
  { id: 1, description: "Salary", value: "4500", isExpense: false },
  { id: 2, description: "Freelance", value: "1500", isExpense: false },
  { id: 3, description: "Rent", value: "500", isExpense: true },
  { id: 4, description: "Clothes", value: "150", isExpense: true },
];

const entriesSlice = createSlice({
  name: 'entries',
  initialState: initialEntries,
  reducers: {
    addEntry: (state, action) => {
      const { description, value, isExpense } = action.payload;
      state.push({
        id: state.length + 1,
        description,
        value,
        isExpense,
      });
    },
    removeEntry: (state, action) => {
      const { id } = action.payload;
      return state.filter(entry => entry.id !== id);
    },
    updateEntry: (state, action) => {
      const { id, description, value, isExpense } = action.payload;
      const entryIndex = state.findIndex(entry => entry.id === id);
      if (entryIndex !== -1) {
        state[entryIndex] = {
          ...state[entryIndex],
          description,
          value,
          isExpense,
        };
      }
    },
  },
});

export const { addEntry, removeEntry, updateEntry } = entriesSlice.actions;
export default entriesSlice.reducer;
