

export default function Comments(){


    return(
        <div>
            <h2>Comments</h2>
            <form >
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />
                <label htmlFor="comment">Comment:</label>
                <textarea id="comment" name="comment" required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}