// forms 2 (Updated method of previous method means form 1)
// To understand this code go to intermediate react class 1 , time : after 27 minutes
// Too much important


import { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState( {firstName: "", lastName:"", email:"", comments:"", isVisible:true, mode:"", favCar:""});

  console.log(formData)
  function changeHandler(event){            // general eventHandler
  
    const {name, value, checked, type} = event.target       // event.target is element where we clicked.
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value       // check the element is checkbox or other elements
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    // print
    console.log("Finally printing the data....");
    console.log(formData)
  }

  return (
    <div className='App'>
      <form onSubmit={submitHandler}>
        
        <input 
          type="text"
          placeholder='first name'
          onChange={changeHandler}
          name='firstName'
          value={formData.firstName}        // Store the value of enterd data by user in 'input tag', basically used for synchronization for huge form. All data is enterd by user is stored at formData.
        />
        
        <br />
        <br />

        <input 
          type="text"
          placeholder='last name'
          onChange={changeHandler}
          name='lastName'
          value={formData.lastName}
        />

        <br />
        <br />

        <input 
          type="email"
          placeholder='Enter your email here'
          onChange={changeHandler}
          name='email'
          value={formData.email}
        />

        <br />
        <br />
        
        <textarea 
          placeholder='enter your comments here'
          onChange={changeHandler}
          name="comments"
          value={formData.comments}
        />
        
        <br />

        <input 
          type="checkbox"
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}  // if isVisible is true, checkbox will be initialy checked, else not. Here we can't use value="" because checkbox has only two values
        />
        <label htmlFor="isVisible">Am i visible ?</label>

        <br />
        <br />

        <fieldset>                  
          <legend>Mode : </legend>
          <input 
            type="radio" 
            onChange={changeHandler}
            name='mode'
            value="Online-Mode"
            id='Online-Mode'
            checked={formData.mode === "Online-Mode"}    // formData.mode === "Online-Mode" is used to check whether the mode is 'Online-Mode' or not.
          />
          <label htmlFor="Online-Mode">Online-Mode</label>

          <br />
        
          <input 
            type="radio" 
            onChange={changeHandler}
            name='mode'
            value="Offline-Mode"
            id='Offline-Mode'
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline-Mode</label>
        </fieldset>

        
        <label htmlFor="favCar">Tell Me Your Favorite Car </label>
        <select 
          name="favCar" 
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
        <option value="BMW">BMW</option>
        <option value="RR">RR</option>
        <option value="Audi">Audi</option>
        <option value="MerceDece">MerceDece</option>
        <option value="Lexus">Lexus</option>
        </select>
        
        <br />
        <br />
        
        {/* <input type="submit" value="submit" /> */}
        <br />
        <button>Submit</button>
        
      </form>
    </div>
  );
}

export default App
