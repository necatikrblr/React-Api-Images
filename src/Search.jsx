import { useState } from "react";
function Search({search}) {

    const [valueInput, setvalueInput] = useState('')
    const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
 };

 const handleChange = (event) => {
    setvalueInput(event.target.value);
 };
    return (
        <div className="nav">
            <form className="form" onSubmit={handleFormSubmit}>
                <label className="">Ne arıyorsunuz ?</label>
                <input value={valueInput} onChange={handleChange}/>
            </form>
        </div>
     );
}

export default Search;