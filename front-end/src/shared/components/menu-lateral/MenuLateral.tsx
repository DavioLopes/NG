import { ArrowCircleLeft, Logout, MonetizationOn, ShoppingCartCheckout } from '@mui/icons-material';
import {
	Avatar,
	Box,
	Divider,
	Drawer, List, ListItem,
	ListItemButton,
	ListItemIcon,
	useMediaQuery,
	useTheme
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { PropsWithChildren } from 'react';
import { useDrawerContext } from '../../contexts';

export const MenuLateral: React.FC = ({ children }: PropsWithChildren<{}>) => {
	const theme = useTheme();
	const smDown = useMediaQuery(theme.breakpoints.down('sm'));
	const { isDrawerOpen, toggleDrawerOpen} = useDrawerContext();
	return (
		<>
			<Drawer open={isDrawerOpen} /* variant={smDown ? 'temporary' : 'permanent'} */>
				<Box
					width={theme.spacing(22)}
					height="100%"
					display="flex"
					flexDirection="column">
					<Box
						width="100%"
						height={theme.spacing(20)}
						display="flex"
						alignItems="center"
						flexDirection="column"
						justifyContent="center">
						<Avatar
							sx={{
								bgcolor: deepOrange[500],
								height: theme.spacing(12),
								width: theme.spacing(12),
							}}>
                    NG
						</Avatar>
						<ArrowCircleLeft onClick={ toggleDrawerOpen } />
					</Box>
					<Divider />
					<Box flex={1}>
						<List component="nav">
							<ListItem disablePadding >
								<ListItemButton>
									<ListItemIcon>
										<MonetizationOn />
									</ListItemIcon>
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding >
								<ListItemButton>
									<ListItemIcon>
										<ShoppingCartCheckout />
									</ListItemIcon>
								</ListItemButton>
							</ListItem>
							<ListItem disablePadding >
								<ListItemButton>
									<ListItemIcon>
										<Logout />
									</ListItemIcon>
								</ListItemButton>
							</ListItem>
						</List>
					</Box>
				</Box>
			</Drawer>
			<Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(22)}>
				{children}
			</Box>
		</>
	);
};
