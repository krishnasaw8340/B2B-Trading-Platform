import React, { useState } from 'react'
import axios from 'axios'

const Fileupload = () => {
    const [title, setTitle] = useState('');
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title)
        formData.append("file", file)

        try {
            const response = await axios.post('http://localhost:5000/api/v1/uploadfile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Upload successful:', response.data);
        } catch (error) {
            console.error('Upload failed:', error);
        }
    }

    return (
        <div>
            <h2>Image Upload</h2>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                        placeholder="Enter title"
                    />
                </div>

                <div className="form-group">
                    <label>Choose Image:</label>
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="form-control-file"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Upload
                </button>
                
            </form>
        </div>
    )
}

export default Fileupload