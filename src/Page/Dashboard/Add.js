import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';

function Add({ employees, setEmployees, setIsAdding }) {

    const [Fname, setFname] = useState('');
    const [Lname, setLname] = useState('');
    const [EmailId, setEmali] = useState('');
    const [Phone, setPhone] = useState('');
    const [From_address, setFadd] = useState('');
    const [To_address, setTadd] = useState("")
    const [vehicle_type, setVehicle] = useState("")
    const [booking_time, setTime] = useState("")
    const [booking_date, setDate] = useState("")
    const [passenger_count, setPasscount] = useState("")

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!Fname || !Lname || !EmailId  || !Phone) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }
        console.log(Fname,Lname,EmailId,Phone,From_address,To_address,vehicle_type,booking_time,booking_date,passenger_count)
        

        const id = employees.length + 1;
        const newEmployee = {
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
            passenger_count,

        }
        employees.push(newEmployee);
        setEmployees(employees);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${Fname} ${Lname}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500,
            
        });
    }


    return (
        <div className="small-container">
            <form onSubmit={handleAdd}>
                <h1>New Booking</h1>
                <label htmlFor="firstName">First Name</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
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
                    ref={textInput}
                    name="firstName"
                    value={From_address}
                    onChange={e => setFadd(e.target.value)}
                />
                <label htmlFor="firstName">To Address</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={To_address}
                    onChange={e => setTadd(e.target.value)}
                />
                <label htmlFor="firstName">Vehicle Type</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={vehicle_type}
                    onChange={e => setVehicle(e.target.value)}
                />
                <label htmlFor="firstName">Time</label>
                <input
                    id="firstName"
                    type="time"
                    ref={textInput}
                    name="firstName"
                    value={booking_time}
                    onChange={e => setTime(e.target.value)}
                />
                <label htmlFor="firstName">Passanger_count:</label>
                <input
                    id="firstName"
                    type="text"
                    ref={textInput}
                    name="firstName"
                    value={passenger_count}
                    onChange={e => setPasscount(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
                        className="muted-button"
                        type="button"
                        value="Cancel"
                        onClick={() => setIsAdding(false)}
                    />
                </div>
            </form>
        </div>
    );
}

export default Add