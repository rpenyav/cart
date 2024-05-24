import React from "react";
import { Entry, EntryProps } from "./Entry";

export interface EntriesProps {
  values: EntryProps[];
  count: number;
}

const Entries = ({ count, values }: EntriesProps) => {
  return (
    <>
      <h3>Total users: {count}</h3>
      {values.map(({ id, firstName, lastName, phone }) => (
        <Entry
          key={id}
          id={id}
          firstName={firstName}
          lastName={lastName}
          phone={phone}
        />
      ))}
    </>
  );
};

export default Entries;
