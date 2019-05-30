export const keyMap = {
  TAB: 9,
  ENTER: 13,
  ESCAPE: 27,
  SPACE: 32,
  UP: 38,
  DOWN: 40
};

export const toggles = [keyMap.ENTER, keyMap.SPACE];

export function getDirection(code) {
  if (code === keyMap.UP) return -1;
  if (code === keyMap.DOWN) return 1;
  return false;
}

export function getSelection(options, queryType) {
  let selection = options[0];
  if (queryType) {
    const selectionType = queryType;
    selection = options.find((item) => item.id === selectionType);
  }
  return { selection, id: options.indexOf(selection) };
}

export function isSelect(code) {
  return code === keyMap.ENTER || code === keyMap.SPACE;
}

export function isTraverse(code) {
  return code === keyMap.UP || code === keyMap.DOWN;
}

export function isEscape(code) {
  return code === keyMap.ESCAPE || code === keyMap.TAB;
}

export function isToggle(keyEvent, isActive) {
  const { keyCode: code } = keyEvent;
  const isToggleKey = toggles.includes(code);
  const shouldOpen = !isActive && code === keyMap.DOWN;
  const shouldClose = isActive && isEscape(code);
  const result = isToggleKey || shouldClose || shouldOpen;
  return result;
}

export function noServices(type, facilityType) {
  return type === 'service' && !['benefits', 'vet_center'].includes(facilityType);
}

export function getServices(facilityType, benefitsServices, vetCenterServices) {
  let services;
  switch (facilityType) {
    case 'benefits':
      services = Object.keys(benefitsServices);
      break;
    case 'vet_center':
      services = ['All', ...vetCenterServices];
      break;
    default:
      return null;
  }
  return services;
}
