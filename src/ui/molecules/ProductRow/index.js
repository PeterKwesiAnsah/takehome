import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

const Index = (props) => {
	const { row } = props;
	const [open, setOpen] = React.useState(false);
	const useRowStyles = makeStyles({
		root: {
			'& > *': {
				borderBottom: 'unset',
			},
		},
	});
	const classes = useRowStyles();

	return (
		<React.Fragment>
			<TableRow className={classes.root}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row" align="left">
					{row.id}
				</TableCell>
				<TableCell align="left">{row.name}</TableCell>
				<TableCell>
					<Link to={`/product/${row.id}`}>
						<CreateIcon />
					</Link>
					<>
						<DeleteIcon />
					</>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box margin={1}>
							<Typography variant="h6" gutterBottom component="div">
								History Prices
							</Typography>
							<Table size="small" aria-label="purchases">
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell>Price (Ghc)</TableCell>
										<TableCell align="center">Product Name</TableCell>
										<TableCell align="center">Product ID</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{row.prices.map(({ id, price, date }) => (
										<TableRow key={id}>
											<TableCell component="th" scope="row">
												{new Date(date).toDateString()}
											</TableCell>
											<TableCell>{price}</TableCell>
											<TableCell align="center">{row.name}</TableCell>
											<TableCell align="center">{row.id}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
};

export default Index;
