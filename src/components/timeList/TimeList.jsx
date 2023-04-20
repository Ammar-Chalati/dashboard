import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./timeList.css";

const TimeList = () => {
	return (
		<div className='timeList'>
			<div className="list">
				<table>
					<thead>
						<tr>
							<td>safe Time</td>
							<td colSpan={2}>Group</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>manger</td>
							<td>
								<div>
									<Link to='/time/updateTimes'>
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
							<td>emp with company car</td>
							<td>
								<div>
									<Link to='/time/updateTimes'>
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
							<td>emp with private car</td>
							<td>
								<div>
									<Link to='/time/updateTimes'>
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
							<td>group4</td>
							<td>
								<div>
									<Link to='/time/updateTimes'>
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
							<td>group5</td>
							<td>
								<div>
									<Link to='/time/updateTimes'>
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

export default TimeList
