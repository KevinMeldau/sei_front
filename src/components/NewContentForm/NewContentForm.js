const NewContentForm = (props) => {
    return (
        <div>
            <form id="newContent" name="newContent"onSubmit={(e) => {
                e.preventDefault();
                props.func();
            }}>
                <input type="text" placeholder="Title" name="title" id=""/>
                <input type="text" placeholder="Subject" name="subject" id=""/>
                <input type="text" placeholder="Unit" name="unit" id=""/>
                <input type="text" placeholder="Video Link" name="videoLink" id=""/>
                <input type="text" placeholder="Markdown Link" name="markdownLink" id=""/>
                <input type="text" placeholder="Resource Links" name="resourceLinks" id=""/>
                <input type="text" placeholder="Tags" name="tags" id=""/>
                <button type="submit">Submit Data</button>
            </form>
        </div>
    );
}

export default NewContentForm;