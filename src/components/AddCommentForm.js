import React, { useEffect, useState } from 'react';

const handleSubmit = e => {
    e.preventDefault();
    console.log(username, password);
  };



const AddCommentForm = () => {
    const [text, setText] = useState('');
    return (
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            label="Comment Text"
            variant="filled"
            required
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <div>
            <Button type="submit" variant="contained" color="primary">
              Signup
            </Button>
          </div>
        </form>
      );
}

export default AddCommentForm;