import React from 'react';
const optionBtn = {
    background: "#dfeaf7ff",
    color: "#003c83",
    border: "1px solid #003c83",
    borderRadius: 8,
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: 16,
    fontWeight: 500,
    margin: "0 10px",
    transition: "background 0.3s ease",
    display: "flex",
    flexDirection: "column" as "column",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    "&:hover": {
        background: "#0056b3",
    },
    maxWidth: 150,
    marginTop: 20,
};
const buttonImage = {
    width: 50,
    height: 50,
    margin:"auto",
    marginBottom: 10,
    
};

const ButtonWithIllustration = ({image, title}) => {
    const handleOption = (option) => {
        console.log("Option selected:", option);
    };
    return (
        <button
            style={optionBtn}
            onClick={() => handleOption("Existing Customer")}
        >
            <span><img src={image} alt={title} style={buttonImage}/></span>
            <span>{title}</span>
        </button>
    );
};

export default ButtonWithIllustration;