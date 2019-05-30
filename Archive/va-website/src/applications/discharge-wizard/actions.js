export const DW_UPDATE_FIELD = 'DW_UPDATE_FIELD';

export function updateField(key, value) {
  return {
    type: DW_UPDATE_FIELD,
    key,
    value,
  };
}
