import light from '../image/light.svg';
import dark from '../image/dark.svg';
import { ThemeContext } from '../App';
import { useContext } from 'react';

const Content = () => {
  const { theme } = useContext(ThemeContext);

  return (
    // change theme
    <main className={theme === 'dark' ? 'dark' : 'light'}>
      <div>
        <h1>Jeeranun Official</h1>
        <p>Darkmode Workshop</p>
      </div>
      {/* change logo */}
      <img src={theme === 'dark' ? dark : light} alt="logo"></img>
    </main>
  );
};
export default Content;
