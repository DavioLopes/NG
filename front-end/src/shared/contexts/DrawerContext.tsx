import {
	createContext, PropsWithChildren, useCallback,
	useContext, useState
} from 'react';
import IDrawerContextData from '../../interfaces/IDrawerContextData';


const DrawerContext = createContext({} as IDrawerContextData);

export const useDrawerContext = () => {
	return useContext(DrawerContext);
};

export const DrawerProvider = ({ children }: PropsWithChildren<{}>) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const toggleDrawerOpen = useCallback(() => {
		setIsDrawerOpen((oldDrawerName) =>
			!oldDrawerName
		);
	}, []);

	return (
		<DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
			{children}
		</DrawerContext.Provider>
	);
};
