import React, { useState, useContext } from "react";
import itemContext from "../../context/item/itemContext";

const Search = () => {
    const iContext = useContext(itemContext);

    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (text !== '') {
            iContext.searchItems(text);
            setText('');
        }
    };

    const onChange = e => setText(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit} className='form'>
                <input 
                    type='text'
                    name='text'
                    placeholder='Search Items...'
                    value={text}
                    onChange={onChange}
                />
                <input 
                    type='submit'
                    value='Search'
                    className='btn btn-dark btn-block'
                />
            </form>
            {iContext.itemList.length > 0 && (
                <button 
                    className="btn btn-light btn-block"
                    onClick={iContext.clearItemList}
                >
                    Clear
                </button>
            )}
        </div>
    );
};

export default Search;
