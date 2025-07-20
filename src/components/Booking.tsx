import { collection, addDoc } from "firebase/firestore/lite";
import { db } from "../config/fbConfig";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useState } from "react";

const Booking = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [arrivalDate, setArrivalDate] = useState(location.state?.guestDetail.AD ?? "")
    const [guestNo, setGuestNo] = useState(location.state?.guestDetail.GN ?? 0)
    const [depatureDate, setDepatureDate] = useState(location.state?.guestDetail.DD ?? "")

    const guestDetail = { fullName: "", email: "", phoneNumber: "", AD: arrivalDate , DD: depatureDate, GN: guestNo };

    const guestCollectionRef = collection(db, "guestDetail");
    const handleChange = (e: any) => {
        switch (e.target.name) {
            case "fullName":
                guestDetail.fullName = e.target.value;
                break;
            case "email":
                guestDetail.email = e.target.value;
                break;
            case "phoneNumber":
                guestDetail.phoneNumber = e.target.value;
                break;
            case "guestNo":
                guestDetail.GN = e.target.valueAsNumber;
                setGuestNo(e.target.value)
                // guestDetail.GN = isNaN(e.target.valueAsNumber) ? 0 : e.target.valueAsNumber;
                break;
            case "arrival":
                guestDetail.AD = e.target.value;
                setArrivalDate(e.target.value)
                break;
            case "depature":
                guestDetail.DD = e.target.value;
                setDepatureDate(e.target.value)
                break;
            default:
                console.log("error");
                break;
        }
    };

    const handleSubmit = async (e: any) => {
        console.log(guestDetail)

        const createGuest = async () => {
 //           await addDoc(guestCollectionRef, guestDetail);
              console.log(guestDetail)
        }

        if (guestDetail.GN === 0){
            toast("Please Type The Total Number of Guests We Should Expect")
        }
        else{
            createGuest().then(() => {
            console.log('room booked');
            navigate('/Thanks');
        });
        }
    };

    return (
        <div className="flex flex-col items-center h-screen">
            <ToastContainer 
                position="top-center"
            />
            <h2 className="md:text-4xl text-3xl font-bold my-8">Booking</h2>
            <form className="flex flex-col justify-between items-center md:w-1/2 w-4/5">
                <div className="w-full mb-5 flex items-start flex-col">
                    <label htmlFor="fullName" className="font-bold">Full Name</label>
                    <input 
                        type="text" 
                        name="fullName" 
                        className="cursor:pointer p-2 w-full border-b-2 border-gray-600 focus:border-black rounded-br-lg" 
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="w-full mb-5 flex items-start flex-col">
                    <label htmlFor="email" className="font-bold">E-mail</label>
                    <input 
                        type="email" 
                        name="email" 
                        className="cursor:pointer p-2 w-full border-b-2 border-gray-600 focus:border-black rounded-br-lg" 
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full mb-5 flex items-start flex-col">
                    <label htmlFor="phoneNumber" className="font-bold">Phone Number</label>
                    <input 
                        type="tel" 
                        name="phoneNumber" 
                        className="cursor:pointer p-2 w-full border-b-2 border-gray-600 focus:border-black rounded-br-lg" 
                        onChange={handleChange}
                    />
                </div>

                <div className="w-full mb-5 flex items-start flex-col">
                    <label htmlFor="arrival" className="font-bold">Arrival Date</label>
                    <input
                        type="date"
                        onChange={handleChange}
                        name="arrival"
                        value={guestDetail.AD}
                        className="cursor:pointer p-2 w-full border-b-2 border-gray-600 focus:border-black rounded-br-lg"
                    />
                </div>

                <div className="w-full mb-5 flex items-start flex-col">
                    <label htmlFor="depature" className="font-bold">Depature Date</label>
                    <input
                        type="date"
                        onChange={handleChange}
                        name="depature"
                        value={guestDetail.DD}
                        className="cursor:pointer p-2 w-full border-b-2 border-gray-600 focus:border-black rounded-br-lg"
                    />
                </div>

                <div className="w-full mb-5 flex items-start flex-col">
                    <label htmlFor="guestNo" className="font-bold">Number of Guests</label>
                    <input
                        type="number"
                        onChange={handleChange}
                        name="guestNo"
                        value={guestDetail.GN}
                        className="cursor:pointer p-2 w-full border-b-2 border-gray-600 focus:border-black rounded-br-lg"
                    />
                </div>

                <button
                    className="bg-black rounded-xl text-sm text-white  p-3 w-full mb-5"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Apply
                </button>
            </form>
        </div>
    );
}

export default Booking;