import React from "react";
import styles from "./PopularCars.module.css"; // Import your CSS module

interface CardData {
  id: string;
  imgUrl: string;
  caption: {
    title: string;
    description: string;
    seatNum: string;
    shiftType: string;
    doors: string;
    isAc: string;
    rate: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "1",
    imgUrl: "Photos/mitsubishi.svg",
    caption: {
      title: "Mitsubishi Eclipse",
      description:
        "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology, and driving confidence.",
      seatNum: "6",
      shiftType: "Automatic",
      doors: "5",
      isAc: "AC",
      rate: "AED 2700/MONTHLY",
    },
  },
  {
    id: "2",
    imgUrl: "Photos/jac.svg",
    caption: {
      title: "Jac J7",
      description:
        "S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.",
      seatNum: "6",
      shiftType: "Automatic",
      doors: "5",
      isAc: "AC",
      rate: "AED 2700/MONTHLY",
    },
  },
  {
    id: "3",
    imgUrl: "Photos/mitsubishi.svg",
    caption: {
      title: "Mitsubishi Eclipse",
      description:
        "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",
      seatNum: "6",
      shiftType: "Automatic",
      doors: "5",
      isAc: "AC",
      rate: "AED 2700/MONTHLY",
    },
  },
  {
    id: "4",
    imgUrl: "Photos/jac.svg",
    caption: {
      title: "Jac J7",
      description:
        "S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.",
      seatNum: "6",
      shiftType: "Automatic",
      doors: "5",
      isAc: "AC",
      rate: "AED 2700/MONTHLY",
    },
  },
  {
    id: "5",
    imgUrl: "Photos/mitsubishi.svg",
    caption: {
      title: "Mitsubishi Eclipse",
      description:
        "Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",
      seatNum: "6",
      shiftType: "Automatic",
      doors: "5",
      isAc: "AC",
      rate: "AED 2700/MONTHLY",
    },
  },

  // Add other cards similarly...
];

const PopularCars: React.FC = () => {
  return (
    <section className={styles.carCards}>
      <h2>Most popular cars</h2>
      <div className={styles.popularCars}>
        {cardsData.map((data) => (
          <div key={data.id} className={styles.card}>
            <img
              className={styles.carPhoto}
              src={data.imgUrl}
              alt={data.caption.title}
            />
            <div className={styles.cardDescription}>
              <h3>{data.caption.title}</h3>
              <p>{data.caption.description}</p>
              <div className={styles.carDetails}>
                <div>
                  <img src="Photos/icons/seat.svg" alt="Seats icon" />
                  <p>{data.caption.seatNum} People</p>
                </div>
                <div>
                  <img
                    src="Photos/icons/gear.svg"
                    alt="Gear icon"
                    style={{ width: "9px" }}
                  />
                  <p>{data.caption.shiftType}</p>
                </div>
                <div>
                  <img src="Photos/icons/door.svg" alt="Doors icon" />
                  <p>{data.caption.doors} Doors</p>
                </div>
                <div>
                  <img src="Photos/icons/ac.svg" alt="AC icon" />
                  <p>{data.caption.isAc}</p>
                </div>
              </div>
              <div className={styles.rateAndBook}>
                <h2>{data.caption.rate}</h2>
                <button className={styles.bookButton}>Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCars;
