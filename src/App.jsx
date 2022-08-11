import React, { useState } from "react"
import FemidaPagination from "./components/FemidaPagination";
import './styles.css';

const App = (props) => {

    const [pagesTotal, setPagesTotal] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className="p-6">
            
            <div className="mb-4">
                <button className="bg-gray-500 p-4 ml-2"  onClick={() => setPagesTotal(pagesTotal - 1)}>-</button>
                <button className="bg-gray-500 p-4 ml-2"  onClick={() => setPagesTotal(pagesTotal + 1)}>+</button>
                <span>pages total : {pagesTotal}</span>
            </div>

            <div className="mb-4">
                <button className="bg-gray-500 p-4 ml-2"  onClick={() => setCurrentPage(currentPage - 1)}>-</button>
                <button className="bg-gray-500 p-4 ml-2"  onClick={() => setCurrentPage(currentPage + 1)}>+</button>
                <span>current page : {currentPage}</span>
            </div>

            <FemidaPagination 
            onChange={p => setCurrentPage(p)} 
            pagesTotal={pagesTotal} 
            currentPage={currentPage} />
        </div>
    );
}

export default App;