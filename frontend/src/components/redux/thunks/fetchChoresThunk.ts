import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchChores } from '../../../api';

export const fetchChoresThunk = createAsyncThunk(
  'chores/fetchChores',
  async () => {
    try {
      const data = await fetchChores();
    } catch (error) {
      return {};
    }
  }
);
