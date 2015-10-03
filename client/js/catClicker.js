// Model
var model = {
	currentCat: null,
	cats: [
	{
		clickCount: 0,
		name: "Bob",
		imgSrc: "client/img/cat-1.jpg"
	},
	{
		clickCount: 0,
		name: "Clark",
		imgSrc: "client/img/cat-2.jpg"
	},
	{
		clickCount: 0,
		name: "Jack and Jill",
		imgSrc: "client/img/cat-3.jpg"		
	},
	{
		clickCount: 0,
		name: "Sufjan",
		imgSrc: "client/img/cat-4.jpg"
	},
	{
		clickCount: 0,
		name: "Brittney",
		imgSrc: "client/img/cat-5.jpg"
	}
	]
};

var controller = {
	init: function() {
		model.currentCat = model.cats[0];

		catListView.init();
		catView.init();
	},
	getCurrentCat: function() {
		return model.currentCat;
	},
	getCats: function() {
		return model.cats;
	},
	setCurrentCat: function(cat) {
		model.currentCat = cat;
	},
	incrementCounter: function() {
		model.currentCat.clickCount++;
		catView.render();		
	}
};

var catView = {
	init: function () {
		this.clickCounter = document.getElementById('click-counter');
		this.catImg = document.getElementById("cat-img");
		this.catImg.addEventListener('click', function(e){
			controller.incrementCounter();
		});
		this.render();
	},
	render: function () {
		var currentCat = controller.getCurrentCat();
		this.clickCounter.innerHTML = "You have clicked" + " " + currentCat.name + ":" + " " + currentCat.clickCount + " " + "times";
		this.catImg.src = model.currentCat.imgSrc;
	}
};

var catListView = {
	init: function() {
		catListView.render();
	},
	render: function () {
		var cats = controller.getCats();

		for (var i = 0; i < cats.length; i++) {
		var cat	= cats[i],
			elem = document.createElement('button'),
			catList = document.getElementById('cat-list');

		elem.textContent = cat.name;
		elem.className = 'cat-list-item';
		
			elem.addEventListener('click', (function(cat) {
				return function() {
					controller.setCurrentCat(cat);
					catView.render();
				};
			})(cat));
			catList.appendChild(elem);
		};
	}
};
controller.init();

