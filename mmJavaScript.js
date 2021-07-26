function getRandomMessage() {

	let message = ["If you want to succeed in the world you must make your own opportunities. By John B. Gough", "The man who waits for some seventh wave to toss him on dry land will find that the seventh wave is a long time a coming. By John B. Gough", "You can commit no greater folly than to sit by the roadside until someone comes along and invites you to ride with him. By John B. Gough"];

	for (var i = 0; i < message.length; i++) {

		randomMessage = message[Math.floor(Math.random() * 3)];

		document.getElementById("displayMessage").innerHTML = randomMessage;

	}

	return randomMessage;

}