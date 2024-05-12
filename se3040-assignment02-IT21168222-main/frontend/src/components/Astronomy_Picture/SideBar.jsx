export default function SideBar(props) {
    const { handleToggleModal, data } = props
    return (
        <>
        <div className="sidebar">
            <div onClick={handleToggleModal} className="bgOverlay"></div>
            <div className="sidebarContents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>
        </>
    )
}

const style = `
.bgGradient {
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(to top, #030615, rgba(255, 255, 255, 0));
  }
  
  .sidebar {
    position: fixed;
    inset: 0;
    display: flex;
    flex-direction: column;
    z-index: 10;
  }
  
  .sidebarContents {
    z-index: 15;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    overflow-y: scroll;
    height: 100%;
    width: 80%;
    max-width: 800px;
    margin-left: auto;
    background: #030615;
    color: white;
  }
  
  .sidebarContents h2 {
    font-weight: 200;
    font-size: 1.4rem;
  }
  
  .sidebarContents div {
    flex: 1;
  }
  
  .sidebarContents button {
    background: transparent;
    color: white;
    border: none;
    outline: none;
    margin-right: auto;
    cursor: pointer;
    transition-duration: 200ms;
    padding: 1rem 0;
  }
  
  .sidebarContents button:hover {
    opacity: 0.7;
  }
  
  .descriptionContainer {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .descriptionTitle {
    font-size: 1.1rem;
    font-weight: 200;
  }
  
  .bgOverlay {
    position: absolute;
    inset: 0;
    background: #030615;
    opacity: 0.6;
  }`