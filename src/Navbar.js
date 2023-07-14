function Navbar({inputTitleChange, inputPhotoChange, fnAddCar, setInTitle, setInPhoto, intitle, inphoto}) {


    const handleTitleChange = (event) => {
        const value = event.target.value;
        setInTitle(value);
        inputTitleChange(value);
    };

    const handlePhotoChange = (event) => {
        const value = event.target.value;
        setInPhoto(value);
        inputPhotoChange(value);
    };


    const btclick = (event) => {
        const value = event.target.value;
        setInTitle(value);
        setInPhoto(value);
        fnAddCar(value);

    }

    return (
        <div className="navbar">
            <label htmlFor="title">Title</label>
            <input
                id="title"
                placeholder="title"
                value={intitle}
                onChange={handleTitleChange}
            />

            <label htmlFor="photo">Photo</label>
            <input
                id="photo"
                placeholder="photo"
                value={inphoto}
                onChange={handlePhotoChange}
            />
            <button onClick={btclick} className="btn btn-primary">
                Add Item
            </button>
        </div>
    );
}

export default Navbar;
