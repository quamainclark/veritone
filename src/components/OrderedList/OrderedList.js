import React, { useRef, useState } from 'react';
import { ArrowUp, ArrowDown, Trash } from 'react-bootstrap-icons';
import './OrderedList.css';

function OrderedList() {
  const [orderList, setOrderList] = useState([]);
  const [isAsc, setIsAsc] = useState(true);
  const orderRef = useRef("");

  const sort = (list, sortKey) => {
    if (sortKey) {
      return list.sort();
    } else {
      return list.sort().reverse();
    }
  }

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      const sortedList = sort([...orderList, orderRef.current.value], isAsc);
      setOrderList(sortedList);
      orderRef.current.value = "";
    }
  }

  const handleSort = () => {
    setIsAsc(!isAsc);
    sort(orderList, !isAsc);
  }

  const handleClear = () => {
    setOrderList([]);
  }

  return (
    <div className="orderlist-container">
      <div>
        <input className="add-item" ref={orderRef} type="text" onKeyDown={keyPress} />
        <button className="btn sort-direction" onClick={handleSort}>{isAsc ? <ArrowDown /> : <ArrowUp />}</button>
        <button className="btn clear-list" onClick={handleClear}><Trash /></button>
      </div>
      <ul className="items-list">
        {orderList.map((order, index) => (
          <li key={index}>{order}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderedList;