

const Review = () => {
    return (
       <div className="grid grid-cols-2">
        
         <div className="grid grid-cols">
            <input type="text" placeholder="Type here name" className="mb-3 input input-bordered w-full max-w-xs" />
            <textarea type="" placeholder="Type here message" className="mb-3 input input-bordered w-full max-w-xs" />
            <input className="btn max-w-xs text-white bg-[#0178BD] hover:bg-[#0487d3]" type="submit" value='Post'/>
        </div>
        <div>review</div>
       </div>
    );
};

export default Review;