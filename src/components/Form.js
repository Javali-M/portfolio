import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <div className='form'>
    <form>
      <label>Your name</label>
      <input type="text"></input>
      <label>Email</label>
      <input type="email"></input>
      <label>Subject</label>
      <input type="text"></input>
      <label>Message</label>
      <textarea rows='6' placeholder="Type your message here"/>
      <button className='btn'>Submit</button>
    </form>
    Form</div>
  );
}

export default Form