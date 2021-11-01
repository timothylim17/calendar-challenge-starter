import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import moment from "moment";
import React, { useState, useEffect } from "react";

// Work your magic here!
const Contain = styled(Container)`
  background-color: #303030;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;
`;

const Rows = styled(Row)`
  padding-bottom: 10px;
  padding-left: 20px;
`;

const Buttons = styled(Row)`
  text-align: center;
  padding-bottom: 10px;
`;

const CalendarCell = styled.div`
  background-color: #555555;
  height: 120px;
  width: 180px;
`;

const DeadCalendarCell = styled.div`
  background-color: #363636;
  height: 120px;
  width: 180px;
`;

const DateBlock = styled.h1`
  color: #ffffff;
  padding-top: 20px;
  padding-bottom: 5px;
  text-align: center;
`;

const NumDate = styled.p`
  color: #ffffff;
  padding-left: 5px;
`;

export const Calendar = ({ events, startingDate, onClickDate }) => {
  const [date, setDate] = useState(moment());
  const [month, setMonth] = useState(date.format("MMMM"));
  const [day, setDay] = useState(date.format("dddd"));
  const [year, setYear] = useState(date.format("YYYY"));
  const [daysInMonth, setDaysInMonth] = useState(date.daysInMonth());

  useEffect(() => {
    // setMonth(date.format("MMMM"));
    // setYear(date.format("YYYY"));
    console.log("Effect!");
  });

  var firstDayOfMonth = function () {
    let temp = date.startOf("months").format("dddd");
    let countNum;

    switch (temp) {
      case "Sunday":
        countNum = 1;
        break;
      case "Monday":
        countNum = 0;
        break;
      case "Tuesday":
        countNum = -1;
        break;
      case "Wednesday":
        countNum = -2;
        break;
      case "Thursday":
        countNum = -3;
        break;
      case "Friday":
        countNum = -4;
        break;
      case "Saturday":
        countNum = -5;
        break;
      default:
        countNum = 0;
        break;
    }

    return countNum;
  };

  var callCalendar = function () {
    var rows = function (num) {
      let counter = num;
      let row = [];
      let temp = [];

      for (let j = 0; j < 7; j++) {
        row[j] = (
          <Col>
            {counter <= 0 || counter > daysInMonth ? (
              <DeadCalendarCell />
            ) : (
              <CalendarCell id={counter}>
                <NumDate>{counter}</NumDate>
              </CalendarCell>
            )}
          </Col>
        );
        counter++;
      }
      temp[0] = <Rows>{row}</Rows>;
      temp[1] = counter;
      return temp;
    };

    let count = firstDayOfMonth();
    let result = [];
    let calendar = [];
    for (let i = 0; i < 6; i++) {
      if (i > 0) {
        count = result[1];
      }
      result = rows(count);
      let array = result[0];
      calendar.push(array);
    }
    return calendar;
  };

  var todaysDate = function () {
    // let today = moment(); //* "2021-10-26T01:17:20.440Z"
    // let dateJan = moment("01/01/2021", "MM/DD/YYYY"); //* "2021-01-01T08:00:00.000Z"
    // let weeknumber = moment("01/03/2021", "MM-DD-YYYY").week(); //* Jan 3rd = 2nd week
    // let weekDayJan = dateJan.format("dddd"); //* Friday
    // let monthJan = today.format("MMMM"); //* January
    // let year21 = today.format("YYYY"); //* 2021
    // let firstDayOfMonth = today.startOf("months").format("dddd"); //* Friday

    // let output = <DateBlock>{firstDayOfMonth}</DateBlock>;

    let output = <DateBlock>{month + " " + year}</DateBlock>;

    return <Row>{output}</Row>;
  };

  return (
    <Contain fluid>
      {todaysDate()}
      <Buttons>
        <Col>
          <button
            onClick={() => {
              // setDate(date.add(-1, "months"));
              this.setState({ date: this.state.date.add(-1, "months") });
              console.log(date.format("MMMM") + " " + date.format("YYYY"));
            }}
          >
            PREVIOUS
          </button>
        </Col>
        <Col>
          <button
            onClick={() => {
              // setDate(date.add(1, "months"));
              this.setState({ date: this.state.date.add(1, "months") });
              console.log(date.format("MMMM") + " " + date.format("YYYY"));
            }}
          >
            NEXT
          </button>
        </Col>
      </Buttons>
      {callCalendar()}
    </Contain>
  );
};
