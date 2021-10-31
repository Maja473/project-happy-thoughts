import React from 'react';

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
    return (
    <form className="form-container"
    onSubmit={onFormSubmit}>
      <label 
      htmlFor="newThought">Type Your Thought</label>
      <input
        className="thought-input"
      id="newThought"
      type="text" 
      value={newThought} 
      onChange={(e) => setNewThought(e.target.value)}
      />
      <button 
      className="submit-button"
      disabled={newThought.length < 5 || newThought.length > 140} 
      type="submit">❤️ Send Thought ❤️</button>
    </form>
    )

};

export default ThoughtForm;