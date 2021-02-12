import React from 'react'

export const UserProfileView: React.FC = () => {

	return (
		<div>
			<h1>Your info</h1>
			<p>Name:</p>
			<p>Email:</p>
			<button>Change Password</button>
			<hr />

			<h1>Shipping Address</h1>
			<p>Name and Surname</p>
			<p>Street Address</p>
			<p>Postcode City</p>
			<p>Country</p>
			<p>Phone number</p>

			<hr />

			<h1>Previous Orders:</h1>
			<p>None</p>

			<hr />
			<button> Logout </button>
		</div>
	)
}
