import React, { useState } from 'react';

export default function Toggle(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {open ? (
        <div>
          {props.children}
          <button onClick={() => setOpen(!open)}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setOpen(!open)}>Edit</button>
      )}
    </div>
  );
}
