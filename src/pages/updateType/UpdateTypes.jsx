import React from 'react'
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

import './updateTypes.css';

const UpdateTypes = () => {
  return (
    <div className='updateTypes'>
      <p>Update Type</p>
			<div className="form">
				<div>
					<div>
						<ElectricCarIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='old Type' />
				</div>
				<div>
					<div>
						<ElectricCarIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='new Type' />
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

export default UpdateTypes
