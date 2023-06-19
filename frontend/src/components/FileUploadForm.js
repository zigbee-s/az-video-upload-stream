import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    axios
      .post('http://localhost:3001/api/upload', formData)
      .then((response) => {
        // Handle success response
        console.log('File uploaded successfully');
        axios.get(`http://localhost:3001/api/stream/${selectedFile.name}`)
        .then((response) => {
          console.log('Streaming file:', response.data);
          setVideoUrl(response.data);
        })
        .catch((error) => {
          // Handle error
          console.error('Error streaming file:', error);
        });
      })
      .catch((error) => {
        // Handle error
        console.error('Error uploading file:', error);
      });
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>

      {videoUrl && (
        <video controls style={{ width: '500px', height: 'auto' }}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default FileUploadForm;
