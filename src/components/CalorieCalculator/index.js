import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import {
  MainContainer,
  Title,
  CardContainer,
  MeasurementsContainer,
  MeasurementCard,
  Measurement,
  Unit,
  MeasurementValue,
  ButtonsContainer,
  Button,
  ResultContent,
  ResultText,
  DateContainer,
} from "./styledComponents";

const getCalorie = (height, weight, age, gender, howActive) => {
  if (gender === "Male") {
    if (howActive === "Sedentary (little or no exercise)") {
      const bmr = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
      const amr = bmr * 1.2;
      return amr.toFixed(2);
    } else if (howActive === "Lightly active (exercise 1–3 days/week)") {
      const bmr = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
      const amr = bmr * 1.375;
      return amr.toFixed(2);
    } else if (howActive === "Moderately active (exercise 3–5 days/week)") {
      const bmr = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
      const amr = bmr * 1.55;
      return amr.toFixed(2);
    } else if (howActive === "Active (exercise 6–7 days/week)") {
      const bmr = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
      const amr = bmr * 1.725;
      return amr.toFixed(2);
    } else {
      const bmr = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;
      const amr = bmr * 1.9;
      return amr.toFixed(2);
    }
  } else {
    if (howActive === "Sedentary (little or no exercise)") {
      const bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      const amr = bmr * 1.2;
      return amr.toFixed(2);
    } else if (howActive === "Lightly active (exercise 1–3 days/week)") {
      const bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      const amr = bmr * 1.375;
      return amr.toFixed(2);
    } else if (howActive === "Moderately active (exercise 3–5 days/week)") {
      const bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      const amr = bmr * 1.55;
      return amr.toFixed(2);
    } else if (howActive === "Active (exercise 6–7 days/week)") {
      const bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      const amr = bmr * 1.725;
      return amr.toFixed(2);
    } else {
      const bmr = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;
      const amr = bmr * 1.9;
      return amr.toFixed(2);
    }
  }
};

const CalorieCalculator = () => {
  const [height, setHeight] = useState(170);
  const [weight, setWeight] = useState(60);
  const [age, setAge] = useState(20);

  const [gender, setGender] = useState("Male");

  const [howActive, setHowActive] = useState(
    "Sedentary (little or no exercise)"
  );

  const [startDate, setStartDate] = useState(new Date());

  const onChangeGender = (e) => {
    if (e.target.value === "Male") {
      setGender("Male");
    } else {
      setGender("Female");
    }
  };

  const onChangeHowActive = (e) => {
    if (e.target.value === "Sedentary (little or no exercise)") {
      setHowActive("Sedentary (little or no exercise)");
    } else if (e.target.value === "Lightly active (exercise 1–3 days/week)") {
      setHowActive("Lightly active (exercise 1–3 days/week)");
    } else if (
      e.target.value === "Moderately active (exercise 3–5 days/week)"
    ) {
      setHowActive("Moderately active (exercise 3–5 days/week)");
    } else if (e.target.value === "Active (exercise 6–7 days/week)") {
      setHowActive("Active (exercise 6–7 days/week)");
    } else {
      setHowActive("Very active (hard exercise 6–7 days/week)");
    }
  };

  useEffect(() => {
    document.title = `Calories to consume each day to maintain weight: ${getCalorie(
      height,
      weight,
      age,
      gender,
      howActive
    )}`;
  });

  const onIncrementAge = () => {
    setAge((prevAge) => prevAge + 1);
  };

  const onDecrementAge = () => {
    setAge((prevAge) => prevAge - 1);
  };

  const onIncrementWeight = () => {
    setWeight((prevWeight) => prevWeight + 1);
  };

  const onDecrementWeight = () => {
    setWeight((prevWeight) => prevWeight - 1);
  };

  const onIncrementHeight = () => {
    setHeight((prevHeight) => prevHeight + 1);
  };

  const onDecrementHeight = () => {
    setHeight((prevHeight) => prevHeight - 1);
  };

  return (
    <MainContainer>
      <Title>CALORIE CALCULATOR</Title>
      <CardContainer>
        <CardContainer>
          <CardContainer>
            <Measurement>Date</Measurement>
            <DateContainer>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </DateContainer>
          </CardContainer>
          <CardContainer>
            <Measurement>Name</Measurement>
            <input></input>
          </CardContainer>
          <CardContainer>
            <Measurement>Gender</Measurement>
            <select
              id="genderSelect"
              className="selector-gender"
              onChange={onChangeGender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </CardContainer>
        </CardContainer>
        <MeasurementsContainer>
          <MeasurementCard>
            <Measurement>Age</Measurement>
            <MeasurementValue>
              {age}
              <Unit>yrs</Unit>
            </MeasurementValue>
            <ButtonsContainer>
              <Button onClick={onDecrementAge}>-</Button>
              <Button onClick={onIncrementAge}>+</Button>
            </ButtonsContainer>
          </MeasurementCard>
          <MeasurementCard>
            <Measurement>Height</Measurement>
            <MeasurementValue>
              {height}
              <Unit>cms</Unit>
            </MeasurementValue>
            <ButtonsContainer>
              <Button onClick={onDecrementHeight}>-</Button>
              <Button onClick={onIncrementHeight}>+</Button>
            </ButtonsContainer>
          </MeasurementCard>
          <MeasurementCard>
            <Measurement>Weight</Measurement>
            <MeasurementValue>
              {weight}
              <Unit>kgs</Unit>
            </MeasurementValue>
            <ButtonsContainer>
              <Button onClick={onDecrementWeight}>-</Button>
              <Button onClick={onIncrementWeight}>+</Button>
            </ButtonsContainer>
          </MeasurementCard>
        </MeasurementsContainer>
        <CardContainer>
          <Measurement>How Active Are You?</Measurement>
          <select
            id="howActiveSelect"
            className="selector-gender"
            onChange={onChangeHowActive}
          >
            <option value="Sedentary (little or no exercise)">
              Sedentary (little or no exercise)
            </option>
            <option value="Lightly active (exercise 1–3 days/week)">
              Lightly active (exercise 1–3 days/week)
            </option>
            <option value="Moderately active (exercise 3–5 days/week)">
              Moderately active (exercise 3–5 days/week)
            </option>
            <option value="Active (exercise 6–7 days/week)">
              Active (exercise 6–7 days/week)
            </option>
            <option value="Very active (hard exercise 6–7 days/week)">
              Very active (hard exercise 6–7 days/week)
            </option>
          </select>
        </CardContainer>
        <ResultContent>
          Calories to consume each day to maintain weight :{" "}
          <ResultText>
            {getCalorie(height, weight, age, gender, howActive)}
          </ResultText>
        </ResultContent>
      </CardContainer>
    </MainContainer>
  );
};

export default CalorieCalculator;
