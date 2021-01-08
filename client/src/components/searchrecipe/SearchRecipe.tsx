import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDebounce } from '../../hooks/useDebounce'
import APIService from '../../shared/api/service/APIService'
import { LoadingBar } from '../loadingbar/LoadingBar'
import './SearchRecipe.css'

export const SearchRecipe = () => {
	const history = useHistory()
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [serverResponse, setServerResponse] = useState<any[]>([])
	const [isSearching, setIsSearching] = useState(false)
	const debouncedSearchTerm = useDebounce(searchTerm, 500)

	const directToRecipeView = (state: any) => {
		//TODO: Determine if the clicked result is a recipe or a user
		history.push(`/recipe/${state._id}`, state)
		setServerResponse([])
	}

	const userIsSearching = async () => {
		try {
			if (debouncedSearchTerm) {
				setIsSearching(true)
				const response = await APIService.getUserWithQuery(debouncedSearchTerm)
				setServerResponse(response.data)
				setIsSearching(false)
			} else {
				setServerResponse([])
			}
		} catch (error) {
			setIsSearching(false)
		}

	}

	const displaySearchResults = () => {
		return <div className="dropdown-content">
			{serverResponse.map(results => (
				<div className="dropdown-value" key={results._id} onClick={() => directToRecipeView(results)}>
					<img src={'foodImg'} alt={''} style={{ width: 50, height: 50 }} />
					<h3>{results?.title}</h3>
					<p>Arasto Sahbaei</p>
					<hr />
				</div>
			))}
		</div>
	}

	useEffect(() => {
		userIsSearching()
	}, [debouncedSearchTerm])

	return (
		<div className="searchRecipeContainer">
			<div className="searchRecipeContent">
				<input className="searchInput" placeholder="Search Recipe" onChange={e => setSearchTerm(e.target.value)} />
				{isSearching && <LoadingBar />}
				{displaySearchResults()}
			</div>
		</div>
	)
}
