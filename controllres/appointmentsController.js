// controllers/appointmentsController.js
const pool = require('../db');

exports.getAppointments = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM appointments ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createAppointment = async (req, res) => {
  const { first_name, last_name, student_number, appointment_date, appointment_time } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO appointments (first_name, last_name, student_number, appointment_date, appointment_time)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [first_name, last_name, student_number, appointment_date, appointment_time]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, student_number, appointment_date, appointment_time } = req.body;
  try {
    const result = await pool.query(
      `UPDATE appointments SET first_name=$1, last_name=$2, student_number=$3, 
      appointment_date=$4, appointment_time=$5 WHERE id=$6 RETURNING *`,
      [first_name, last_name, student_number, appointment_date, appointment_time, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteAppointment = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM appointments WHERE id=$1', [id]);
    res.json({ message: 'Appointment deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
