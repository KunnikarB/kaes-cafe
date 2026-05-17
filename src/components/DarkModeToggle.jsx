function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button className="dark-btn" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
}

export default DarkModeToggle;
