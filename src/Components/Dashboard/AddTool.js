import React from 'react';

const AddTool = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const picture = event.target.picture.value;
        const desc = event.target.desc.value;
        const minimum = event.target.minimum.value;
        const available = event.target.available.value;
        const price = event.target.price.value;
        const newTool = { name, picture, desc, minimum, available, price };
        console.log(newTool);

        const url = 'http://localhost:5000/tools';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTool)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div className='md:w-[600px] bg-base-100 mx-4 md:mx-auto shadow-xl my-4 rounded-lg'>
            <div className='card-body'>
                <h3 className="font-bold text-3xl">Add A New Tool</h3>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <label class="label">
                        <span class="label-text">Tool Name</span>
                    </label>
                    <input type="text" name='name' className="input input-bordered w-full mb-[15px]" />
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <input type="text" name='desc' className="input input-bordered w-full mb-[15px]" />
                    <label class="label">
                        <span class="label-text">Minimum Order Quantity</span>
                    </label>
                    <input type="num" name='minimum' className="input input-bordered w-full mb-[15px]" />
                    <label class="label">
                        <span class="label-text">Available Quantity</span>
                    </label>
                    <input type="num" name='available' className="input input-bordered w-full mb-[15px]" />
                    <label class="label">
                        <span class="label-text">Price Per Product</span>
                    </label>
                    <input type="num" name='price' className="input input-bordered w-full mb-[15px]" />
                    <label class="label">
                        <span class="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='picture' className="input input-bordered w-full mb-[15px]" />

                    <input type="submit" value="add tool" className="btn w-full max-w-xs mx-auto" />
                </form>
            </div>
        </div>
    );
};

export default AddTool;