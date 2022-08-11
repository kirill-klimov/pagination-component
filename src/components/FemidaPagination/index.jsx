import React from 'react'

function FemidaPagination(props) {
    const {pagesTotal, currentPage, onChange} = props

    const items = Array.from(new Array(pagesTotal).fill()).map((_, i) => {
        const page = i + 1
        const active = page === currentPage
        return (
            <div
            key={i}
            role="button"
            onClick={() => onChange(page)} 
            className={`w-8 h-8 grid place-items-center border
            rounded-full border-gray-500 text-gray-500 mr-1
            ${!active?'':'border-primary-500 text-white bg-primary-500'}`}>{page}</div>
        )
    })

    function Dots() {
        return (
                <div
                role="button"
                className={`w-8 h-8 grid place-items-center
                rounded-full text-gray-500 mr-1`}>{`...`}</div>
        )
    }

    function handlePrev() {
        if (currentPage !== 1) onChange(currentPage - 1)
    }

    function handleNext() {
        if (currentPage < pagesTotal) onChange(currentPage + 1)
    }

    return (
        <div className='flex select-none'>
            <div
            role="button"
            onClick={handlePrev} 
            className={`w-8 h-8 grid place-items-center border
            rounded-full border-gray-500 text-gray-500 mr-1`}>{`<`}</div>

            {
                pagesTotal < 8 ?
                items
                :
                currentPage < 4 ?
                <>
                {
                    items.map((item, i) => {
                        if (i < 5) return item
                    })
                }
                <Dots />
                { items[pagesTotal-1] }
                </>
                : (pagesTotal - currentPage) < 4 ?
                <>
                { items[0] }
                <Dots />
                {
                    items.map((item, i) => {
                        const last6 = pagesTotal - 6
                        if (i > last6) return item
                    })
                }
                </>
                :
                <>
                { items[0] }
                <Dots />

                {items[currentPage-2]}
                {items[currentPage-1]}
                {items[currentPage]}

                <Dots />
                { items[pagesTotal-1] }
                </>
            }

            <div
            role="button"
            onClick={handleNext} 
            className={`w-8 h-8 grid place-items-center border
            rounded-full border-gray-500 text-gray-500 mr-1`}>{`>`}</div>
        </div>
    )
}

export default FemidaPagination