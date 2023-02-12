fetch('https')
	.then((response) => {
		return response.json();
	})
	.then((users) => {
		console.log(places);
	});
