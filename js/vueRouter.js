// A constant is variable that has a value that will NOT change down the line
// 'one' is the value we set the 'to' attribute in our <router-link> elements
const Gazos = {
	// use the reverse ` quote to use a multiple line string here, to be converted into HTML5 elements
	// incorperating bootstrap classes
	template: `<div class = 'text-center'>
					<h3> Northern Pygmy-owl along Gazos Creek in Pescadero, CA </h3>
					<img class = 'img-fluid' src = 'img/pygmy.jpg' alt='northern pygmy-owl'>
				</div>`
} 
const Waddell = {
	template: `<div class = 'text-center'>
					<h3> Northern Pygmy-owl in the West Waddell Regional Wilderness, CA </h3>
					<img class = 'img-fluid' src = 'img/pyg2.jpg' alt='northern pygmy-owl'>
				</div>`
			} 
const BigBasin = {
	template: `<div class = 'text-center'>
					<h3> Northern Pygmy-owl in Big Basin Redwoods State Park, CA</h3>
					<img class = 'img-fluid' src = 'img/pyg3.jpg' alt='northern pygmy-owl'>
				</div>`
} 

// declaring a new variable for router to be used in this application
const router = new VueRouter({
	routes: [
		{
			path: '/Gazos',
			component: Gazos
		},
		{
			path: '/Waddell',
			component: Waddell
		},
		{
			path: '/BigBasin',
			component: BigBasin
		}
	]
})

//finally, below I am declaring, routing and mounting this data onto the <router-view> in our div with an id of 'content'
var pygmyOwlPhotos = new Vue ({
	router,
	el: "#app",
	data: {

	},
	methods: {

	}
	// 'mount' is the built in method we are using here for our code above to adhere to the div
}).$mount('#app')




