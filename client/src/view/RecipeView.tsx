import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export const RecipeView = () => {
	const history = useHistory()
	const params = useParams<any>()
	const [data, setData] = useState<any>()

	/* 	const retrieveDataForRecipe = (recipeId: string) => {
		return service.getRecipeById(recipeId).then((response: any) => {
			setData(response.data)
		})
	} */

	const setRecipeData = () => {
		if (history.location.state) {
			setData(history.location.state)
		} else {
			/* retrieveDataForRecipe(params.id) */
		}
	}

	useEffect(() => {
		setRecipeData()
	}, [history?.location?.state])

	return (
		<div>
			<p>_id: {data?._id}</p>
			<p>title: {data?.title}</p>
			<p>duration: {data?.duration}</p>
			<p>ingrediens: {data?.ingrediens}</p>
			<p>description: {data?.description}</p>
			<p>originCountry: {data?.originCountry}</p>
			<p>language: {data?.language}</p>
			<p>views: {data?.views}</p>
		</div>
	)
}
