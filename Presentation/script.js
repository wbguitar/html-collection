function openTab(evt, tabName) {
    console.log(`opening tab ${tabName}`)
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active')
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    var element = document.getElementById(tabName)
    element.style.display = "block";
    evt.currentTarget.classList.add("active")
}

// select first tab on load
var tablinks = document.getElementsByClassName("tablinks")
tablinks[0].click()