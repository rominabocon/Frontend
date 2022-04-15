import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendModifiedData } from "../../actions";


import style from "./Client_profile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faWallet,
  faBagShopping,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function ClientProfile() {
  const client_info = useSelector((state) => state.loggedInClient);
  const [dataToChange, setDataToChange] = useState(Object.assign({}, client_info));

  const { login_name, login_password, name, lastname, phone, email } = client_info;
  const { streetNumber, provinceDepartment, city, zipCode, particularDetails } = client_info.address;

  const dispatch = useDispatch();

  function onChangeData(e) {
    const key = e.target.name;
    if(dataToChange.hasOwnProperty(key)){
      setDataToChange({...dataToChange, [key]: e.target.value})
    } else {
      setDataToChange({...dataToChange, address: {...dataToChange.address, [key]: e.target.value}});
    }
  }

  return (
    <div className={style.background}>
      <div className={style.firstColumn}>
        <div className={style.containerForm}>
          <form
            className={style.subContainerForm}
            id="form"
            onSubmit={(e) => {
              e.preventDefault();
              sendModifiedData(dataToChange, dispatch);
            }}
          >
            <div className={style.formGroups}>
              <div className={style.inputContainer}>
                <label className={style.titleInput}>User</label>
                <input
                  className={style.input}
                  type="text"
                  name="login_name"
                  defaultValue={login_name}
                  onChange={(e) => onChangeData(e)}
                />
              </div>
              <div className={style.inputContainer}>
                <label className={style.titleInput}>Password</label>
                <input
                  className={style.input}
                  type="password"
                  name="login_password"
                  defaultValue={login_password}
                  onChange={(e) => onChangeData(e)}
                />
              </div>
            </div>

            <div className={style.formGroups}>
              <div className={style.inputContainer}>
                <label className={style.titleInput}>Name</label>
                <input
                  className={style.input}
                  type="text"
                  name="name"
                  defaultValue={name}
                  onChange={(e) => onChangeData(e)}
                />
              </div>
              <div className={style.inputContainer}>
                <label className={style.titleInput}>Last name</label>
                <input
                  className={style.input}
                  type="text"
                  name="lastname"
                  defaultValue={lastname}
                  onChange={(e) => onChangeData(e)}
                />
              </div>
            </div>

            <div className={style.formGroups}>
              <div className={style.inputContainer}>
                <label className={style.titleInput}>Phone</label>
                <input
                  className={style.input}
                  type="text"
                  name="phone"
                  defaultValue={phone}
                  onChange={(e) => onChangeData(e)}
                />
              </div>
              <div className={style.inputContainer}>
                <label className={style.titleInput}>Email</label>
                <input
                  className={style.input}
                  type="email"
                  name="email"
                  defaultValue={email}
                  onChange={(e) => onChangeData(e)}
                />
              </div>
            </div>

            <div className={style.formGroups}>
              <div className={style.inputContainer}>
                <label className={style.titleInput}>Street</label>
                <input
                  className={style.input}
                  type="text"
                  name="streetNumber"
                  defaultValue={streetNumber}
                  onChange={(e) => onChangeData(e)}
                />
              </div>

              <div className={style.inputContainer}>
                <label className={style.titleInput}>State</label>
                <input
                  className={style.input}
                  type="text"
                  name="provinceDepartment"
                  defaultValue={provinceDepartment}
                  onChange={(e) => onChangeData(e)}
                />
              </div>

              <div className={style.inputContainer}>
                <label className={style.titleInput}>City</label>
                <input
                  className={style.input}
                  type="text"
                  name="city"
                  defaultValue={city}
                  onChange={(e) => onChangeData(e)}
                />
              </div>

              <div className={style.inputContainer}>
                <label className={style.titleInput}>Zip code</label>
                <input
                  className={style.input}
                  type="text"
                  name="zipCode"
                  defaultValue={zipCode}
                  onChange={(e) => onChangeData(e)}
                />
              </div>

              <div className={style.inputContainer}>
                <label className={style.titleInput}>Other details</label>
                <input
                  className={style.input}
                  type="text"
                  name="particularDetails"
                  defaultValue={particularDetails}
                  onChange={(e) => onChangeData(e)}
                />
              </div>
            </div>

            <div className={style.formGroups}>
              <div className={style.inputContainerSave}>
                <input
                  className={style.saveDataButton}
                  type="submit"
                  value="Modify data"
                  onChange={(e) => onChangeData(e)}
                />
              </div>
            </div>
          </form>
        </div>

        <div className={style.infoContainer}>
          <div className={style.totalSpendContainer}>
            <FontAwesomeIcon className={style.infoIconW} icon={faWallet} />
            <div className={style.textInfo}>
              <p className={style.textInfoTitle}>Total spend</p>
              <p className={style.textInfoContent}>$600000</p>
            </div>
          </div>

          <div className={style.totalPurchaseContainer}>
            <FontAwesomeIcon className={style.infoIconB} icon={faBagShopping} />
            <div className={style.textInfo}>
              <p className={style.textInfoTitle}>Total purchase</p>
              <p className={style.textInfoContent}>$600000</p>
            </div>
          </div>

          <div className={style.deleteAccountContainer}>
            <FontAwesomeIcon className={style.infoIconC} icon={faTrashCan} />
            <p className={style.deleteText}>Delete account</p>
          </div>
        </div>
      </div>

      <div className={style.secondColumn}>
        <div className={style.profileImageContainer}>
          <img
            className={style.profileImage}
            src="https://prephoopsnext.com/wp-content/themes/prepsports/resources/assets/images/default-user.png"
            alt="profile"
          />
        </div>

        <div className={style.containerCart}>
          <FontAwesomeIcon className={style.cartImage} icon={faCartShopping} />
          <p className={style.itemsInCart}>8</p>
        </div>

        <div className={style.generalButtons}>
          <div className={style.generalButton}>Favorites</div>
          <div className={style.generalButton}>Orders</div>
        </div>
      </div>
    </div>
  );
}

export default ClientProfile;
