// Events.tsx
import React from 'react';
import './styles/AccountInfo.css'; // Importuj plik CSS

interface AccountInfoProps {

}

const AccountInfo: React.FC<AccountInfoProps> = () => {
    return (
        <div className="account-info">
            <h2>Your page</h2>
            <div className='personal-info'>
                <div className='column-one'>
                    <img src='https://d3l5vala1x2h4r.cloudfront.net/1638806005951_temp-comp.jpg'></img>
                </div>
                <div className='column-two'>
                    <h3>My creative Page</h3>
                    <p>
                        <span>
                            <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_56)">
                                    <path d="M7.5 0.75H1.5C1.0875 0.75 0.75375 1.0875 0.75375 1.5L0.75 8.25L2.25 6.75H7.5C7.9125 6.75 8.25 6.4125 8.25 6V1.5C8.25 1.0875 7.9125 0.75 7.5 0.75ZM6.75 5.25H2.25V4.5H6.75V5.25ZM6.75 4.125H2.25V3.375H6.75V4.125ZM6.75 3H2.25V2.25H6.75V3Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_56">
                                        <rect width="9" height="9" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </span>
                        <span>Messages</span>
                        <span>9</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
