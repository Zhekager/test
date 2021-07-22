const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  
  const checkboxRef = document.querySelector('#theme-switch-toggle');
  
  checkboxRef.addEventListener('change', onChangeTheme);

  function onChangeTheme(e) {
    e.currentTarget.checked ? setDarkTheme() : setLightTheme();
  };

  function setDefaultTheme() {
    const savedTheme = localStorage.getItem('Theme');
    if (savedTheme === 'light-theme' || savedTheme === null) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  }
  setDefaultTheme();

  function setLightTheme() {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('Theme', 'light-theme');
    checkboxRef.checked = false;
  }
  
  function setDarkTheme() {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('Theme', 'dark-theme');
    checkboxRef.checked = true;}