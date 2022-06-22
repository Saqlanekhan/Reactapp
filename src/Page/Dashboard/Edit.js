import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ employees, selectedEmployee, setEmployees, setIsEditing }) {

    const id = selectedEmployee.id;

    const [Fname, setFname] = useState(selectedEmployee.Fname);
    const [Lname, setLname] = useState(selectedEmployee.Lname);
    const [EmailId, setEmali] = useState(selectedEmployee.EmailId);
    const [Phone, setPhone] = useState(selectedEmployee.Phone);
    const [booking_date, setDate] = useState(selectedEmployee.booking_date);
    const [From_address, setFadd] = useState(selectedEmployee.From_address);
    const [To_address, setTadd] = useState(selectedEmployee.To_address);
    const [vehicle_type, setVehicle] = useState(selectedEmployee.vehicle_type);
    const [booking_time, setTime] = useState(selectedEmployee.booking_time);
    const [passenger_count, setPasscount] = useState(selectedEmployee.passenger_count);
    const handleUpdate = e => {
        e.preventDefault();

        if (!Fname || !Lname || !EmailId || !Phone || !booking_date) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            Fname,
            Lname,
            EmailId,
            Phone,
            From_address,
            To_address,
            vehicle_type,
            booking_time,
            booking_date,
            passenger_count
        };

        for (let i = 0; i < employees.length; i++) {
            if (employees[i].id === id) {
                employees.splice(i, 1, employee);
                break;
            }
        }

        setEmployees(employees);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.Fname} ${employee.Lname}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    return (
        <div className="small-container">
            <form onSubmit={handleUpdate}>
                <h1>Edit Bookings</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={Fname}
                    onChange={e => setFname(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={Lname}
                    onChange={e => setLname(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={EmailId}
                    onChange={e => setEmali(e.target.value)}
                />
                <label htmlFor="salary">Phone</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={Phone}
                    onChange={e => setPhone(e.target.value)}
                />
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={booking_date}
                    onChange={e => setDate(e.target.value)}
                />
                <label htmlFor="firstName">From Address</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={From_address}
                    onChange={e => setFadd(e.target.value)}
                />
                <label htmlFor="firstName">To Address</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={To_address}
                    onChange={e => setTadd(e.target.value)}
                />
                <label htmlFor="firstName">Vehicle Type</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={vehicle_type}
                    onChange={e => setVehicle(e.target.value)}
                />
                <label htmlFor="firstName">Time</label>
                <input
                    id="firstName"
                    type="time"
                    name="firstName"
                    value={booking_time}
                    onChange={e => setTime(e.target.value)}
                />
                <label htmlFor="firstName">Passanger_count:</label>
                <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    value={passenger_count}
                    onChange={e => setPasscount(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsEditing(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Edit