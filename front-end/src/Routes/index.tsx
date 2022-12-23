import { ArrowCircleRight } from '@mui/icons-material';
import { Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';


export const AppRoutes = () => {
	const { toggleDrawerOpen } = useDrawerContext();
	return (
		<Routes>
			<Route path="/" element={<ArrowCircleRight onClick={ toggleDrawerOpen } />} />
		</Routes>
	);
}
