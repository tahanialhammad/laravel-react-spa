import React, { useState } from 'react'

export default function HoverDropDowen({ trigger, children }) {
    const [open, setOpen] = useState(false);

    const toggleOpen = () => {
      setOpen((previousState) => !previousState);
  };

  return (
    <div className="dropdown-container" onMouseEnter={toggleOpen} onMouseLeave={toggleOpen}>
    <button className="dropdown-button">{trigger}</button>
    {open && (
      <div className="dropdown-content">
       { children.content }
      </div>
    )}
  </div>
  )
}
