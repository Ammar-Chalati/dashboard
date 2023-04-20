import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import './updateTime.css'

const UpdateTime = () => {
  return (
    <div className='updateTime'>
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
					<label htmlFor="ut"></label>
					<select name="ut" id="ut">
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
							update
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

export default UpdateTime
