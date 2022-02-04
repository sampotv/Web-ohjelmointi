import React from 'react';

export default function InputControlsUncontrolled() {

    const onSubmit = event => {
        console.log("submit");
        event.preventDefault();
        console.log(event.target.description.value);
    }

  return <div>
      <h1>Uncontrolled inputs</h1>
      <form onSubmit={onSubmit}>
          <div>Description<input type="text" name="description" /></div>
          <div>Quantity <input type="text" name="asdad" /></div>
          <button>Add to list</button>
      </form>
  </div>;
}
