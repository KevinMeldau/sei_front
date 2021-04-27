//File containing and exporting functions regarding content and how it is displayed

export default {
    getContent,
    addContent,
    editContent,
    deleteContent,
    filterContent,
    favContent,
    removeFavContent,
}

//function to get and store content locally
async function getContent() {
    console.log("Hello World");

    const resources = [];
    //get content
    

    //store in array?
    return resources
}

//function to add content
function addContent(e, form) {
    //show form for adding content
    //get form content
    //send form content to back end
}

//function to update content
function editContent(e, contentId) {
    //get target form content
    //create form with content filled in
    //setState to update content
    //send updated content to back end
}

//function to delete content
function deleteContent(e, contentId) {
    //get target content
    //send delete request to backend
}

//function to update state to only show content with certain tags
function filterContent(e, tags) {
    e.preventDefault();
    //take tags
    //set state to only show content marked with tags
}

//function to favorite content
function favContent(e, contentId) {
    //get user
    //get target content
    //post target content to user favorites list
    //update state to show content as favorite
}

//function to remove favorite content
function removeFavContent(e, user, contentId) {
    //get user
    //get target
    //post target content to remove from user favorites list
    //update state to show content as not favorite
}