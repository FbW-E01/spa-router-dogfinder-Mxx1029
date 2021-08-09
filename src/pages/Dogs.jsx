import { Switch, Route, NavLink, useRouteMatch, useParams } from 'react-router-dom';
import whiskey from '../images/whiskey.jpg';
import hazel from '../images/hazel.jpg';
import tubby from '../images/tubby.jpg';
import './Dogs.css';

function Dog() {
    const { dogname } = useParams();

    document.querySelectorAll('.overlay').forEach((e) => e.style.backgroundColor = "rgba(255, 0, 0, 0.5)")

    return (
        <div className="dogInfo">
            { dogname === "whiskey" 
                ? 
                <div>
                    <h2>Name: Whiskey</h2>
                    <p>Age: 4</p>
                    <p>Whiskey loves eating popcorn.</p>
                    <p>Whiskey is a terrible guard dog.</p>
                    <p>Whiskey wants to cuddle with you!</p>
                </div> 
                
            : dogname === "hazel" 
                ?
                <div>
                    <h2>Name: Hazel</h2>
                    <p>Age: 0</p>
                    <p>Hazel has soooo much energy!</p>
                    <p>Hazel is higly intelligent.</p>
                    <p>Hazel loves people more than dogs.</p>
                </div>  
            : dogname === "tubby"
                ?
                <div>
                    <h2>Name: Tubby</h2>
                    <p>Age: 4</p>
                    <p>Tubby is really stupid.</p>
                    <p>Tubby does not like walks.</p>
                    <p>Tubby is misunderstood.</p>
                </div> 
            : null
            }
        </div>
    )
}

export default function Dogs() {
    
    return (
        <div>
            <div className="doggies">
                <div className="flex-container">
                    <NavLink to="/dogs/whiskey">Whiskey</NavLink>
                    <div className="parent">
                        <img className="img-container" src={whiskey} alt="Whiskey the dog"/>
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="flex-container">
                    <NavLink to="/dogs/hazel">Hazel</NavLink>
                    <div className="parent">
                        <img src={hazel} alt="Hazel the dog"/> 
                        <div className="overlay"></div>
                    </div>
                </div>
                <div className="flex-container">
                    <NavLink to="/dogs/tubby">Tubby</NavLink>
                    <div className="parent">
                        <img src={tubby} alt="Tubby the dog"/>                         <div className="overlay"></div>
                    </div> 
                </div>
            </div>
            
            <Switch>
                <Route path="/dogs/:dogname" component={Dog} />
                {/* to get nothing displayed when  you are just on "/dogs" */}
                <Route path="/dogs" render={ () => { return "" }} />
            </Switch>


        </div>

        

    )
}