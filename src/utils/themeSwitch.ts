export const themeSwitch = () => {
  console.log('ding');
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    return;
  }

  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  return;
};
