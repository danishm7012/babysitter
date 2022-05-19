import React from 'react'

const orderList = ({ heading, paragraph, list }) => {
  return (
    <div className='order-list-section'>
      <h2>{heading}</h2>
      <p>{paragraph}</p>

      {/* <ol>
        {list.map((data) => (
          <li key={data}>{data}</li>
        ))}
      </ol> */}
    </div>
  )
}

export default orderList
