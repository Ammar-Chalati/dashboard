import React from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

import "./adminList.css";

const GroupList = () => {
	return (
		<div className='adminList'>
			<div className="list">
				<table>
					<thead>
						<tr>
							<td colSpan={2}>Email</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Email@gmail.com</td>
							<td>
								<div>
									<Link to='/adminPass/admin/permissions'>
										<InfoIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/adminPass/admin/updateAdmins'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>Email@gmail.com</td>
							<td>
								<div>
									<Link to='/adminPass/admin/permissions'>
										<InfoIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/adminPass/admin/updateAdmins'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>Email@gmail.com</td>
							<td>
								<div>
									<Link to='/adminPass/admin/permissions'>
										<InfoIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/adminPass/admin/updateAdmins'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>Email@gmail.com</td>
							<td>
								<div>
									<Link to='/adminPass/admin/permissions'>
										<InfoIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/adminPass/admin/updateAdmins'>
										<EditIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/'>
										<DeleteIcon style={{"color" : "#cd353b", 'cursor' : 'pointer'}} />
									</Link>
								</div>
							</td>
						</tr>
						<tr>
							<td>Email@gmail.com</td>
							<td>
								<div>
									<Link to='/adminPass/admin/permissions'>
										<InfoIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/adminPass/admin/updateAdmins'>
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
