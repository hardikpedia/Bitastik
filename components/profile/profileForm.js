import { useState } from 'react'
import Classes from './profileForm.module.css'
function profileForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        roll: "",
        github: "",
        linkedIn:"",
        insta:"",
        bio:"",
        branch: "",
          yearofgraduation: "",
          hostel:"",
          room:"",
          phone:""
    });

    const updateFormData = event =>
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    const { firstName, lastName, roll, github,linkedIn,insta, bio, branch,
    yearofgraduation,
    hostel,
    room,
    phone} = formData;

    return (
        <div className={Classes.prWrap}>
            <h3>Try to Fill all the Data</h3>
            <form className={Classes.prForm}>
             
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
                <input
                    className={Classes.prInput}
                    value={linkedIn}
                    onChange={e => updateFormData(e)}
                    placeholder="linkedIn Profile Link"
                    type="url"
                    name=""
                    required
                />
                 <input
                    className={Classes.prInput}
                    value={insta}
                    onChange={e => updateFormData(e)}
                    placeholder="Insta Profile Link"
                    type="url"
                    name=""
                    required
                />
               
               <textarea
                    className={Classes.prInputt}
                    value={bio}
                    onChange={e => updateFormData(e)}
                    placeholder="Say something about yourself..."
                    type="url"
                    name=""
                    required
                />
               
               <input
                    className={Classes.prInput}
                    value={branch}
                    onChange={e => updateFormData(e)}
                    placeholder="Branch"
                    type="text"
                    name=""
                    required
                />
                  <input
                    className={Classes.prInput}
                    value={yearofgraduation}
                    onChange={e => updateFormData(e)}
                    placeholder="Year Of Graduation"
                    type="number"
                    name=""
                    required
                />
                 <input
                    className={Classes.prInput}
                    value={hostel}
                    onChange={e => updateFormData(e)}
                    placeholder="Hostel Number"
                    type="number"
                    name=""
                    required
                />
                 <input
                    className={Classes.prInput}
                    value={room}
                    onChange={e => updateFormData(e)}
                    placeholder="Room Number"
                    type="number"
                    name=""
                    required
                />
                <input
                    className={Classes.prInput}
                    value={phone}
                    onChange={e => updateFormData(e)}
                    placeholder="Phone Number"
                    type="tel" name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                />
               
               

                <button className={Classes.prButton} type="submit">Submit</button>
            </form>
        </div>

    );
}

export default profileForm;