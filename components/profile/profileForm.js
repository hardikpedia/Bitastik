import { useState } from 'react'
import Classes from './profileForm.module.css'
function profileForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        roll: "",
        github: ""
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { firstName, lastName, roll, github } = formData;

    return (
        <div className={Classes.prWrap}>
            <h3>Try to Fill all the Data</h3>
            <form className={Classes.prForm}>
                <input
                    className={Classes.prInput}
                    value={firstName}
                    onChange={e => updateFormData(e)}
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    required
                />
                <input
                    className={Classes.prInput}
                    value={lastName}
                    onChange={e => updateFormData(e)}
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    required
                />
                <input
                    className={Classes.prInput}
                    value={roll}
                    onChange={e => updateFormData(e)}
                    placeholder="Roll no i.e BTECH/xxxxx/xx"
                    type="email"
                    name="email"
                    required
                />
                <input
                    className={Classes.prInput}
                    value={github}
                    onChange={e => updateFormData(e)}
                    placeholder="Github Profile Link"
                    type="url"
                    name=""
                    required
                />
               

                <button className={Classes.prButton} type="submit">Submit</button>
            </form>
        </div>

    );
}

export default profileForm;