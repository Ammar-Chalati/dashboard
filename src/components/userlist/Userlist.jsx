import React from 'react';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import "./userlist.css";

const Userlist = () => {
	return (
		<div className='userlist'>
			<div className="list">
				<table>
					<thead>
						<tr>
							<td>Email</td>
							<td>form</td>
							<td colSpan={2}>type</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Email@gmail.com</td>
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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
							<td>manager</td>
							<td>phone_user</td>
							<td>
								<div>
									<Link to='/'>
										<CalendarMonthIcon style={{"color" : "#6b00c6", 'cursor' : 'pointer'}} />
									</Link>
									<Link to='/users/updateUsers'>
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

export default Userlist
