const as = document.querySelectorAll("li a");
const tabs = document.querySelectorAll("div[role='tabpanel']");

as.forEach((a) => {
    a.addEventListener("click", (event) => {
		console.log(event);

        tabs.forEach((tab) => {
            console.log("#" + tab.id);
            console.log(a.href.replace("http://127.0.0.1:3000/lab-3/index.html?serverWindowId=87685475-3585-4de4-ab3b-af221e24c596", ""));

            //the replace thing (to access just the ending thing) was found from https://www.geeksforgeeks.org/javascript/how-to-remove-text-from-a-string-in-javascript/
            if("#" + tab.id == a.href.replace("http://127.0.0.1:3000/lab-3/index.html?serverWindowId=87685475-3585-4de4-ab3b-af221e24c596", "")) {
                console.log(tab);

                tab.style.visibility = "visible";

                // a.style.text-decoration = "underline";
                // a.parentElement().style.backgroundColor = white;
                //thank you https://www.w3schools.com/jsref/met_element_setattribute.asp
                a.parentElement.setAttribute("class", "current");
            }
            else
            {
                tab.style.visibility = "hidden";
                a.parentElement.removeAttribute("class");
            }
        });
	});
});