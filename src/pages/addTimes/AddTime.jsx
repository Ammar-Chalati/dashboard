import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import './addTime.css'

const AddTime = () => {
  return (
    <div className='addTime'>
      <p>Add Time</p>
			<div className="form">
				<div>
					<div>
						<AccessTimeIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='Safe Time'/>
				</div>
				<div>
					<div>
						<Diversity3Icon style={{color: "#666"}}/>
					</div>
					<label htmlFor="tm"></label>
					<select name="tm" id="tm">
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

export default AddTime
