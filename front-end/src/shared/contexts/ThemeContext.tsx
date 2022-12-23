import { ThemeProvider } from '@mui/material';
import { Box } from '@mui/system';
import {
	createContext, PropsWithChildren, useCallback,
	useContext,
	useMemo,
	useState
} from 'react';

import IThemeContextData from '../../interfaces/Itheme';
import { DarkTheme, LightTheme } from '../themes';

const ThemeContext = createContext({} as IThemeContextData);

export const useAppThemeContext = () => {
	return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }: PropsWithChildren<{}>) => {
	const [themeName, setThemeName] = useState<'light' | 'dark'>('dark');

	const toggleTheme = useCallback(() => {
		setThemeName((oldThemeName) =>
			oldThemeName === 'light' ? 'dark' : 'light'
		);
	}, []);

	const theme = useMemo(() => {
		if (themeName === 'light') return LightTheme;
		return DarkTheme;
	}, [themeName]);

	return (
		<ThemeContext.Provider value={{ themeName, toggleTheme }}>
			<ThemeProvider theme={theme}>
				<Box
					width="100vw"
					height="100vh"
					bgcolor={theme.palette.background.default}>
					{children}
				</Box>
			</ThemeProvider>
		</ThemeContext.Provider>
	);
};
