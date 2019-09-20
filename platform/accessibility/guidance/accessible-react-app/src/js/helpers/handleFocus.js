const handleFocus = el => {
  const target = document.getElementById(el);

  if (target) {
    target.focus();
  }
};

export default handleFocus;
