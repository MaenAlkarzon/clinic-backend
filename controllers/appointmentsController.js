
const db = require('../db');

const getAppointments = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM appointments');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching appointments:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const createAppointment = async (req, res) => {
  const { first_name, last_name, student_number, appointment_date, appointment_time } = req.body;

  try {
    const result = await db.query(
      `INSERT INTO appointments 
       (first_name, last_name, student_number, appointment_date, appointment_time) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [first_name, last_name, student_number, appointment_date, appointment_time]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating appointment:', err);
    res.status(500).json({ error: err.detail || 'Failed to create appointment' });
  }
};

const updateAppointment = async (req, res) => {
  const { id } = req.params;
  const { appointment_date, appointment_time } = req.body;

  try {
    const result = await db.query(
      `UPDATE appointments 
       SET appointment_date = $1, appointment_time = $2 
       WHERE id = $3 RETURNING *`,
      [appointment_date, appointment_time, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating appointment:', err);
    res.status(500).json({ error: 'Failed to update appointment' });
  }
};

const deleteAppointment = async (req, res) => {
  const { id } = req.params;

  try {
    await db.query('DELETE FROM appointments WHERE id = $1', [id]);
    res.json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    console.error('Error deleting appointment:', err);
    res.status(500).json({ error: 'Failed to delete appointment' });
  }
};

module.exports = {
  getAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment
};
