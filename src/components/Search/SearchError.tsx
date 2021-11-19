import React from 'react';
import { Snackbar } from 'react-native-paper';

interface SearchErrorProps {
  error: string;
  onDismiss: () => void;
}

const SearchError = ({ error, onDismiss }: SearchErrorProps) => (
  <Snackbar visible={!!error} onDismiss={onDismiss}>
    {error}
  </Snackbar>
);
export default SearchError;
