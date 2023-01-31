import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Question from "./Question";
import * as yup from "yup";

const Questions = () => {
  const QA = [
    {
      id: 1,
      question: "What is Netflix",
      answer: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices. You can watch as much as you want, whenever you want – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week! `,
    },
    {
      id: 2,
      question: "How much does Netflix cost?",
      answer: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $6.99 to $19.99 a month. No extra costs, no contracts.`,
    },
    {
      id: 3,
      question: "What's different on Basic with ads?",
      answer: `Basic with ads is a great way to enjoy movies and TV shows at a lower price. You can stream your favorites on any device with limited ad breaks. This plan does not allow downloads and a limited number of movies and TV shows are not available due to licensing restrictions. Some location and device restrictions also apply. Learn more.`,
    },
    {
      id: 4,
      question: "Where can I watch?",
      answer: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
        You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
        `,
    },
    {
      id: 5,
      question: "How do I cancel?",
      answer: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
    },
    {
      id: 6,
      question: "What can I watch on Netflix?",
      answer: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
    },
    {
      question: "Is Netflix good for kids?",
      answer: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
        Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
    },
  ];
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const navigate = useNavigate();

  //Validation
  const inputRef = useRef();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userEmail = {
      email: email,
    };

    try {
      const isTouched = await schema.validate(userEmail);
      console.log(isTouched);
      navigate("/signup");
    } catch (e) {
      console.error(e);
      inputRef.current.focus();
      setTouched(true);
    }
  };

  return (
    <Component>
      <section className="wrapper questions">
        <h1
          className="questions__title"
          style={{ textAlign: "center", padding: "50px 0" }}
        >
          Frequently Asked Questions
        </h1>
        <div
          className="questions__container"
          style={{ width: "70%", margin: "0 auto 50px" }}
        >
          {QA.map((q) => {
            return (
              <Question key={q.id} question={q.question} answer={q.answer} />
            );
          })}
        </div>
        <div className="questions__start">
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="get-started" onSubmit={handleSubmit}>
            <div className="input-container">
              <input
                ref={inputRef}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email address</label>
            </div>

            <button type="submit">Get Started</button>
            {touched ? (
              <p
                style={{
                  fontSize: "0.93rem",
                  position: "absolute",
                  bottom: "-45px",
                  left: "0",
                  color: "#ffa00a",
                }}
              >
                Email is requied!
              </p>
            ) : null}
          </form>
        </div>
      </section>
    </Component>
  );
};

const Component = styled.div`
  background-color: #000;
  border-bottom: 8px solid #222;
  section {
    height: auto;

    .questions__start {
      text-align: center;
      margin: 60px 0;
      p {
        font-size: 1.3rem;
        margin-bottom: 20px;
      }

      .get-started {
        display: flex;
        justify-content: center;
        height: 60px;
        width: 60%;
        margin: 0 auto;
        background-color: white;
        position: relative;
        .input-container {
          position: relative;
          height: 80%;
          width: 70%;
          align-self: end;

          & input {
            height: 100%;
            width: 100%;
            padding: 10px 8px;
            border: none;
            outline: none;

            &:focus ~ label {
              top: 0;
              font-size: 0.8rem;
              font-weight: 700;
            }
          }

          & label {
            color: #8c8c8c;
            position: absolute;
            top: 35%;
            padding: 0 8px;
            pointer-events: none;
            left: 0;
            transform: translateY(-50%);
            font-size: 0.9rem;
            transition: font 0.1s ease, top 0.1s ease, transform 0.1s ease;
          }
        }

        button {
          width: 30%;
          min-width: 170px;
          font-size: 1.6rem;
          position: relative;
          padding: 5px;

          &::after {
            content: "〉";
            position: absolute;
            margin-left: 5px;
            bottom: 16px;
          }
        }
      }
    }
  }
`;

export default Questions;
