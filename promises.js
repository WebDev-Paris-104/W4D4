/**
 * Steps to prepare Pasta like a chef.
 */

const steps = [
	"Put water in a saucepan and make it boil!",
	"While the water is heating, put some grinded pepper on a pan and heat them.",
	"Once the wonderful aroma of pepper take over your kitchen, add some tomato sauce.",
	"The water should boil by now, add those pastas!",
	".reduce() the tomato sauce so that it becomes really dense, add some salt to it.",
	"At half the cooking time of the pasta, get them out of the water and into the pan.",
	"Add some of the cooking water like you would do for a risotto and finish cooking the pasta.",
	'Add some parmigiano, and you can yell "Ma che bella la vita cuando hai la pansa piena"',
]

function getInstructions(index) {
	console.log(steps[index])
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			if (!steps[index]) {
				return reject("No instructions here")
			}

			resolve(steps[index])
		}, Math.random() * 2000)
	})
}

// const arrayOfPromises = steps.map((instruction, index) => {
// 	return getInstructions(index)
// })

// console.log(arrayOfPromises)

// Promise.all(arrayOfPromises)
// 	.then((resolvedPromises) => console.log(resolvedPromises))
// 	.catch((error) => console.log(error))

async function waitingInstruction() {
	try {
		console.log("We are here!")
		const arrayOfPromises = steps.map((instruction, index) =>
			getInstructions(index)
		)
		// const firstPromise = await getInstructions(0)
		// console.log("FIRST================", firstPromise)
		// const secondPromise = await getInstructions(1)
		// const thirdPromise = await getInstructions(2)
		// const fourthPromise = await getInstructions(3)
		// const fifthPromise = await getInstructions(4)
		// const sixthPromise = await getInstructions(5)
		// const seventhPromise = await getInstructions(6)
		const resolvedPromises = await Promise.all(arrayOfPromises)
		console.log("In the async await: ", resolvedPromises)
	} catch (error) {
		console.log(error)
	}
}
waitingInstruction()
// getInstructions(0)
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.then((newIndex) => {
// 		return getInstructions(newIndex)
// 	})
// 	.catch((error) => console.log(error))

// const promise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		if (Math.random() > 0.5) {
// 			return resolve("this promise resolved")
// 		}
// 		return reject("The promise failed")
// 	}, Math.random() * 2000)
// })

// promise
// 	.then((success) => console.log(success))
// 	.catch((error) => console.log(error))

// getInstructions(
// 	0,
// 	(newStepIndex) => {
// 		console.log(newStepIndex)
// 		getInstructions(
// 			newStepIndex,
// 			(newStepIndex) => {
// 				console.log(newStepIndex)
// 				getInstructions(
// 					newStepIndex,
// 					(newIndex) => {
// 						getInstructions(
// 							newIndex,
// 							() => {},
// 							() => {}
// 						)
// 					},
// 					(error) => {
// 						console.log(error)
// 					}
// 				)
// 			},
// 			(error) => {
// 				console.log(error)
// 			}
// 		)
// 	},
// 	(error) => {
// 		console.log(error)
// 	}
// )
