import orientation from './orientation.png';
import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {
  const [state1, setstate1] = useState(false);
  const [state2, setstate2] = useState(false);
  const [state3, setstate3] = useState(false);
  const [state4, setstate4] = useState(false);
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleClick = (content, func) => {
    if(!content) {
      alert("This is field can't be empty!");
    }
    else {
      func(true);
    }
  }

  const handleName = e => {
    setName(e.target.value);
  }

  const handleRoll = e => {
    setRoll(e.target.value);
  }

  const handleFeedback = e => {
    setFeedback(e.target.value);
  }

  const handleSubmit = () => {
    setstate4(true);
    fetch("https://docs.google.com/forms/d/e/1FAIpQLSdsnsGxI1SH3PKc2k3UhztsBV7SPgcLwyCs58aBckO7Rfr5bg/formResponse?entry.913388464="+name+"&entry.498039023="+roll+"&entry.1243725770="+feedback)
  }

  return (
    <div className="App">
      <motion.div initial={{ opacity: 0, y: "-100vh" }} animate={state1? { opacity: 0, y: "-100vh" }:{ opacity: 1, y: 0 }} transition={{ type: "spring", damping: 30, stiffness: 100 }} className="section">
        <div><img src={orientation} className="logo" alt="Orientation Logo" /></div>
        <h1>Mark your attendance now!</h1>
        <div onClick={() => setstate1(true)} className="button">Lessgo</div>
      </motion.div>
      <motion.div initial={{ y: 0, opacity: 0}} animate={state2 ? {y: "-300vh", opacity: 1} : (!state1? {y: 0, opacity: 0} : {y: "-100vh", opacity: 1})} transition={{ type: "spring", damping: 30, stiffness: 100 }} className="section">
        <h2>What's your name?*</h2>
        <input className="text" type="text" name="name" value={name} onChange={handleName} />
        <div onClick={() => handleClick(name, setstate2)} className="button">Okay</div>
      </motion.div>
      <motion.div initial={{ y: 0, opacity: 0}} animate={state3 ? {y: "-400vh", opacity: 1} : (!state2? {y: 0, opacity: 0} : {y: "-200vh", opacity: 1})} transition={{ type: "spring", damping: 30, stiffness: 100 }} className="section">
        <h2>And your Roll number?*</h2>
        <input className="text" type="text" name="roll" value={roll} onChange={handleRoll} />
        <div onClick={() => handleClick(roll, setstate3)} className="button">Okay</div>
      </motion.div>
      <motion.div initial={{ y: 0, opacity: 0}} animate={state4 ? {y: "-500vh", opacity: 1} : (!state3? {y: 0, opacity: 0} : {y: "-300vh", opacity: 1})} transition={{ type: "spring", damping: 30, stiffness: 100 }} className="section">
        <h2>Do you have any feedback regarding the session?</h2>
        <p>(It'd be really helpful for us to make the event even better)</p>
        <input className="text" type="text" name="feedback" value={feedback} onChange={handleFeedback} />
        <div onClick={handleSubmit} className="button">Submit</div>
      </motion.div>
      <motion.div initial={{ y: 0, opacity: 0}} animate={!state4? {y: 0, opacity: 0} : {y: "-400vh", opacity: 1}} transition={{ type: "spring", damping: 30, stiffness: 100 }} className="section">
        <div><img src={orientation} className="logo" alt="Orientation Logo" /></div>
        <h2>Thanks! We've successfully recorded your attendance.</h2>
        <p>Follow our social media handles if you haven't yet to stay updated. Links available at <a className="link" href="https://orientation.nitt.edu">orientation.nitt.edu</a></p>
      </motion.div>
    </div>
  );
}

export default App;
