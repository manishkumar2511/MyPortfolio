function openTab(tabName) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabContents = document.getElementsByClassName("tab-contents");
    
    // Remove active-link class from all tab-links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    // Remove active-tab class from all tab-contents
    for (let tabcontent of tabContents) {
        tabcontent.classList.remove("active-tab");
    }
    
    // Add active-link class to the clicked tab
    document.querySelector('.tab-links[onclick="openTab(\'' + tabName + '\')"]').classList.add("active-link");
    // Add active-tab class to the clicked tab content
    document.getElementById(tabName).classList.add("active-tab");
}