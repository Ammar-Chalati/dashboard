import React from 'react'

import "./addVisitor.css"

const AddVisitor = () => {
  return (
    <div className='AddVisitor'>
			<h3>Add Visitor</h3>
			<div className="date">
				<div className="from">
					<p>From</p>
					<div className="oclock">
						<div>
							<h5>Date</h5>
							<input type="date" />
						</div>
						<div>
							<h5>Time</h5>
							<input type="time" />
						</div>
					</div>
				</div>
				<div className="to">
				<p>To</p>
					<div className="oclock">
						<div>
							<h5>Date</h5>
							<input type="date" />
						</div>
						<div>
							<h5>Time</h5>
							<input type="time" />
						</div>
					</div>
				</div>
			</div>
			<div className="searchVisitor">
				Search
			</div>
    </div>
  )
}

export default AddVisitor
