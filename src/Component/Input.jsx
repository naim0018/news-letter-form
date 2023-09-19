import { useState } from "react";
import Modal from './Modal'

const Input = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState(true);
  const [showModal, setShowModal] = useState(false);
  
  const i = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
  const handleInputChange = (e) => {
    const emailValue = e.target.value;
    setValue(emailValue);
    
    if (!i.test(emailValue)) {
      setInput(true);

    } else {
      setInput(false);
    }
  };
const handleModal = () =>{
  
 input ? null:(setShowModal(true), value);

}
const closeModal= () => {
  setShowModal(false);
}

  return (
    <div className="flex flex-col items-center space-y-5">
      <div className="w-full">
        <div className=" flex justify-between"> 
        <p className="font-semibold mb-2">Email address</p>
        {input && <p className="text-red-600">Valid email required!</p>}
        </div>
        <input
          onChange={handleInputChange}
          value={value}
          className="w-full h-12 border-2 p-4 rounded-lg border-orange-400"
          type="email"
          placeholder="email@company.com"
        />
      </div>
      <button
       onClick={handleModal}
        className={`w-11/12 p-4 rounded-lg font-semibold ${
          input ? 'bg-black text-white' : 'bg-orange-400 text-white'
        }`}
      >
        Subscribe to monthly Newsletter
      </button>

    { showModal && <Modal closeModal={closeModal} showModal={showModal}  value={value} />} 
    </div>

  );
};

export default Input;
