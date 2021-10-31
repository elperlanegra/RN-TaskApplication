import { connect } from '../database';

export const getUsers = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute('SELECT * FROM users');
  res.json(rows);
};

export const saveUser = async (req, res) => {
  try {
    const connection = await connect();
    const [results] = await connection.execute('INSERT INTO users (name, lastName) VALUES (?,?)', [req.body.name, req.body.lastName]);

    const newUsers = {
      id: results.insertId,
      ...req.body,
    };

    res.json(newUsers);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (req, res) => {
  const connection = await connect();
  const rows = await connection.execute('SELECT * FROM users WHERE id = ?', [req.params.id]);
  res.json(rows[0][0]);
};

export const deleteUser = async (req, res) => {
  const connection = await connect();
  const result = await connection.execute('DELETE FROM users WHERE id = ?', [req.params.id]);

  console.log(result);

  res.sendResults(204);
};

export const updateUser = async (req, res) => {
  const connection = await connect();
  const result = await connection.execute('UPDATE users SET name = ?, lastName = ? WHERE id = ?', [
    req.body,
    req.params.id,
  ]);

  res.sendResults(204);
};


export const getUsersCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.execute('SELECT COUNT(*) FROM users');
    res.json(rows[0]['COUNT(*)']);
  };
  