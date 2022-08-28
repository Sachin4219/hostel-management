import Navbar from '../UI/Navbar/Navbar';


const SimpleContainer = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}
 
export default SimpleContainer;