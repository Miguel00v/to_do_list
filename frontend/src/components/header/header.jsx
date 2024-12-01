import React, { useState, useEffect, useRef } from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faHouse, faListCheck, faGear, faKey, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header(){

    const [isOpen, setIsOpen] = useState(false); /* Control if the dropdown is open */

    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    /* Function to reverse the state of dropdown */
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    /* Close dropdown if click is outside the dropdown and button */
    useEffect(() => {
    
            const handleClickOutside = (event) => {
                if(
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target) &&
                    buttonRef.current &&
                    !buttonRef.current.contains(event.target)
                ) {
                    setIsOpen(false); //Close dropdown
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside); // Listen for mousedown event
            return () => {
                document.removeEventListener("mousedown", handleClickOutside); // Clean up event listener
            };
        }, []);

    return (
        <header>
            <nav>
                <ul>
                    <li><Link className='linksHeader' to='/userDashboard'><p><FontAwesomeIcon icon={faHouse} /></p></Link></li> {/* Homepage */}
                    <li><Link className='linksHeader' to='/userDashboard'><p><FontAwesomeIcon icon={faListCheck} /></p></Link></li> {/* Tasks page */}
                    <li className='dropdown' ref={dropdownRef}> {/* Account management, logout, reset password, edit informations */}
                        <button id='btnHeader' type='button' onClick={toggleDropdown} ref={buttonRef}><p><FontAwesomeIcon icon={faUser} /></p></button>
                            {isOpen && (
                                <ul className='dropAccountManage'>
                                        <li><Link className='linksHeader' to='/manageAccount'><p>Manage Account <FontAwesomeIcon icon={faGear} /></p></Link></li>
                                        <li><Link className='linksHeader' to='/resetPassword'><p>Reset password <FontAwesomeIcon icon={faKey} /></p></Link></li>
                                        <li><Link className='linksHeader' to='/logout'><p>Logout <FontAwesomeIcon icon={faRightFromBracket} /></p></Link></li>
                                </ul>
                            )}   
                    </li> 
                    <li><Link className='linksHeader' to=''>
                        <p><FontAwesomeIcon icon={faBell} /></p>
                        <div id='counterMessages'></div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

