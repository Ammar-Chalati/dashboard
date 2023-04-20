import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./carList.css";

const CarList = () => {
	return (
		<div className='carList'>
			<div className="list">
				<table>
					<thead>
						<tr>
							<td>Car</td>
							<td colSpan={2}>Type</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>electrical</td>
							<td>
								<div>
									<Link to='/car/updateTypes'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>hybird</td>
							<td>
								<div>
									<Link to='/car/updateTypes'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>electrical</td>
							<td>
								<div>
									<Link to='/car/updateTypes'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>hybird</td>
							<td>
								<div>
									<Link to='/car/updateTypes'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>1</td>
							<td>hybird</td>
							<td>
								<div>
									<Link to='/car/updateTypes'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default CarList
