import { connect } from "../database";

export const getUsers = async (req, res) => {
  const conn = await connect();
  const[rows] = await conn.query("SELECT * FROM users");
  res.json(rows);
};