import "../index.css";
import { useState } from "react";

function Modal({handleOpenAddModal, handleAddItem, modalIsOpen }) {

    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [image, setImg] = useState("");

    const inputClear = (event) => {
        event.preventDefault();
        setName("");
        setContent("");
        setImg("");
        handleOpenAddModal(false);
    }

    const handleSubmitItem = (event) => {
        event.preventDefault();
        handleAddItem({name, content, image});
        setName("");
        setContent(""); 
        setImg("");
        handleOpenAddModal(false);
    }

    return (
        <div className="modal-wrapper" style={{display: modalIsOpen ? "block" : "none"}}>
        <div className="modal-overlay"></div>
        <form className="modal-content" onSubmit={handleSubmitItem}>
            <span className="close-btn" onClick={inputClear}>X</span>
            <label htmlFor="modalName" className="modal-label">이름</label>
            <input 
                type="text" 
                id="modalName" 
                className="modal-input" 
                maxlength="12"
                placeholder="음료 이름을 적어주세요."
                required 
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <label htmlFor="modalImg" className="modal-label">이미지</label>
            <input
                type="text"
                id="modalImg"
                className="modal-input"
                placeholder="이미지 URL을 적어주세요."
                required 
                value={image}
                onChange={(event) => setImg(event.target.value)}
            />
            <label htmlFor="modalContent" className="modal-label">내용</label>
            <input
                type="text"
                id="modalContent"
                className="modal-input"
                placeholder="내용을 적어주세요."
                required
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <button type="submit" className="submit-btn">저장</button>
        </form>
    </div>
    )
}

export default Modal;