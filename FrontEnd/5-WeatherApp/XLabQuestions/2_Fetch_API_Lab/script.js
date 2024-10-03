async function getUserInfo() {
	const username = document.getElementById('username').value
	const url = `https://api.github.com/users/${username}`

	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('User not found')
		}
		const data = await response.json()

		// DOM Manipulation to display the result
		const resultsDiv = document.getElementById('results')
		resultsDiv.innerHTML = `
            <p>Username: ${data.login}</p>
            <p>Public repositories count: ${data.public_repos}</p>
        `
	} catch (error) {
		const resultsDiv = document.getElementById('results')
		resultsDiv.innerHTML = `
            <p>${error.message}</p>
        `
	}
}
