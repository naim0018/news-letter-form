
import Input from './Input'
const text = () => {
    

  return (
   
      <div className=' space-y-8 mt-8'>
      <h1 className="text-4xl font-bold">Stay Updated!</h1>
      <p className="w-11/12 font-medium">Join 60,000+ product managers receiving <br />monthly uopdates on:</p>
   

      <div className="w-11/12 flex gap-4 my-4 text-lg font-medium ">
        <img src="../../images/icon-list.svg" alt="" />
        <p>Product discovery and building what matters</p>
      </div>

      <div className="w-11/12 flex gap-4 my-4 text-lg font-medium ">
        <img src="../../images/icon-list.svg" alt="" />
        <p>Measuring to ensure updates are a success</p>
      </div>

      <div className="w-11/12 flex gap-4 my-4 text-lg font-medium ">
        <img src="../../images/icon-list.svg" alt="" />
        <p>And much more!</p>
      </div>
      <Input></Input>
      </div>
    
  );
};

export default text;
