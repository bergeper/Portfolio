// https://api.github.com/users/bergeper/repos
import axios from "axios";
// import { IOmdbResponse } from "../models/IOmdbResponse";

export async function gitrepo() {
  axios.get(`https://api.github.com/users/bergeper/repos`).then((response) => {
    response.data;
    console.log(response.data);
  });
}
