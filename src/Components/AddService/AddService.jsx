import Swal from "sweetalert2";

const AddService = () => {
    const handleAddService = e => {
        e.preventDefault();
        const form = e.target
        const title = form.title.value 
        const img = form.img.value 
        const description = form.description.value
        const price = form.price.value
        const add = {title, img, description, price}
        fetch(`https://assignment-eleven-server-r1xu.vercel.app/services`,{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
        .then( res => res.json() )
        .then( data => {
            console.log(data)
            if (data.acknowledged === true) {
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Delete Success",
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
        })
    }
    return (
        <div className="w-1/3 mx-auto ">
            <form onSubmit={handleAddService} className="grid lg:grid-cols md:grid-cols sm:grid-cols mt-20 ">
            <input required name="title" type="text" placeholder="Type here title" className="mb-3 input input-bordered w-full" />
            <input required name="img" type="text" placeholder="Type here image URL" className="mb-3 input input-bordered w-full" />
            <input required name="description" type="text" placeholder="Type here description" className="mb-3 input input-bordered w-full" />
            <input required name="price" type="number" placeholder="Type here price" className="mb-3 input input-bordered w-full" />
            <input type="submit" value='Add' className="btn text-white bg-[#0178BD] hover:bg-[#0487d3]" />
            </form>
        </div>
    );
};

export default AddService;