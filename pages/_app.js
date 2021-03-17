import Head from "next/head";
import { useEffect, useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Corner from "./corner";

import "./styles.scss";

const MyApp = () => {
  let timeOutId = null;

  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState("Select an option");

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setIsOpen(false);
    });
  };

  return (
    <div className="App">
      <Head>
        <title>Marc Erwin a.k.a Trí Nghĩa</title>
        <link rel="icon" href="static/Developer.ico" />
        <meta name="Description" content="Marc Erwin" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="static/Developer.ico" />
      </Head>
      <header></header>
      <main>
        <Corner link={"https://github.com/imjakob/react-a11y"} />
        <h1 className="h1 m-2">Click outside React</h1>
        <section className="section-show-up">
          <div onBlur={onBlurHandler} onFocus={() => clearTimeout(timeOutId)}>
            <Button
              type="primary"
              className="m-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              {option}
            </Button>

            {isOpen && (
              <ul>
                {["Option 1", "Option 2", "Option 3", "Option 4"].map(
                  (item) => (
                    <li key={item}>
                      <Button
                        type="primary"
                        className="m-2"
                        ghost
                        onClick={() => {
                          setOption(item);
                          setIsOpen(!isOpen);
                        }}
                      >
                        {item}
                      </Button>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
        </section>
      </main>
      <footer>
        <div>
          <p>
            Created by &nbsp;
            <span className="font-weight-bold">Marc Erwin</span>&nbsp; a.k.a
            &nbsp;
            <span className="font-weight-bold">Trí Nghĩa</span> &nbsp;
          </p>
          <img
            src="/static/pioneer-climb.svg"
            alt="Marc Erwin also known as Trí Nghĩa"
            title="Marc Erwin also known as Trí Nghĩa"
          />
        </div>
      </footer>
    </div>
  );
};

export default MyApp;
