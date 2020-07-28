import React from 'react';

const Item = (props) => {
  const item = props.item;
  return (
    <div>
      <div key={item.id}>
        {' '}
        <span
          style={
            item.qty === 0
              ? {
                  backgroundColor: 'yellow',
                  padding: '0px 12px',
                  color: '#000000',
                  margin: '5px 10px',
                  fontWeight: 'bold',
                }
              : {
                  backgroundColor: '#38B5FF',
                  color: '#ffffff',
                  margin: '5px 10px',
                  padding: '0px 23px',
                }
          }
        >
          {item.qty !== 0 ? item.qty : 'zero'}{' '}
        </span>
        <button
          style={{
            backgroundColor: 'grey',
            margin: '5px 10px',
            color: '#ffffff',
            fontSize: '18px',
            padding: '5px 10px',
          }}
          onClick={props.add}
        >
          Increment
        </button>
        <button
          style={{
            backgroundColor: 'darkred',
            color: '#ffffff',
            fontSize: '15px',
            padding: '5px 10px',
          }}
          onClick={props.remove}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
