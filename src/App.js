import "./styles.css";
import React, { useState } from "react";

const guitarDb = {
  Acoustic: [
    {
      name: "Yamaha F310",
      price: "8000/-",
      rating: "4.9/5"
    },
    {
      name: "Fender CD60",
      price: "9500/-",
      rating: "4.8/5"
    },
    {
      name: "Vault EA-40",
      price: "6500/-",
      rating: "4.5/5"
    }
  ],
  ElectroAcoustic: [
    {
      name: "Kadence Slowhand",
      price: "9000/-",
      rating: "4.8/5"
    },
    {
      name: "Aria Fet M1",
      price: "8000/-",
      rating: "4.5/5"
    },
    {
      name: "Givson Venus",
      price: "4000/-",
      rating: "4.1/5"
    }
  ],
  Electric: [
    {
      name: "Fender Squire",
      price: "10,000/-",
      rating: "4.8/5"
    },
    {
      name: "Juarez Electric",
      price: "6000/-",
      rating: "4.2/5"
    },
    {
      name: "Kadence Frontier",
      price: "6000/-",
      rating: "4.2/5"
    }
  ],
  Bass: [
    {
      name: "Yamaha TRBX",
      price: "17,000/-",
      rating: "4.9/5"
    },
    {
      name: "Kadence Chronicle",
      price: "14,000/-",
      rating: "4.4/5"
    },
    {
      name: "Cort Action",
      price: "12,900/-",
      rating: "4.2/5"
    }
  ]
};

export default function App() {
  const arrayDb = Object.keys(guitarDb);

  const [guitarItem, setGuitarItem] = useState("Acoustic");
  function buttonCLickHandler(item) {
    setGuitarItem(item);
  }
  return (
    <div className="App">
      <nav
        style={{
          backgroundColor: "#071A52",
          color: "white",
          padding: "1rem",
          borderBottomLeftRadius: "2rem",
          borderTopRightRadius: "2rem"
        }}
      >
        <h1
          style={{
            fontSize: "30px"
          }}
        >
          Guitar Recommender
        </h1>
        <p>Here are some of mine guitar recommendations!</p>
      </nav>

      <div style={{ padding: "0.5rem" }}>
        {arrayDb.map((item) => {
          return (
            <button
              style={{
                cursor: "pointer",
                padding: "0.7rem 1rem",
                margin: "0.5rem",
                borderRadius: "0.5rem",
                color: "white",
                border: "2px solid #08FFC8 ",
                fontWeight: "bold",
                backgroundColor: "#071A52"
              }}
              key={item}
              onClick={() => buttonCLickHandler(item)}
            >
              {item}
            </button>
          );
        })}
      </div>
      <hr style={{ margin: "0px" }} />
      <div className="main-div">
        <ul>
          {guitarDb[guitarItem].map((item) => {
            return (
              <li
                key={item.name}
                style={{
                  border: "2px Solid #08FFC8",
                  borderRadius: "1rem",
                  padding: "1rem",
                  margin: "1.3rem",
                  maxWidth: "180px",
                  listStyle: "none",
                  margin: "1.3rem auto",
                  backgroundColor: "white",
                  fontWeight: "bold",
                  color: "#071A52"
                }}
              >
                <div
                  style={{
                    paddingBottom: "0.5rem"
                  }}
                >
                  {item.name}
                </div>
                <div
                  style={{
                    paddingBottom: "0.5rem"
                  }}
                >
                  {item.price}
                </div>
                <div>{item.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
      <footer>Made using React & ❤️ by Vidit</footer>
    </div>
  );
}
