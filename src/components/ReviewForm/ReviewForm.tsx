import { Form } from '@utd-argo/ux-master-library';
import { TextField } from '@utd-argo/ux-master-library';
import { Dropdown } from '@utd-argo/ux-master-library';
import { Checkbox } from '@utd-argo/ux-master-library';
import { RadioButton } from '@utd-argo/ux-master-library';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';
import './ReviewForm.css';

function textfield(label: string, width: number) {
	return <TextField label={label} size="small" width={width} />;
}

function ReviewForm() {
	const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const dropdown: React.ReactNode = (
		<div>
			<Dropdown label="Freshness Score" items={items} size="small" />
		</div>
	);

	const select: React.ReactNode = (
		<div>
			<FormControl>
				<RadioGroup row defaultValue="movie">
					<FormControlLabel
						value="movie"
						control={<RadioButton color="#fc9f00" />}
						label="Movie"
					/>
					<FormControlLabel
						value="tv"
						control={<RadioButton color="#fc9f00" />}
						label="TV Show"
					/>
				</RadioGroup>
			</FormControl>
		</div>
	);

	const checkboxes: React.ReactNode = (
		<div className="formText">
			Check those that apply:
			<div className="checkboxDiv">
				<Checkbox label="Review contains spoilers" color="#fc9f00" />
			</div>
		</div>
	);

	const largefield: React.ReactNode = (
		<div className="largeFieldDiv">
			<TextField label="Review" width={400} multiline rows="5" />
		</div>
	);

	const matrix = [
		[select],
		[textfield('Content Name', 300)],
		[largefield],
		[checkboxes],
		[dropdown]
	];

	return (
		<div>
			<div className="formTitle"> Write a Review </div>
			<div className="form">
				<Form
					title=""
					padding="0px"
					formMatrix={matrix}
					titleVariant="h6"
					width={400}
					color="#fc9f00"
				/>
			</div>
		</div>
	);
}

export default ReviewForm;
