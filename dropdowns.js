

const dropdowns = () => {
    
    const dropdownLists = document.querySelectorAll(".dropdown-list") 

    dropdownLists.forEach((dropdown) => {

        dropdown.classList.add("toggle-dropdown")

        // EVENT LISTENER FOR DROPDOWN NAMES
        dropdown.parentNode.addEventListener('mouseover', () => {
            dropdown.classList.toggle("toggle-dropdown");
        })

        dropdown.parentNode.addEventListener('mouseout', () => {
            dropdown.classList.toggle("toggle-dropdown")
        })

        // EVENT LISTENER FOR DROPDOWN LISTS
        dropdown.addEventListener('mouseover', () => {
            dropdown.previousSibling.classList.toggle("toggle-dropdown");
        })

        dropdown.addEventListener('mouseout', () => {
            dropdown.previousSibling.classList.toggle("toggle-dropdown");
        })

    });

};

export default dropdowns;
