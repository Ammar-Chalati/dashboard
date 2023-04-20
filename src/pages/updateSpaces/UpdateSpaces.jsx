import React from 'react';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';

import './updateSpaces.css';

const UpdateSpaces = () => {
  return (
    <div className='updateSpaces'>
      <p>Update Space</p>
			<div className="form">
				<div>
					<div>
						<SpaceBarIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='space Name' />
				</div>
				<div>
					<div>
						<SpaceBarIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='Group id' />
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

export default UpdateSpaces
