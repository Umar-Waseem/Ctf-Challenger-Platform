import React from 'react'

function AuthError({ error }) {
    return (
        error &&
        <div className="flex items-center justify-center">
            <div className="bg-red-800 text-white py-1 px-2 rounded text-xs">
                {error}
            </div>
        </div>
    )
}

export default AuthError