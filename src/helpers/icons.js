import { 
    faTrash, 
    faSignOutAlt, 
    faMoon, 
    faFeather, 
    faSpinner,
    faMobileRetro,
    faEnvelope,
    faMapPin,
    faKey

} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faMoon, 
        faFeather, 
        faSpinner, 
        faMobileRetro, 
        faEnvelope, 
        faMapPin,
        faKey
    );
};

export default Icons;