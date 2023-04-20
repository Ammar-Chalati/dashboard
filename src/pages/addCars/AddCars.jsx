import React from 'react'
import ElectricCarIcon from '@mui/icons-material/ElectricCar';

import './addCars.css';

const AddCars = () => {
  return (
    <div className='addCars'>
      <p>Add Car</p>
			<div className="form">
				<div>
					<div>
						<ElectricCarIcon style={{color: "#666"}}/>
					</div>
					<label htmlFor="grp"></label>
					<select name="grp" id="grp">
						<option value="null">type</option>
						<option value="A">A</option>
						<option value="B">B</option>
						<option value="C">C</option>
						<option value="D">D</option>
					</select>
				</div>
				<div>
					<div>
						<ElectricCarIcon style={{color: "#666"}}/>
					</div>
					<input type="text" placeholder='car' />
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

export default AddCars
