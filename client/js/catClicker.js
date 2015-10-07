// Model
var model = {
	currentCat: null,
	cats: [
	{
		clickCount: 0,
		name: "Amelia",
		imgSrc: "client/img/cat-1.jpg"
	},
	{
		clickCount: 0,
		name: "Barney",
		imgSrc: "client/img/cat-2.jpg"
	},
	{
		clickCount: 0,
		name: "Susan and Chip",
		imgSrc: "client/img/cat-3.jpg"		
	},
	{
		clickCount: 0,
		name: "Aaron",
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
		adminView.init();
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
		this.catName = document.getElementById('catName');
		this.catClicks = document.getElementById('catClicks');
		this.catImg = document.getElementById("cat-img");
		this.catImg.addEventListener('click', function(e){
			controller.incrementCounter();
		});
		this.render();
	},
	render: function () {
		var currentCat = controller.getCurrentCat();
		this.clickCounter.innerHTML = "You have clicked" + " " + currentCat.name + ":" + " " + currentCat.clickCount + " " + "times";
		this.catName.value = currentCat.name;
		this.catClicks.value = currentCat.clickCount;
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
		elem.className = 'button';
		
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

var adminView = {
	init: function() {
		adminView.render();
	},
	render: function() {
		var adminButton = document.getElementById('admin-button'),
			form = document.getElementById('form'),
			overlay = document.getElementById('overlay'),
			close = document.getElementById('close');

		adminButton.addEventListener('click', function() {
			overlay.style.visibility = (overlay.style.visibility === "visible") ? "hidden" :"visible";
		});
		close.addEventListener('click', function() {
			overlay.style.visibility = (overlay.style.visibility === "visible") ? "hidden" :"visible";
		});
	}
};

controller.init();

