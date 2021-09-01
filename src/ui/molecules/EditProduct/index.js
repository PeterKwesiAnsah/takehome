import React from 'react';
import TextField from '@material-ui/core/TextField';
const Index = ({ propValue, type, label }) => {
	const [allowEdit, setAllowEdit] = React.useState(true);
	const [value, setValue] = React.useState(propValue);
	return (
		<div className="product--Name">
			<TextField
				id="standard-read-only-input"
				label={label}
				InputProps={{
					readOnly: allowEdit,
				}}
				value={value}
				variant="outlined"
				onBlur={() => {
					setAllowEdit(true);
				}}
				onChange={({ target }) => {
					setValue(target.value);
				}}
				type={type}
				// helperText="Name cant be blank"
			/>
			<div className="product--actions">
				<span
					className="product--action product--action--edit"
					onClick={() => {
						setAllowEdit(false);
					}}
				>
					edit
				</span>
				<span
					className="product--action product--action--save"
					onClick={() => {
						setAllowEdit(true);
					}}
				>
					save
				</span>
			</div>
		</div>
	);
};

export default Index;
