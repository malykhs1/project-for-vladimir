import React, { useEffect, useState } from "react";

export const ClientCard = ({ card }) => {
  const [color, setColor] = useState("");
  const [backColor, setBackColor] = useState("");

  const checkStatus = (card) => {
    if (card.currentStage === "Done") {
      setColor("#30D869");
      setBackColor("#EBFCEC");
    }
    if (card.currentStage === "Cancelled") {
      setColor("#3CB2E4");
      setBackColor("#EBF7FC");
    }

    if (card.currentStage === "Negotiation") {
      setColor("#E4783C");
      setBackColor("#FAEEE8");
    }
    if (card.currentStage === "In progress") {
      setColor("#2D2D2D");
      setBackColor("#F6F9FA");
    }
  };

  useEffect(() => {
    checkStatus(card);
  }, [card]);

  return (
    <>
      <div className="card">
        <div className="card__container">
          <div className="card__client-data-text">
            <h2 className="card__client-title">{card.title}</h2>
            <p className="card__client-id">{card.clientID}</p>
          </div>
          <p className="card__client-address">{card.clientAddress}</p>
          <div className="card__client-tags-container">
            <p className="card__client-room-tag">{card.clientRoom1}</p>
            <p className="card__client-room-tag">{card.clientRoom2}</p>
            <p className="card__client-room-tag">{card.clientRoom3}</p>
          </div>

          <div className="card__actual-info-container">
            <div className="card__info-container card__update-info-container">
              <p className="card__info-container-title card__update-title">
                Last updated
              </p>
              <p className="card__update-date">{card.updateDate}</p>
            </div>

            <div className="card__info-container card__update-amount-container">
              <p className="card__info-container-title card__amount-title">
                Total
              </p>
              <p className="card__amount-price">{card.amountPrice}</p>
            </div>

            <div className="card__info-container card__update-stage-container">
              <p className="card__info-container-title card__stage-title">
                Stage
              </p>
              <p
                style={{ color: `${color}`, background: `${backColor}`}}
                className="card__stage-current"
              >
                {card.currentStage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
