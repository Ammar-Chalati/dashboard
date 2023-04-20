import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';

import './addGroups.css'

const AddGroups = () => {
  return (
    <div className='addGroups'>
      <p>Group</p>
			<div className="form">
				<div>
					<div>
						<Diversity3Icon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='name Group'/>
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

export default AddGroups
