import { useContext } from "react"
import { MdWbTwilight } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { ThemeContext } from '../context/ThemeContext';

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext)
  return (
    <div>
      {
        theme === 'dark' ? (
          <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex">
            <MdWbTwilight className='text-orange-400 text-2xl mr-2' /> Light Mode
          </div>
        ) : (
          <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex">
            <CgDarkMode className='text-primary text-2xl mr-2' /> Dark Mode
          </div>
        )
      }
    </div>
  )
}

export default ThemeToggle