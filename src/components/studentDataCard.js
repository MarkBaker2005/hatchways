import React, { useState } from "react";

const UserDataCard = ({
  index,
  img,
  firstName,
  lastName,
  email,
  company,
  skill,
  averageGrade,
  grades,
  tags,
  addTag,
}) => {
  const [showGrades, setShowGrades] = useState(false);
  return (
    <div className="studentCard">
      <img src={img} className="img" alt="avatar" />
      <h1 className="name">{`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}</h1>
      <div className="content">
        <div>Email: {email}</div>
        <div>Company: {company}</div>
        <div>Skill: {skill}</div>
        <div>Average: {averageGrade}%</div>
      </div>
    </div>
  );
};

export default UserDataCard;
