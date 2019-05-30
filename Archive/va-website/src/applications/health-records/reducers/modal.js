const initialState = {
  title: null,
  content: '',
  visible: false,
};

export default function modal(state = initialState, action) {
  switch (action.type) {
    case 'MODAL_OPENED':
      return {
        visible: true,
        title: action.title,
        content: action.content,
      };
    case 'MODAL_CLOSED':
      return {
        visible: false,
        title: '',
        content: '',
      };
    default:
      return state;
  }
}
