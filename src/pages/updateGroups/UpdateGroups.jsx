import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';

import './updateGroups.css';

const UpdateGroups = () => {
  return (
    <div className='updateGroups'>
      <p>Update Group</p>
			<div className="form">
				<div>
					<div>
						<Diversity3Icon style={{color: "#666"}}/>
					</div>
					<label htmlFor="grp"></label>
					<select name="grp" id="grp">
						<option value="null">Group</option>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
					</select>
				</div>
				<div>
					<div>
						<Diversity3Icon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='new name Group' />
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

export default UpdateGroups
