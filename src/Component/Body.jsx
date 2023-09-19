import Text from './Text'
import Image from './Image'


const body = () => {
    return (

        <div className="border rounded-lg  max-w-fit max-h-fit p-8 gap-5 flex items-center flex-col-reverse sm:flex-row ">
            <Text></Text>
            <Image></Image>
        </div>
  
    );
};

export default body;