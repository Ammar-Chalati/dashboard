import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./groupList.css";

const GroupList = () => {
	return (
		<div className='groupList'>
			<div className="list">
				<table>
					<thead>
						<tr>
							<td>Group_id</td>
							<td colSpan={2}>Num_users</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Name one</td>
							<td>24 Users</td>
							<td>
								<div>
									<Link to='/group/updateGroups'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>Name tow</td>
							<td>24 Users</td>
							<td>
								<div>
									<Link to="/group/updateGroups">
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>Name thr</td>
							<td>24 Users</td>
							<td>
								<div>
									<Link to="/group/updateGroups">
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>Name for</td>
							<td>24 Users</td>
							<td>
								<div>
									<Link to="/group/updateGroups">
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>Name fif</td>
							<td>24 Users</td>
							<td>
								<div>
									<Link to="/group/updateGroups">
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

export default GroupList
