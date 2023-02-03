import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);

  const selectHandler = (i) => {
    setPage(i);
  };

  const getData = async () => {
    const infor = await fetch("https://jsonplaceholder.typicode.com/users");
    const res = await infor.json();
    setData(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <section>
      <div>
        {data &&
          data.slice(page * 3 - 3, page * 3).map((curElem) => {
            return (
              <div key={curElem.id}>
                <div  className="basic-details">
                  <div>
                    <h3>Name</h3>
                    <p>{curElem.name}</p>
                  </div>
                  <div>
                    <h3>Email</h3>
                    <p>{curElem.email}</p>
                  </div>
                  <div>
                    <h3>Phone</h3>
                    <p>{curElem.phone}</p>
                  </div>
                  <div>
                    <h3>City</h3>
                    <p>{curElem.address.city}</p>
                  </div>
                  <button className="btn">
                   View Details
                  </button>
                </div>
              </div>
            );
          })}
      </div>
      <div>
        {data && (
          <div className="pagination">
            <span
              onClick={() => {
                selectHandler(1);
              }}
            >
              1
            </span>
            <span
              onClick={() => {
                selectHandler(2);
              }}
            >
              2
            </span>
            <span
              onClick={() => {
                selectHandler(3);
              }}
            >
              3
            </span>
            <span
              onClick={() => {
                selectHandler(4);
              }}
            >
              4
            </span>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
