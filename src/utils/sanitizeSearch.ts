export const sanitizeSearch = (value: string) => {
  return !value
    ? ''
    : value
        .toLowerCase()
        .replace(/[àá]/g, 'a')
        .replace(/[èé]/g, 'e')
        .replace(/[ìí]/g, 'i')
        .replace(/[òó]/g, 'o')
        .replace(/[ùú]/g, 'u');
};
