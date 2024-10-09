import '../styles/navbar.css'
import { auth } from '../config/firebase'
import { Link } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const logOut = async () => {
        await signOut(auth)
        navigate("/")
    }

    return (
        <div className="nav-container">
            <div className="links">
                <div className='link-element'>
                    <Link to="/">Home</Link>
                </div>

                {!user ? (
                    <div className='link-element'>
                    <Link to="/login">Login</Link>
                </div>
                ):
                (
                    <div className='link-element'>
                    <Link to="/create">New post</Link>
                </div>
                )

                }
                
                
            </div>
            <div className='user-info'>
                {user && (
                    <>
                        <p> {user?.displayName} </p>
                        <img referrerPolicy="no-referrer" src={user?.photoURL || ""} alt="user photo"
                        width="50px" height="40px"  />
                        <button onClick={logOut} >Log out</button>
                    </>
                )

                }
            </div>
        </div>
    )
}