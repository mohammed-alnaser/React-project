import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



    return (
      
      <div className='contact'>
          <div className="contact-col">
              <h3>Send us a Message <img src={msg_icon} alt="" /></h3>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur eligendi,
                  voluptatum ducimus vel quae incidunt neque totam deleniti ullam rem voluptatem,
                  alias optio soluta voluptas iure ipsa nisi facere. Quod.</p>
              <ul>
                  <li><img src={mail_icon} alt="" />Contact@CodeTime.com</li>
                  <li><img src={phone_icon} alt="" />+962791048551</li>
                  <li><img src={location_icon} alt="" />77 Messachusetts Ave , Cambridge <br/> MA 01234,United States </li>
              </ul>
          </div>
          <div className="contact-col">
              <form onSubmit={onSubmit}>
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder='Enter Your Name' required />
                  <label>Phone Number</label>
                  <input type="tel" name='phone' placeholder='Enter your number' required />
                  <label>Write your message here</label>
                  <textarea name="message" cols='30' rows='10' placeholder='Enter your message'></textarea>
                  <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
              </form>
                <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
