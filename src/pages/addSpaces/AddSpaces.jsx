import React from 'react';
import SpaceBarIcon from '@mui/icons-material/SpaceBar';

import './addSpaces.css';

const AddSpaces = () => {
  return (
    <div className='addSpaces'>
      <p>Add Space</p>
			<div className="form">
				<div>
					<div>
						<SpaceBarIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='space' />
				</div>
				<div>
					<div>
						<SpaceBarIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='space Type' />
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

export default AddSpaces
