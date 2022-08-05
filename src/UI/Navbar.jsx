import React from "react";
import { TbForklift } from "react-icons/tb";
import styled from "styled-components";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      id: 1,
      text: "home",
      url: "/",
    },
    {
      id: 2,
      text: "about",
      url: "/about",
    },
    {
      id: 3,
      text: "products",
      url: "/products",
    },
  ];
  return (
    <Wrapper>
      <header className="lHeader" id="header">
        <nav className="nav bdContainer">
          <NavLink to="/" className="nav__logo">
            <TbForklift /> India Sale & Services Enterprises
          </NavLink>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li className="nav__item">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive ? "active-link" : "nav__link"
                      }
                    >
                      {text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className="bx bx-menu"></i>
          </div>
        </nav>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .bdContainer {
    max-width: 960px;
    width: calc(100% - 2rem);
    margin-left: auto;
    margin-right: auto;
  }

  .bdGrid {
    display: grid;
    gap: 1.5rem;
  }

  .lHeader {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: var(--body-color);
  }

  /*========== NAV ==========*/
  .nav {
    max-width: 1024px;
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    .nav__menu {
      position: fixed;
      top: -100%;
      left: 0;
      width: 100%;
      padding: 1.5rem 0 1rem;
      text-align: center;
      background-color: var(--body-color);
      transition: 0.4s;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 0 0 1rem 1rem;
      z-index: var(--z-fixed);
    }
  }

  .nav__item {
    margin-bottom: var(--mb-2);
  }

  .nav__link,
  .nav__logo,
  .nav__toggle {
    color: var(--text-color);
    font-weight: var(--font-medium);
  }

  .nav__logo:hover {
    color: var(--first-color);
  }

  .nav__link {
    transition: 0.3s;
  }

  .nav__link:hover {
    color: var(--first-color);
  }

  .nav__toggle {
    font-size: 1.3rem;
    cursor: pointer;
  }

  /* Show menu */
  .show-menu {
    top: var(--header-height);
  }

  /* Active menu */
  .active-link {
    color: var(--first-color);
  }
  .link {
    color: var(--text-color);
  }

  /* Change background header */
  .scroll-header {
    box-shadow: 0 2px 4px rgba(236, 0, 0, 0.1);
  }

  /*========== MEDIA QUERIES ==========*/
  @media screen and (min-width: 576px) {
    .home__container,
    .about__container,
    .app__container {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }

    .about__data,
    .about__initial,
    .app__data,
    .app__initial,
    .contact__container,
    .contact__initial {
      text-align: initial;
    }

    .about__img,
    .app__img {
      width: 380px;
      order: -1;
    }

    .contact__container {
      grid-template-columns: 1.75fr 1fr;
      align-items: center;
    }
    .contact__button {
      justify-self: center;
    }
  }

  @media screen and (min-width: 768px) {
    body {
      margin: 0;
    }

    .section {
      padding-top: 8rem;
    }

    .nav {
      height: calc(var(--header-height) + 1.5rem);
    }
    .nav__list {
      display: flex;
    }
    .nav__item {
      margin-left: var(--mb-5);
      margin-bottom: 0;
    }
    .nav__toggle {
      display: none;
    }

    .change-theme {
      position: initial;
      margin-left: var(--mb-2);
    }

    .home__container {
      height: 100vh;
      justify-items: center;
    }

    .services__container,
    .menu__container {
      margin-top: var(--mb-6);
    }

    .menu__container {
      grid-template-columns: repeat(3, 210px);
      column-gap: 4rem;
    }
    .menu__content {
      padding: 1.5rem;
    }
    .menu__img {
      width: 130px;
    }

    .app__store {
      margin: 0 var(--mb-1) 0 0;
    }
  }

  @media screen and (min-width: 960px) {
    .bd-container {
      margin-left: auto;
      margin-right: auto;
    }

    .home__img {
      width: 500px;
    }

    .about__container,
    .app__container {
      column-gap: 7rem;
    }
  }

  /* For tall screens on mobiles y desktop*/
  @media screen and (min-height: 721px) {
    .home__container {
      height: 640px;
    }
  }
`;
export default Navbar;
