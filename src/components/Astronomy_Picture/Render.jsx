import { useState } from "react";

import Footer from "./Footer";
import Main from "./Main";
import SideBar from "./SideBar";
import useNASAData from "./useNASAData";


function Render() {
  const { data, loading } = useNASAData();
  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }
  

  return (
    <>
    <style>{styles}</style>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && <SideBar data={data} handleToggleModal={handleToggleModal} />}
      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}

    </>
  );
}



const styles = `

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgb(255, 255, 255);
  background-color: #030615;
  font-synthesis: none;
  min-height: 100vh;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.imgContainer {
  display: flex;
  flex-direction: column;
}

.bgImage {
  width: 100%;
  height: auto;
  flex: 1;
  object-fit: cover;
}



footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
}

footer div {
  display: flex;
  flex-direction: column;
}

footer h2 {
  font-size: 1.4rem;
}

footer h1 {
  font-size: 0.9rem;
  font-weight: 200;
}

footer button {
  background: transparent;
  border: none;
  outline: none;
  color: white;
  padding: 1rem 0;
  transition-duration: 200ms;
  cursor: pointer;
}

footer button i {
  font-size: 1.3rem;
}

footer button:hover {
  opacity: 0.7;
}

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
}

.loadingState {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}

.loadingState i {
  opacity: 0.2;
  font-size: 3rem;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (min-width: 640px) {
  .sidebar {
    position: relative;
    inset: unset;
    min-width: 30%;
    max-height: 100vh;
    box-shadow: 0 0 40px 1px #030615;
  }

  .sidebarContents {
    margin: unset;
    width: 100%;
  }

  .bgOverlay {
    right: 0;
    left: unset;
    width: 100vw;
  }
}
`

export default Render