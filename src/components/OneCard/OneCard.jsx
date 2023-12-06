import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import styles from "../OneCard/OneCard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../features/carsSlice";
import Infomode from "./Infomode";
import { dataBase } from "./fakedatabase";

import Offers from "../Offers/Offers";

import { useState } from "react";

const OneCard = () => {
  const dispatch = useDispatch();

  const { id } = useParams();

  const carInf = useSelector((state) =>
    state.cars.cars.find((cars) => cars._id === id)
  );

  const scroll = () => {
    window.scrollBy({
      top: 1200,
      behavior : 'smooth'
    })
  }

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const [pashState, setPashState] = useState(true);

  const handlePashClick = () => {
    setPashState(pashState ? false : true);
  };

  return (
    <div>
      <div>
        <div className={styles.cont}>
          <div className={styles.img}>
            <img
              src={`http://localhost:4090${carInf?.cars_info.image[0]}`}
              alt="photo"
            />
          </div>
          <div className={styles.title}>
            <div>
              <p>{carInf?.cars_info.name}</p>
              <div className={styles.p}>
                <p>{carInf?.cars_info.h_p} Бензин</p>
                <p>{carInf?.cars_info.transmission}</p>
                <p>{carInf?.cars_info.drive_unit}</p>
                <p>{carInf?.cars_info.mileage}</p>
                <p>{carInf?.cars_info.owners} владельца</p>
                <p>Экстерьер: {carInf?.cars_info.color}</p>
                <p>Интерьер: {carInf?.cars_info.interior_color}</p>
                <p className={styles.cen}>от {carInf?.cars_info.price}</p>
              </div>
              <button className={styles.btn} onClick={() => scroll()}>
                получить предложение
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.text}>
            <div className={styles.divbtn}>
              <p onClick={handlePashClick}>СТАНДАРТНОЕ ОБОРУДОВАНИЕ </p>
              <p onClick={handlePashClick}>ТЕХНИЧСЕКИЕ ХАРАКТЕРИСТИКИ</p>
            </div>

            {pashState && (
              <div className={styles.infomode}>
                <Infomode
                  name={"Системы информации и коммуникации"}
                  data={dataBase.systems}
                />
                <Infomode
                  name={"Безопасность, освещение и обзор"}
                  data={dataBase.security}
                />
                <Infomode name={"Пакеты и линии"} data={dataBase.line} />
                <Infomode name={"Другое"} data={dataBase.more} />
                <Infomode
                  name={"Коробка передач и ходовая часть"}
                  data={dataBase.transmission}
                />
                <Infomode name={"Колеса и диски"} data={dataBase.wheels} />
                <Infomode name={"Экстерьер"} data={dataBase.exterior} />
                <Infomode name={"Интерьер"} data={dataBase.interior} />
                <Infomode
                  name={"Обивка и дизайн интерьера"}
                  data={dataBase.desing}
                />
                <Infomode
                  name={"Функциональное оборудование"}
                  data={dataBase.function}
                />
              </div>
            )}
            {!pashState && (
              <div className={styles.contt}>
                <div>
                  <p>ДВИГАТЕЛЬ</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Рабочий объем, куб. см ................</p>
                      <p>
                        Максимальный крутящий момент, Н•м при об/мин
                        ................
                      </p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>
                        Максимальная мощность, л. с. при об/мин ................
                      </p>
                      <p>
                        Количество цилиндров / клапанов на цилиндр
                        ................
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>ХОДОВЫЕ КАЧЕСТВА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Максимальная скорость, км/ч ................</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Время разгона 0–100 км/ч, сек ................</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>РАСХОД ТОПЛИВА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Смешанный цикл, л/100 км ................</p>
                      <p>Загородный цикл, л/100 км ................</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Городской цикл, л/100 км ................</p>
                      <p>Выброс СО2, г/км ................</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>ГАБАРИТЫ</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Длина, мм ................</p>
                      <p>Высота, мм (вместе с антенной) ................</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Ширина, мм ................</p>
                      <p>Клиренс, мм ................</p>
                    </div>
                  </div>
                </div>

                <div>
                  <p>МАССА</p>
                  <div className={styles.info_block}>
                    <div className={styles.info_blocks}>
                      <p>Собственная масса (ЕС), кг................</p>
                    </div>
                    <div className={styles.info_blocks}>
                      <p>Допустимая полная масса, кг ................</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div></div>
        </div>
      </div>
      <div className={styles.offers}>
        <Offers/>
      </div>
    </div>
  );
};

export default OneCard;