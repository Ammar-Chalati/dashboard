import React from 'react'
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

import './addTypes.css';

const AddTypes = () => {
  return (
    <div className='addTypes'>
      <p>Add Type</p>
			<div className="form">
				<div>
					<div>
						<ElectricCarIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='type'/>
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

export default AddTypes
