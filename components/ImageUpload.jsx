import React, { useState, useRef } from "react";
import DefaultImage from "../src/Assets/green box.png";

const imageUploader = () => {
    const [avatarURL, setAvatarURL] = useState(DefaultImage);

    const fileUploadRef = useRef();

    const handleImageUpload = (e) => {
        e.preventDefault();
        fileUploadRef.current.click()
    }

    const uploadImageDisplay = () => {
        const uploadedFile = fileUploadRef.current.files[0];
        const cachedURL = URL.createObjectURL(uploadedFile);
        setAvatarURL(cachedURL);
    }

    return (
        <div>
            <img 
            src={avatarURL}
            alt="Avatar"
            className="photo" />

            <form id="form" encType="multipart/form-data">
                <button className="button success" type="submit" onClick={handleImageUpload}>UPLOAD CLOTHES</button>
                <input type="file" id="file" accept=".jpeg, .png, .jpg" ref={fileUploadRef} onChange={uploadImageDisplay} hidden/>
            </form>
        </div>
    )
};

export default imageUploader;