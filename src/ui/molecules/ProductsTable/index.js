import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Row from '../ProductRow';
import { useSelector } from 'react-redux';
import './index.css';

export default function CollapsibleTable() {
	const rows = useSelector((state) => state.products.data);
	console.log(rows);
	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead>
					<TableRow>
						<TableCell />
						<TableCell align="left">Product ID</TableCell>
						<TableCell align="left">Product Name</TableCell>
						<TableCell>Action </TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row, index) => (
						<Row key={row.name} row={row} rowIdx={index + 1} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
