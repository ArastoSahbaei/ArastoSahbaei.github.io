import React from 'react'
import APIService from '../shared/api/service/APIService'

export const HomeView: React.FC = (): JSX.Element => {

	return (
		<div>
			<h1>This is the homeview</h1>
			<button onClick={() => APIService.registerNewUser({ username: 'Alibabaaaaaaaaaaa', password: 'arasto' })}>registerNewUser</button> <br />
			<button onClick={() => APIService.getAllUsers()}>getAllUsers</button> <br />
			<button onClick={() => APIService.getUserWithID('5fde1a0a3310dd240c6a21d7')}>getUserWithID</button> <br />
			<button onClick={() => APIService.getUserWithQuery('Alibabaaaaaaaaaaa')}>getUserWithQuery</button> <br />
			<button onClick={() => APIService.authenticatedRouteExample('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZWExNDUxNTBmMWI4MGM3MDM0YTNkZSIsImlhdCI6MTYwOTE3NjU2MCwiZXhwIjoxNjA5MTgwMTYwfQ.Tanyjnh8Fro4kVCK4CLRmtWEtKqGzIINigghKpH6rbs')}>authenticatedRoute</button>
		</div>
	)
}
