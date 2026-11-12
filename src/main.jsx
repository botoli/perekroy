import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
function AsteriskIcon() { return <svg className="asterisk-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><path d="M12 6v12" /><path d="M17.196 9 6.804 15" /><path d="m6.804 9 10.392 6" /></svg>; }
function Icon({ name }) { const paths = { "arrow-up-right": <><path d="M7 7h10v10" /><path d="M7 17 17 7" /></>, "arrow-down-right": <><path d="M7 7l10 10" /><path d="M17 7v10H7" /></>, "arrow-up": <><path d="m5 12 7-7 7 7" /><path d="M12 19V5" /></>, plus: <><path d="M5 12h14" /><path d="M12 5v14" /></> }; return <svg className="lucide-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{paths[name]}</svg>; }
function App() {
  const [service, setService] = useState("Переделка вещи");
  const [file, setFile] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <>
      <header className="header">
        <a className="logo" href="#top">
          ПЕРЕКРОЙ<span><AsteriskIcon /></span>
        </a>
        <nav>
          <a href="#about">О проекте</a>
          <a href="#services">Услуги</a>
          <a href="#process">Как это работает</a>
        </nav>
        <a className="header-cta" href="#form">
          Обсудить идею <Icon name="arrow-up-right" />
        </a>
      </header>
      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" /> АПСАЙКЛИНГ · ИНДИВИДУАЛЬНЫЙ ДИЗАЙН
            </div>
            <h1>
              СТАРОЕ
              <br />
              <em>В ДЕЛО.</em>
              <br />
              НОВОЕ
              <br />
              НА ТЕЛО<span className="pink">.</span>
            </h1>
            <p>
              Твои вещи заслуживают второй истории. Превращаем одежду, которую
              ты уже знаешь, в ту, которую захочется носить снова.
            </p>
            <a className="button" href="#form">
              Преобразить свою вещь <span><Icon name="arrow-up-right" /></span>
            </a>
            <div className="hero-note">
              НЕ ВЫБРАСЫВАЙ. ПЕРЕКРАИВАЙ. <span><AsteriskIcon /></span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-top">
              <span>ОДЕЖДА С ХАРАКТЕРОМ</span>
              <span>01 / 03</span>
            </div>
            <img
              src="/hero-model-enhanced.png"
              alt="Образ с переделанной джинсовой одеждой"
            />
            <div className="stamp">
              ВТОРАЯ
              <br />
              ЖИЗНЬ
              <br />
              <b><AsteriskIcon /></b>
            </div>
            <div className="visual-bottom">
              <span>ТВОИ ВЕЩИ — ТВОИ ПРАВИЛА</span>
              <span><Icon name="arrow-down-right" /></span>
            </div>
          </div>
        </section>
        <div className="ticker">
          <div className="ticker-track">
            {[0, 1].map((copy) => (
              <div className="ticker-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
                СТАРОЕ В ДЕЛО <span><AsteriskIcon /></span> НОВОЕ НА ТЕЛО <span><AsteriskIcon /></span> СОЗДАНО
                ДЛЯ ТЕБЯ <span><AsteriskIcon /></span> СТАРОЕ В ДЕЛО <span><AsteriskIcon /></span> НОВОЕ НА ТЕЛО
                <span><AsteriskIcon /></span>
              </div>
            ))}
          </div>
        </div>
        <section className="intro section" id="about">
          <div className="section-label">01 / ИДЕЯ</div>
          <div>
            <h2>
              У КАЖДОЙ ВЕЩИ
              <br />
              ЕСТЬ <em>ВТОРАЯ ВЕРСИЯ.</em>
            </h2>
            <div className="intro-bottom">
              <p>
                Любимые джинсы, забытая рубашка или куртка с историей — всё это
                может стать чем-то совершенно новым.
              </p>
              <p>
                «Перекрой» — молодёжный бренд индивидуального преображения
                одежды. Вместе придумаем вещь, которая будет отражать именно
                тебя.
              </p>
            </div>
          </div>
        </section>
        <section className="services section" id="services">
          <div className="section-label">02 / ЧТО МЫ ДЕЛАЕМ</div>
          <div className="section-head">
            <h2>
              МЕНЯЕМ
              <br />
              <em>ПРАВИЛА ИГРЫ.</em>
            </h2>
            <p>
              От небольшой детали до полного перевоплощения — выбирай, что ближе
              твоей идее.
            </p>
          </div>
          <div className="service-list">
            {[
              [
                "01",
                "Меняем фасон",
                "Подгоним размер, изменим силуэт и найдём новое прочтение привычной вещи.",
              ],
              [
                "02",
                "Создаём новое",
                "Превратим старую одежду в совершенно другое изделие.",
              ],
              [
                "03",
                "Добавляем характер",
                "Детали, декор и необычные сочетания сделают вещь особенной.",
              ],
              [
                "04",
                "Придумываем с нуля",
                "Разработаем индивидуальный дизайн и предварительный эскиз вместе с тобой.",
              ],
            ].map((x) => (
              <div className="service" key={x[0]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
                <b><Icon name="arrow-up-right" /></b>
              </div>
            ))}
          </div>
          <p className="price-note">
            Стоимость зависит от вещи и сложности идеи — обсудим её на
            консультации.
          </p>
        </section>
        <section className="examples section">
          <div className="section-label">03 / ВДОХНОВЕНИЕ</div>
          <div className="examples-grid">
            <div>
              <h2>
                НЕ ПОХОЖЕ
                <br />
                <em>НА ДРУГИХ.</em>
              </h2>
              <p>
                Деним, фактуры, нашивки и неожиданные детали. Здесь нет двух
                одинаковых историй.
              </p>
              <span className="caption">ПРИМЕРЫ ДЛЯ ВДОХНОВЕНИЯ <Icon name="arrow-up-right" /></span>
            </div>
            <div className="inspiration-gallery">
              <figure><img src="/skirts.png" alt="Коллаж с идеями переделки джинсовых юбок" /><figcaption>01 / ДЕНИМ В НОВОЙ ФОРМЕ</figcaption></figure>
              <figure><img src="/accessories.png" alt="Кардхолдеры из денима" /><figcaption>02 / ДЕТАЛИ ИЗ ОСТАТКОВ ТКАНИ</figcaption></figure>
            </div>
          </div>
        </section>
        <section className="process section" id="process">
          <div className="section-label">04 / ПРОЦЕСС</div>
          <h2>
            ОТ ВЕЩИ
            <br />
            <em>ДО НОВОЙ ИСТОРИИ.</em>
          </h2>
          <div className="steps">
            <article>
              <span>01 <Icon name="arrow-up-right" /></span>
              <h3>Расскажи об идее</h3>
              <p>Оставь заявку и покажи вещь, которую хочешь изменить.</p>
            </article>
            <article>
              <span>02 <Icon name="arrow-up-right" /></span>
              <h3>Придумаем вместе</h3>
              <p>Обсудим пожелания, возможности и предварительный эскиз.</p>
            </article>
            <article>
              <span>03 <AsteriskIcon /></span>
              <h3>Носи по-новому</h3>
              <p>
                Твоя вещь получит новую форму и останется единственной в своём
                роде.
              </p>
            </article>
          </div>
        </section>
        <section className="contact section" id="form">
          <div className="contact-copy">
            <div className="section-label">05 / ТВОЙ ХОД</div>
            <h2>
              ЕСТЬ ВЕЩЬ?
              <br />
              <em>ЕСТЬ ИДЕЯ.</em>
            </h2>
            <p>
              Расскажи, что хочется изменить. Начнём с разговора — дальше
              придумаем вместе.
            </p>
            <div className="hand">
              до встречи! <span><Icon name="arrow-up-right" /></span>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <div className="form-heading">
              <h3>Начнём?</h3>
              <span><AsteriskIcon /></span>
            </div>
            <p>Демонстрация формы: отправка заявок пока не подключена.</p>
            <label>
              Как тебя зовут{" "}
              <input required name="name" placeholder="Твоё имя" />
            </label>
            <label>
              Как с тобой связаться{" "}
              <input
                required
                name="contact"
                placeholder="Телефон, Telegram или email"
              />
            </label>
            <label>
              Что будем делать?{" "}
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option>Переделка вещи</option>
                <option>Изменение фасона или размера</option>
                <option>Декор и детали</option>
                <option>Индивидуальный дизайн</option>
                <option>Пока не знаю</option>
              </select>
            </label>
            <label>
              Расскажи о своей идее{" "}
              <textarea
                rows="3"
                placeholder="Какая вещь и что хочется изменить?"
              />
            </label>
            <label className="upload">
              <Icon name="plus" /> {file || "Добавить фото вещи"}
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files[0]?.name || "")}
              />
            </label>
            <button className="button" type="submit">
              Отправить заявку <span><Icon name="arrow-up-right" /></span>
            </button>
            {sent && (
              <p className="notice" role="status">
                Форма пока демонстрационная: отправка и загрузка фото не
                подключены. Для приёма заявок потребуется настроить адрес или
                сервис.
              </p>
            )}
            <small>
              Нажимая кнопку, ты соглашаешься на обработку данных для связи по
              заявке.
            </small>
          </form>
        </section>
      </main>
      <footer>
        <a className="logo" href="#top">
          ПЕРЕКРОЙ<span><AsteriskIcon /></span>
        </a>
        <p>ТВОИ ВЕЩИ — НОВАЯ ИСТОРИЯ</p>
        <div className="footer-contacts">
          <span>КОНТАКТЫ</span>
          <a href="mailto:perekroy@gmail.com">perekroy@gmail.com</a>
          <a href="tel:+79000000000">+7 (900) 000-00-00</a>
        </div>
        <a href="#top">НАВЕРХ <Icon name="arrow-up" /></a>
      </footer>
    </>
  );
}
createRoot(document.getElementById("root")).render(<App />);



