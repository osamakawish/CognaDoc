

var fileName = "Home";

var Chapters = [
	"Home",
	"Introduction",
	"Devices 1",
	"Collections 1",
	"Strings",
	"Arithmetic",
	"Logic",
	"Collections 2",
	"Devices 2",
	"System",
	"GUI Components",
	"GUI Subdevices",
	"Project Design",
	"Appendices"
];

Chapters["Introduction"] = [
	"Introduction",
	"Philosphies",
	"Outline",
	"Comments"
];

Chapters["Devices 1"] = [
	"Introduction",
	"Characters",
	"Logic",
	"Arithmetic",
	"Devices"
];

Chapters["Collections 1"] = [
	"Introduction",
	"Sets",
	"Maps",
	"Function",
	"Strings",
	"Arrays",
	"Databases",
	"Devices"
];

Chapters["Strings"] = [
	"Introduction"
];

Chapters["Arithmetic"] = [
	"Introduction"
];

Chapters["Logic"] = [
	"Connectives",
	"Quantifiers",
	"Errors", // Mention the philosophy behind why errors = false.
	"Actions", // These are commands that do stuff, such as x:= x+1;
	"Loops",
	"For-If Loops"
];

Chapters["Collections 2"] = [
	"Introduction"
];

Chapters["Devices 2"] = [
	"Functions",
	"Classes",
	"Models" // Under models, remind the readers they have seen them already.
];

Chapters["System"] = [
	"Introduction"
];

Chapters["GUI Components"] = [
	"Introduction"
];

Chapters["GUI Subdevices"] = [
	"Introduction"
];

Chapters["Project Design"] = [
	"Introduction"
];

Chapters["Appendices"] = [
	"Built-In Constants",
	"Built-In Devices", 
	"Table of Symbols"
];

// Applied to links in navigation bar.
function createLinksUL() {
	// Creates a set of all links in the Chapters array from as a UL.
	
	var links = '<ul>';

	// Create the unordered list of links to different sources.
	for (var i = 0; i < Chapters.length; i++) {
		
		// List item of i-th chapter added.
		links = links.concat('<li');

		// If it's home, change the backround colour of the list item.
		if (Chapters[i] == fileName) {
			links = links.concat(" style='background-color: #E0A038;'>", Chapters[i], "</li>");
		}

		else {
			links = links.concat("><a href='", Chapters[i], "'.html>", Chapters[i], '</a></li>');
		}		
	}

	links = links.concat('</ul>');
	// ^ Adds the end tag to the unordered list.

	return links;
}

var list = createLinksUL();
//alert(list);


// Add the unordered list to the navigation.

document.getElementById('navigation').innerHTML = list;


// Add the links to the list of 
var chaps = document.getElementById('chaps');
//alert(chaps);

var Chs = chaps.getElementsByTagName('dt');

//alert(Chs);

for (var i = 0; i < Chs.length; i++) {
	Chs[i].innerHTML = "<a href=" + Chapters[i] + ".html>" + Chs[i].innerHTML + "</a>";
}


/* 
 * Now, we add the dropdowns when nav ul li is hovered over.
 * 
 * The dropdown menus will cover all links containing the different submenus defined by the list.
 * 
 */

