import React from 'react'

function Header({ setIsAdding }) {
    return (
        <header>
            <h1>Kaptyn Management Software</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>NEW BOOKING</button>
            </div>
        </header>
    )
}

export default Header