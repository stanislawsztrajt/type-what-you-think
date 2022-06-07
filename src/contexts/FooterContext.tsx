import { FC, createContext, useState, PropsWithChildren, ReactNode, useContext, Context } from 'react';

interface Props {
  children: ReactNode;
}
interface Ithemes {
  light: string;
  dark: string;
}
interface IfooterContext {
  theme: string,
  changeTheme: () => void
}

const themes: Ithemes = {
  light: 'bg-white text-black',
  dark: 'bg-black text-white'
}

const FooterTheme: Context<IfooterContext> = createContext({
  theme: themes.light,
  changeTheme: () => { return }
});


export const useFooterTheme: () => IfooterContext = () =>{
  return useContext(FooterTheme)
}

export const FooterThemeContext: FC<PropsWithChildren<Props>> = ({ children }: Props) =>{
  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () =>{
    setTheme(theme === themes.light ? themes.dark : themes.light)
  }

  return(
    <FooterTheme.Provider value={{ theme, changeTheme }}>
      { children }
    </FooterTheme.Provider>
  )
}