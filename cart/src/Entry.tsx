import React from "react";

export interface EntryProps {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
}

export const Entry = ({ id, firstName, lastName, phone }: EntryProps) => {
  return (
    <dl>
      <dt>id</dt>
      <dd>{id}</dd>
      <dt>firstName</dt>
      <dd>{firstName}</dd>
      <dt>lastName</dt>
      <dd>{lastName}</dd>
      <dt>phone</dt>
      <dd>{phone}</dd>
    </dl>
  );
};
