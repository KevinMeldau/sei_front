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
function addContent() {
    //get form content
    //convert form to object
    const formData = {
        title: document.forms["newContent"].elements["title"].value,
        subject: document.forms["newContent"].elements["subject"].value,
        unit: "5",
        videoLink: document.forms["newContent"].elements["videoLink"].value,
        markdownLink: document.forms["newContent"].elements["markdownLink"].value,
        resourceLink: document.forms["newContent"].elements["resourceLinks"].value,
        tags: document.forms["newContent"].elements["tags"].value
    }
    // console.log(formData);
    

    fetch("http://localhost:3000/lessons",
        {method: "POST",
        mode: "cors",
        headers: {"Content-type": "Application/json"},
        body: JSON.stringify({
            title: document.forms["newContent"].elements["title"].value,
            subject: document.forms["newContent"].elements["subject"].value,
            unit: "5",
            videoLink: document.forms["newContent"].elements["videoLink"].value,
            markdownLink: document.forms["newContent"].elements["markdownLink"].value,
            resourceLinks: document.forms["newContent"].elements["resourceLinks"].value,
            tags: document.forms["newContent"].elements["tags"].value
        })
    }); 
    
    //send JSON to back end
}

//function to update content
function editContent(content) {
    console.log(content);
    //get target form content
    //create form with content filled in
    //setState to update content
    //send updated content to back end
}

//function to delete content
function deleteContent(content) {
    //get target content
    console.log(content);
    //send delete request to backend
    fetch(`http://localhost:3000/lessons/${content.id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {"Content-type": "Application/json"},
        body: JSON.stringify({
            id: content.id,
            title: content.title,
            subject: content.subject,
            unit: content.unit,
            videoLink: content.videoLink,
            markdownLink: content.markdownLink,
            resourceLinks: content.resourceLinks,
            tags: content.tags
        })
    })
}

//function to update state to only show content with certain tags
//pass array of all lessons and Unit Number
function filterContent(lessons, unitNum) {
    //create new array for content pertaining to specific unit
    const unitContent = [];

    lessons.forEach(lesson => {
        if(lesson.unit === unitNum) {
            unitContent.push(lesson);
        }
    });
    
    return unitContent;
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