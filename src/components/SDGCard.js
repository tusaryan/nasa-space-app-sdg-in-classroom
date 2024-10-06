


// import React, { useState } from "react";
// import "../styles/SDGCard.css"; // Make sure to create and import the CSS file
// import Modal from 'react-modal';

//v4 1:41 pm
import React, { useState } from "react";
import Modal from 'react-modal';

const SDGCard = ({ title, description, image, moreInfo }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    return (
        <div className="sdg-card" onClick={openModal}>
            <div className="sdg-card-inner">
                <div className="sdg-card-front">
                    <img src={image} alt={title} className="sdg-image" />
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="sdg-card-back">
                    <h3>{title}</h3>
                    <p>Short description on the back side.</p>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="SDG Details"
                ariaHideApp={false} // Add this line if you encounter issues with accessibility
            >
                <h2>{title}</h2>
                <div dangerouslySetInnerHTML={{ __html: moreInfo }} />
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default SDGCard;













//v3 10:51 am
//
//
// const SDGCard = ({ title, description, image, moreInfo }) => {
//     const [modalIsOpen, setModalIsOpen] = useState(false);
//
//     const openModal = () => setModalIsOpen(true);
//     const closeModal = () => setModalIsOpen(false);
//
//     return (
//         <div className="sdg-card" onClick={openModal}>
//             <div className="sdg-card-inner">
//                 <div className="sdg-card-front">
//                     <img src={image} alt={title} className="sdg-image" />
//                     <h3>{title}</h3>
//                     <p>{description}</p>
//                 </div>
//                 <div className="sdg-card-back">
//                     <h3>{title}</h3>
//                     <p>Short description on the back side.</p>
//                 </div>
//             </div>
//             <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="SDG Details"  ariaHideApp={false}>
//                 <h2>{title}</h2>
//                 <div dangerouslySetInnerHTML={{ __html: moreInfo}}/>
//                 {/*<p>{moreInfo}</p>*/}
//                 <button onClick={closeModal}>Close</button>
//             </Modal>
//         </div>
//     );
// };
//
// export default SDGCard;
//

//v2
//
// const SDGCard = ({ title, description, image }) => {
//     const [isFlipped, setIsFlipped] = useState(false);
//
//     const handleFlip = () => {
//         setIsFlipped(!isFlipped);
//     };
//
//     return (
//         <div className={`sdg-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
//             <div className="sdg-card-inner">
//                 <div className="sdg-card-front">
//                     <img src={image} alt={title} />
//                     <h3>{title}</h3>
//                 </div>
//                 <div className="sdg-card-back">
//                     <h3>{title}</h3>
//                     <p>{description}</p>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default SDGCard;
//
//





// v1

// import React from 'react';
// import '../styles/SDGCard.css'; // Import the CSS file

// const SDGCard = ({ sdg }) => {
//   return (
//     <div className="sdg-card">
//       <img src={sdg.image} alt={sdg.title} style={{ width: '100%', height: 'auto' }} />
//       <h3>{sdg.title}</h3>
//     </div>
//   );
// };

// export default SDGCard;

