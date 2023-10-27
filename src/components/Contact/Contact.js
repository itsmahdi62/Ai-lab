import {useForm} from  "react-hook-form"
import ContactImage from "../../assets/contact.jpg"

const Contact = () => {
    const { 
        register,
        trigger,
        formState: {errors}
    } = useForm() ;
    const onSubmit = async(e) =>{
        const isValid  = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return ( <section id="contact" className="py-36">
        {/* Headings */}
        <div className="flex  w-full mb-14 sm:justify-center md:justify-start">
                <div className="md:ms-28">
                    <p className="font-playfair font-semibold text-4xl ">
                        <span className="text-yellow">CONTACT ME</span> TO GET STARTED
                    </p>
                </div>
        </div>
        {/* Form & IMAGE section */}
        <div className="md:flex md:justify-between  gap-16 mt-5 sm:mx-auto   md:mx-0">
            <div className="basis-1/2 mt-10 md:mt-0 md:ms-28 " >
                <form target="_blank" onSubmit={onSubmit} action="https://formsubmit.co/amiralmasi021@gmail.com" method="POST">
                    <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 border-solid border-2 " type="text" placeholder="NAME"
                        {...register("name" , {required : true , maxLength : 100 , })}
                    />
                    {errors.name && (
                        <p className="text-red mt-1">
                            {errors.name.type === 'required' && "This field is required."}
                            {errors.name.type === 'maxLength' && "Max length is 100 character."}
                        </p>
                    )}

                    <input className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 border-2" type="text" placeholder="EMAIL"
                        {...register("email" , {required : true , pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+|.[A-z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className="text-red mt-1">
                            {errors.email.type === 'required' && "This field is required."}
                            {errors.email.type === 'pattern' && "Invalid email address."}
                        </p>
                    )}

                    <textarea className="w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5 border-2" type="text" placeholder="MESSAGE"
                        row="4"
                        cols="50"
                        {...register("message" , {required : true , maxLength : 2000,
                        })}
                    />
                    {errors.message && (
                        <p className="text-red mt-1">
                            {errors.message.type === 'required' && "This field is required."}
                            {errors.message.type === 'maxLength' && "Max lenght is 2000 char."}
                        </p>
                    )}
                    <button type="submit" className="p-5 bg-yellow-400 font-semibold text-deep-blue mt-5 hover:bg-red hover:text-white hover:bg-green-600 transition duration-500">
                        SEND ME A MESSAGE
                    </button>
                </form>
            </div>
            <div  className="basis-1/2 flex justify-center "   >
                <div className="shadow-2xl ">
                 <img src={ContactImage} alt="contact" className="shadow-2xl hidden xl:block" />
                </div>
            </div>
        </div>
    </section> );
}
export default Contact;