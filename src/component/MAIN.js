import React from 'react'

function MAIN({handleLogout}) {
    return (
        <div className="hero">
            <nav>
               <h1> Welcome</h1>
               <button onClick={handleLogout}>Logout</button>
            </nav>
        </div>
    )
}

export default MAIN
