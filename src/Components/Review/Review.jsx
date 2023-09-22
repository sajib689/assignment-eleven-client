

const Review = () => {
    const handlePost = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value 
        const imageURl = form.imageURl.value
        const comment = form.comment.value
        const reviews = {name,imageURl, comment}
        fetch('http://localhost:3000/reviews',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
       <div className="grid grid-cols-2 bg-base-200">
        
         <form onSubmit={handlePost} className="grid grid-cols">
            <input name="name" type="text" placeholder="Type here name" className="mb-3 input input-bordered w-full max-w-xs" />
            <input name="imageURl" type="text" placeholder="Type here image URL" className="mb-3 input input-bordered w-full max-w-xs" />
            <textarea name="comment" type="" placeholder="Type here message" className="mb-3 input input-bordered w-full max-w-xs" />
            <input className="btn max-w-xs text-white bg-[#0178BD] hover:bg-[#0487d3]" type="submit" value='Post'/>
        </form>
        <div>review</div>
       </div>
    );
};

export default Review;