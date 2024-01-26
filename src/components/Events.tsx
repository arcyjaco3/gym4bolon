// Events.tsx
import React from 'react';
import './styles/Events.css'; // Importuj plik CSS

interface EventsProps {
 
}

const Events: React.FC<EventsProps> = () => {
  return (
    <div className="events">
      <div className='events-header'> <h2>Explore Events</h2> <span>See all</span></div>
      <div className='events-container'>
        <div className='single-event'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 12V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V12C1.73478 12 1.48043 11.8946 1.29289 11.7071C1.10536 11.5196 1 11.2652 1 11V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H6.17C6.05698 5.67873 5.99949 5.34057 6 5C6 4.20435 6.31607 3.44129 6.87868 2.87868C7.44129 2.31607 8.20435 2 9 2C10 2 10.88 2.5 11.43 3.24V3.23L12 4L12.57 3.23V3.24C13.12 2.5 14 2 15 2C15.7956 2 16.5587 2.31607 17.1213 2.87868C17.6839 3.44129 18 4.20435 18 5C18.0005 5.34057 17.943 5.67873 17.83 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V11C23 11.2652 22.8946 11.5196 22.7071 11.7071C22.5196 11.8946 22.2652 12 22 12ZM4 20H11V12H4V20ZM20 20V12H13V20H20ZM9 4C8.73478 4 8.48043 4.10536 8.29289 4.29289C8.10536 4.48043 8 4.73478 8 5C8 5.26522 8.10536 5.51957 8.29289 5.70711C8.48043 5.89464 8.73478 6 9 6C9.26522 6 9.51957 5.89464 9.70711 5.70711C9.89464 5.51957 10 5.26522 10 5C10 4.73478 9.89464 4.48043 9.70711 4.29289C9.51957 4.10536 9.26522 4 9 4ZM15 4C14.7348 4 14.4804 4.10536 14.2929 4.29289C14.1054 4.48043 14 4.73478 14 5C14 5.26522 14.1054 5.51957 14.2929 5.70711C14.4804 5.89464 14.7348 6 15 6C15.2652 6 15.5196 5.89464 15.7071 5.70711C15.8946 5.51957 16 5.26522 16 5C16 4.73478 15.8946 4.48043 15.7071 4.29289C15.5196 4.10536 15.2652 4 15 4ZM3 8V10H11V8H3ZM13 8V10H21V8H13Z" fill="white"/></svg>Los Pollos Hermanos Chicken Festival</div>
        <div className='single-event'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.052C9.995 12.052 11.5 10.547 11.5 8.552C11.5 6.557 9.995 5.052 8 5.052C6.005 5.052 4.5 6.557 4.5 8.552C4.5 10.547 6.005 12.052 8 12.052ZM9 13H7C4.243 13 2 15.243 2 18V19H14V18C14 15.243 11.757 13 9 13ZM18.364 2.636L16.95 4.05C18.271 5.373 19 7.131 19 9C19 10.869 18.271 12.627 16.95 13.95L18.364 15.364C20.064 13.663 21 11.403 21 9C21 6.597 20.064 4.337 18.364 2.636Z" fill="white"/><path d="M15.535 5.464L14.121 6.88C14.688 7.445 15 8.198 15 9C15 9.802 14.688 10.555 14.121 11.12L15.535 12.536C16.479 11.592 17 10.337 17 9C17 7.663 16.479 6.408 15.535 5.464Z" fill="white"/></svg>Voice of Tren Twins Meet Up</div>
        <div className='single-event'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.071 4.929C18.1454 3.99606 17.0439 3.25601 15.8304 2.75169C14.6168 2.24738 13.3152 1.98882 12.001 1.991C10.6865 1.98895 9.3847 2.24755 8.17081 2.75185C6.95693 3.25615 5.85508 3.99613 4.92901 4.929C1.03001 8.827 1.03001 15.172 4.92901 19.071C5.8551 20.0041 6.95709 20.7443 8.17118 21.2486C9.38527 21.7529 10.6873 22.0114 12.002 22.009C13.3161 22.0113 14.6177 21.7529 15.8312 21.2488C17.0448 20.7446 18.1463 20.0048 19.072 19.072C22.971 15.174 22.971 8.829 19.071 4.929ZM12.181 4H11.822C11.883 3.999 11.941 3.991 12.002 3.991C12.063 3.991 12.12 3.999 12.181 4ZM18.243 17H16L14.742 19.516C13.8644 19.8402 12.9366 20.0071 12.001 20.009C11.0637 20.0073 10.1341 19.8401 9.25501 19.515L8.00001 17.01H5.76501C4.94045 15.9849 4.38282 14.7714 4.14201 13.478L6.00001 11L4.78401 8.567C5.17202 7.74159 5.69941 6.98924 6.34301 6.343C7.2438 5.43906 8.3479 4.76391 9.56301 4.374L12 6L14.438 4.375C15.6528 4.76519 16.7567 5.43992 17.658 6.343C18.3009 6.98847 18.8279 7.73977 19.216 8.564L18 11L19.858 13.478C19.6183 14.7672 19.0635 15.9771 18.243 17Z" fill="white"/><path d="M8.5 11L10 15H14L15.5 11L12 8.5L8.5 11Z" fill="white"/></svg>Natty Folks vs Crossfit Fellas</div>
      </div>
    </div>
  );
};

export default Events;