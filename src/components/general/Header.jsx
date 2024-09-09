import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function Header() {
	return (
		<AppBar position='static' sx={{ mb: '4em' }}>
			<Toolbar>
				<Typography variant='h6'>Social Network</Typography>
			</Toolbar>
		</AppBar>
	);
}
