import { useState } from "react";
import './App.css';
import Modal from "./component/Modal";

function App() {
  const initItem = [
    {
      id: 1,
      name: "술",
      content: "저는 술을 못마셔요! 술 대신 음료를 즐겨마신답니다.",
      image: "https://me2.kr/3ewo6"
   },
   {
     id: 2,
     name: "버블티",
     content: "한때는 버블티에 미쳤었죠...",
     image: "https://me2.kr/uhck1"
   },
   {
     id: 3,
     name: "초코우유",
     content: "초코우유는 지금도 좋아해요.",
     image: "https://me2.kr/pjvjl"
   },
   {
     id:4,
     name: "커피",
     content: "그 중 제일 좋아하는 건 커피랍니다.",
     image: "https://me2.kr/n9e8m"
   },
   {
     id: 5,
     name: "차",
     content: "당 줄이려고 차도 마시려구요!",
     image: "https://me2.kr/nlnv7"
   }
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [items, setItems] = useState(initItem);

  const handleOpenAddModal = (value) => {
    setModalIsOpen(value);
  }

  const handleAddItem = (item) => {
    setItems([...items, item]);
  }

  return (
    <>
      <header className="header">
        <span className="title">DRINK +</span> 
      </header>
      <main>
        <aside className="sidebar">
          <button 
            className="btn-add"
            onClick={() => setModalIsOpen(true)}
            > 추가</button>
          {items.map(drink => (
            <span key={drink.name}>{drink.name}</span>
          ))}
        </aside>
        <section className="container">
          {/* item 불러오기 */}
          {items.map(drink => (
            <div className="item" key={drink.name}>
              <img src={drink.image} alt={drink.name} />
              <span key={drink.content}>{drink.content}</span>
            </div>
          ))}
        </section>
      </main>
      <Modal 
        handleOpenAddModal={handleOpenAddModal}
        handleAddItem={handleAddItem} 
        modalIsOpen={modalIsOpen} 
      />
    </>
  );
}

export default App;
