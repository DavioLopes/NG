import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './Routes';
import { MenuLateral } from './shared/components';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';

export const App = () => {
	return (
		<AppThemeProvider>
			<DrawerProvider>
				<BrowserRouter>
					<MenuLateral>
						<AppRoutes />
					</MenuLateral>
				</BrowserRouter>
			</DrawerProvider>
		</AppThemeProvider>
	);
};
