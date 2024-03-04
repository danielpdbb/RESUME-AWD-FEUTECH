function changeBackgroundColor() {
    // Select the elements with the classes "page," "top-bar," "title," "side-bar," and "greyed"
    var page = document.querySelector(".page");
    var topBar = document.querySelector(".top-bar");
    var webDev = document.querySelector(".title");
    var sideBar = document.querySelector(".side-bar");
    var name = document.querySelector(".name");

    // Select the elements with the tags "h3" and the class "light"
    var h3Elements = document.querySelectorAll("h3");
    var lightElements = document.querySelectorAll(".light");

    // Select the elements with the class "greyed"
    var greyedElements = document.querySelectorAll(".greyed");

    // Check the current background color of the page
    var currentPageColor = page.style.backgroundColor;

    // Check the current background color of the top-bar
    var currentTopBarColor = topBar.style.backgroundColor;

    // Check the current background color of the title
    var currentWebColor = webDev.style.backgroundColor;

    // Check the current background color of the side-bar
    var currentSideBarColor = sideBar.style.backgroundColor;

    var currentNameColor = name.style.backgroundColor;

    // If the page is not black or the top-bar is not orange, change the background color of the page to black, the top-bar to orange, the side-bar to a new color, and change the color of h3, elements with the class "light," and elements with the class "greyed"
    if (currentPageColor !== "black" || currentTopBarColor !== "orange") {
        page.style.backgroundColor = "black";
        topBar.style.backgroundColor = "orange";
        sideBar.style.backgroundColor = "#4A4A4A"; // Replace "newColor" with the desired color
        page.style.color = "white"; // Set font color to white
        webDev.style.color = "white";
        name.style.color = "black";

        // Change the color of each h3 element to white
        h3Elements.forEach(function(h3Element) {
            h3Element.style.color = "white";
        });

        // Change the color of each element with the class "light" to white
        lightElements.forEach(function(lightElement) {
            lightElement.style.color = "white";
        });

        // Change the color of each element with the class "greyed" to white
        greyedElements.forEach(function(greyedElement) {
            greyedElement.style.color = "black";
        });
    } else {
        // Reset the styles to their default or styles specified in the CSS
        page.style.backgroundColor = "";
        topBar.style.backgroundColor = "";
        sideBar.style.backgroundColor = ""; // Replace "newColor" with the desired color
        page.style.color = ""; // Set font color to black
        webDev.style.color = "";
        name.style.color = "";
        
        // Reset the color of each h3 element to its default or styles specified in the CSS
        h3Elements.forEach(function(h3Element) {
            h3Element.style.color = "";
        });

        // Reset the color of each element with the class "light" to its default or styles specified in the CSS
        lightElements.forEach(function(lightElement) {
            lightElement.style.color = "";
        });

        // Reset the color of each element with the class "greyed" to its default or styles specified in the CSS
        greyedElements.forEach(function(greyedElement) {
            greyedElement.style.color = "";
        });
    }
}
