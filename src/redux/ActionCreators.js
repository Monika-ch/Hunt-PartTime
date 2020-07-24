import * as ActionTypes from "./ActionTypes";
export const addUser = (
  name,
  email,
  contactNum,
  requirement,
  experience,
  education
) => ({
  type: ActionTypes.ADD_USER,
  payload: {
    name: name,
    email: email,
    contactNum: contactNum,
    requirement: requirement,
    experience: experience,
    education: education,
  },
});
