import { useState } from "react";
import { Calendar } from "./Calendar";
import moment from "moment";

const fakeEvents = [
  {
    date: new Date(),
    title: "Trash day!",
  },
  {
    date: new Date(),
    title: "Other stuff",
  },
];

export const App = () => {
  const today = moment();
  const events = useState(fakeEvents);

  const onClickDate = (selectedDate) => {
    alert(`User clicked: ${selectedDate.toLocalDateString()}`);
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Calendar
        events={events}
        startingDate={today}
        onClickDate={onClickDate}
      />
    </div>
  );
};
