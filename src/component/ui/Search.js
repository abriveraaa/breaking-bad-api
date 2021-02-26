import React, { useState } from 'react'

const Search = ({getQuery}) => {
    const [getText, setText] = useState('')
    const onChanged = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className="search">
            <form>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Search Character" 
                    value={getText}
                    onChange={(e) => onChanged(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search
