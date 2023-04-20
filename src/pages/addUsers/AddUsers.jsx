import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import EmailIcon from '@mui/icons-material/Email';

import './addUsers.css'

const AddUsers = () => {
  return (
    <div className='addUsers'>
      <p>Add Users</p>
			<div className="form">
				<div>
					<div>
						<EmailIcon style={{color: "#666"}}/>
					</div>
					<input type="email" placeholder='Email'/>
				</div>
				<div>
					<div>
						<Diversity3Icon style={{color: "#666"}}/>
					</div>
					<label htmlFor="usr"></label>
					<select name="usr" id="usr">
						<option value="null">Group</option>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
					</select>
				</div>
				<div className="button">
					<div>
						<p>
							add
						</p>
					</div>
					<div>
						<p>
							cancel
						</p>
					</div>
				</div>
			</div>
    </div>
  )
}

export default AddUsers
