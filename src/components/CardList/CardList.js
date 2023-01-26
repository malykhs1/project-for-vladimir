import React, { useEffect, useState } from "react";
import { ClientCard } from "../Card/Card";
import searchIcon from "../../images/search-icon.svg";
import { apiCustomer } from "../../utils/api";

export const CardList = () => {
  const [inputValue, setInputValue] = useState("");
  const [customersData, setCustomersData] = useState([]);

  useEffect(() => {
    apiCustomer
      .getCustomers()
      .then((data) => {
        setCustomersData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredCustomers = customersData.filter((customer) => {
    if (inputValue.length > 2) {
      return (
        customer.title.toLowerCase().includes(inputValue.toLowerCase()) ||
        customer.clientAddress.toLowerCase().includes(inputValue.toLowerCase())
      );
    } else return customer;
  });

  filteredCustomers.sort(
    (a, b) =>
      new Date(b.updateDate.replace(/(\d{2})-(\d{2})/, "$2-$1")) -
      new Date(a.updateDate.replace(/(\d{2})-(\d{2})/, "$2-$1"))
  );

  return (
    <>
      <div className="card-client-container">
        <div className="card-client-search">
          <div className="card-client-search__container">
            <form className="card-client-search__form">
              <input
                onChange={(event) => setInputValue(event.target.value)}
                id="customerSearch"
                className="card-client-search__input"
                name="customerSearch"
                type="search"
                placeholder="Search Customer"
                required={true}
              />
              <div className="card-client-search__button">
                <img
                  className="card-client-search__button-pic"
                  src={searchIcon}
                  alt="Search"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="client-card-list">
          {filteredCustomers.length > 0 ? (
            <div className="card-list">
              {filteredCustomers.map((card) => (
                <ClientCard key={card.clientID} card={card} />
              ))}
            </div>
          ) : (
            <div className="card-list__text">Not found</div>
          )}
        </div>
      </div>
    </>
  );
};
