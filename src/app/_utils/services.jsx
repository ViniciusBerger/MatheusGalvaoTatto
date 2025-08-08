import { db } from "./firebase";
import { collection, getDocs, setDoc, getDoc, addDoc, query, doc, where } from "firebase/firestore";


export const getAllAppointments = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, "appointments"));
        const appointments = querySnapshot.docs.map(doc => ({
            id: doc.id,  
            ...doc.data()
        }));
        return appointments;
    }   catch (error) {
        console.error("Error fetching appointments: ", + error);
        return [];
    }
}