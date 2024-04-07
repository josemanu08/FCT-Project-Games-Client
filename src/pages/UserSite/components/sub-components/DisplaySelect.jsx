import React, { useRef } from 'react'
import { useDisplaySelect } from '../../hooks/useDisplaySelect'

export const DisplayOptions = () => {
  const displayRef = useRef(null)
  const { handleDisplayChange } = useDisplaySelect({ displayRef })
  return (
    <div className="select-display-container" ref={displayRef} onInput={handleDisplayChange}>
        <p style={{ color: 'grey' }}>Display Options:</p>
       <div style={{ display: 'flex', gap: '.5rem' }}>
        <input hidden defaultChecked type="radio" name="display-option" id="display-option-columns" value='mult-column'/>
            <label htmlFor="display-option-columns">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                    <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5z"/>
                </svg>
            </label>

            <input hidden type="radio" name="display-option" id="display-option-one-column" value='single-column'/>
            <label htmlFor="display-option-one-column">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-square" viewBox="0 0 16 16">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                </svg>
            </label>
       </div>
    </div>
  )
}
