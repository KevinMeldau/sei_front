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
function getContent() {
    console.log("Hello World");
    //get content
    //store in array?
    //return array
}

//function to add content
function addContent() {
    //show form for adding content
    //get form content
    //send form content to back end
}

//function to update content
function editContent() {
    //get target form content
    //create form with content filled in
    //setState to update content
    //send updated content to back end
}

//function to delete content
function deleteContent() {
    //get target content
    //send delete request to backend
}

//function to update state to only show content with certain tags
function filterContent(/*tags*/) {
    //take tags
    //set state to only show content marked with tags
}

//function to favorite content
function favContent() {
    //get user
    //get target content
    //post target content to user favorites list
    //update state to show content as favorite
}

//function to remove favorite content
function removeFavContent() {
    //get user
    //get target
    //post target content to remove from user favorites list
    //update state to show content as not favorite
}