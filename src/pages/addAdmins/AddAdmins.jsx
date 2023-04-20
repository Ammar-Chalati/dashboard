import React from 'react';
import { Link } from 'react-router-dom';

import './addAdmins.css'

const btns = document.querySelectorAll(".btn ");

btns.forEach(function (ele) {
  ele.onclick = function() {
    this.classList.toggle("on");
    this.classList.toggle("off");
  };
})


const AddAdmins = () => {
  return (
    <div className='addAdmins'>
      <p>Add Admin</p>
			<div className="information">
				<input type="text" placeholder='name'/>
				<input type="email" placeholder='Email'/>
			</div>
			<div className="button">
				<Link>
					Add
				</Link>
				<Link>
					cancel
				</Link>
			</div>
			<hr />
			<div className="permissions">
				<div>
					<div className="top">
						<p>Users manegment</p>
						<div className="btn on">
							<div className="turn"></div>
						</div>
					</div>
					<div className="bottom">
						<div className="read">
							<p>Read</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
						<div className="write">
							<p>Write</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="top">
						<p>Group Managment</p>
						<div className="btn on">
							<div className="turn"></div>
						</div>
					</div>
					<div className="bottom">
						<div className="read">
							<p>Read</p>
							<div className="btn off">
								<div className="turn"></div>
							</div>
						</div>
						<div className="write">
							<p>Write</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="top">
						<p>Spaces Managment</p>
						<div className="btn off">
							<div className="turn"></div>
						</div>
					</div>
					<div className="bottom">
						<div className="read">
							<p>Read</p>
							<div className="btn off">
								<div className="turn"></div>
							</div>
						</div>
						<div className="write">
							<p>Write</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="top">
						<p>Cars Managment</p>
						<div className="btn off">
							<div className="turn"></div>
						</div>
					</div>
					<div className="bottom">
						<div className="read">
							<p>Read</p>
							<div className="btn off">
								<div className="turn"></div>
							</div>
						</div>
						<div className="write">
							<p>Write</p>
							<div className="btn off">
								<div className="turn"></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="top">
						<p>Time Managment</p>
						<div className="btn on">
							<div className="turn"></div>
						</div>
					</div>
					<div className="bottom">
						<div className="read">
							<p>Read</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
						<div className="write">
							<p>Write</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="top">
						<p>Visitor Managment</p>
						<div className="btn off">
							<div className="turn"></div>
						</div>
					</div>
					<div className="bottom">
						<div className="read">
							<p>Read</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
						<div className="write">
							<p>Write</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="top">
						<p>Statistical Managment</p>
						<div className="btn off">
							<div className="turn"></div>
						</div>
					</div>
					<div className="bottom">
						<div className="read">
							<p>Read</p>
							<div className="btn off">
								<div className="turn"></div>
							</div>
						</div>
						<div className="write">
							<p>Write</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="top">
						<p>Admin Managment</p>
						<div className="btn on">
							<div className="turn"></div>
						</div>
					</div>
					<div className="bottom">
						<div className="read">
							<p>Read</p>
							<div className="btn off">
								<div className="turn"></div>
							</div>
						</div>
						<div className="write">
							<p>Write</p>
							<div className="btn on">
								<div className="turn"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default AddAdmins
