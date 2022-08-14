import React from "react";
import styled from "styled-components";
import { RiAddLine } from "react-icons/ri";

const Question = () => {
  return (
    <Wrapper>
      <section className="questions section" id="faqs">
        <h2 className="section__title-center questions__title container">
          Some common questions <br />
          were often asked
        </h2>
        <div className="questions__container container grid">
          <div className="questions__group">
            <div className="questions__item">
              <header className="questions__header">
                <RiAddLine className="questions__icon" />
                <h3 className="questions__item-title">
                  What causes brown crispy leaves?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <RiAddLine className="questions__icon" />
                <h3 className="questions__item-title">
                  My flowers are falling off or dying?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <RiAddLine className="questions__icon" />
                <h3 className="questions__item-title">
                  What causes leaves to become pale?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>
          </div>

          <div className="questions__group">
            <div className="questions__item">
              <header className="questions__header">
                <RiAddLine className="questions__icon" />
                <h3 className="questions__item-title">
                  How do i choose a plant?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <RiAddLine className="questions__icon" />
                <h3 className="questions__item-title">
                  How do I change the pots?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>

            <div className="questions__item">
              <header className="questions__header">
                <RiAddLine className="questions__icon" />
                <h3 className="questions__item-title">
                  Why are gnats flying around my plant?
                </h3>
              </header>
              <div className="questions__content">
                <p className="questions__description">
                  Plants are easy way to add color energy and transform your
                  space but which planet is for you. Choosing the right plant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .questions {
    background-color: var(--first-color-lighten);
  }

  .questions__container {
    gap: 1.5rem;
    padding: 1.5rem 0;
  }

  .questions__group {
    display: grid;
    row-gap: 1.5rem;
  }

  .questions__item {
    background-color: var(--container-color);
    border-radius: 0.25rem;
  }

  .questions__item-title {
    font-size: var(--small-font-size);
    font-weight: var(--font-medium);
  }

  .questions__icon {
    font-size: 1.25rem;
    color: var(--title-color);
  }

  .questions__description {
    font-size: var(--smaller-font-size);
    padding: 0 1.25rem 1.25rem 2.5rem;
  }

  .questions__header {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    padding: 0.75rem 0.5rem;
    cursor: pointer;
  }

  .questions__content {
    overflow: hidden;
    height: 0;
  }

  .questions__item,
  .questions__header,
  .questions__item-title,
  .questions__icon,
  .questions__description,
  .questions__content {
    transition: 0.4s;
  }

  .questions__item:hover {
    box-shadow: 0 2px 8px hsla(var(--hue), 4%, 15%, 0.15);
  }

  /*Rotate icon, change color of titles and background*/
  .accordion-open .questions__header,
  .accordion-open .questions__content {
    background-color: var(--first-color);
  }

  .accordion-open .questions__item-title,
  .accordion-open .questions__description,
  .accordion-open .questions__icon {
    color: #fff;
  }

  .accordion-open .questions__icon {
    transform: rotate(45deg);
  }

  @media screen and (min-width: 767px) {
    .questions__container {
      grid-template-columns: repeat(2, 1fr);
    }

    .questions__container {
      align-items: flex-start;
    }
  }

  /* For large devices */
  @media screen and (min-width: 992px) {
    .questions__container {
      padding: 1rem 0 4rem;
    }

    .questions__title {
      text-align: initial;
    }

    .questions__group {
      row-gap: 2rem;
    }

    .questions__header {
      padding: 1rem;
    }

    .questions__description {
      padding: 0 3.5rem 2.25rem 2.75rem;
    }
  }
`;

export default Question;
