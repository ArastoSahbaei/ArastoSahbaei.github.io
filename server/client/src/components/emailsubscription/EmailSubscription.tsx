import './EmailSubscription.css'

export const EmailSubscription = () => {

	const x = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault()
	}

	return (
		<div>
			<span>Bli del av en rörelse och ta den av erbjudanden samt nyheter</span>
			<form>
				<input placeholder='ange din email' />
				<button onClick={(event) => x(event)}> prenumerera</button>
			</form>
		</div>
	)
}
