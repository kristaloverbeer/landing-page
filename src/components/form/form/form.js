
import { useState } from 'react';
import './form.scss';

const Form = (props) => {

    const INITIAL_STATE = {
        name: null,
        surname: null,
        email: null,
        phone: null,
        message: null,
        reason: "choose",
        agreement: false,
        submitDisabled: true,
        resetDisabled: true,
    };

    const [formState, setFormState] = useState(INITIAL_STATE);

    const changeMyState = (newState) => {
        const isSubmitDisabled = !(newState.name && newState.surname && newState.email && newState.message && newState.agreement && newState.reason !== "choose");
        const isResetDisabled = !(newState.name || newState.surname || newState.email || newState.message || newState.agreement || newState.reason !== "choose");
        setFormState({ ...newState, submitDisabled: isSubmitDisabled, resetDisabled: isResetDisabled });
    }

    const resetForm = () => changeMyState(INITIAL_STATE);

    return (
        <div className="Form" id="signup">
            <h2>Inscris toi !</h2>
            <ul>
                <li>
                    <select value={formState.reason} onChange={(event) => changeMyState({ ...formState, reason: event.target.value })}>
                        <option value="choose" disabled>-- Choisir une option --</option>
                        <option value="demo">Demande d'accès à une démo</option>
                        <option value="devis">Demande de devis</option>
                        <option value="collaboration">Demande de collaboration</option>
                    </select>
                </li>

                <li>
                    <div className="grid grid-2">
                        <input type="text" placeholder="Name" required onChange={(event) => changeMyState({ ...formState, name: event.target.value })} />
                        <input type="text" placeholder="Surname" required onChange={(event) => changeMyState({ ...formState, surname: event.target.value })} />
                    </div>
                </li>

                <li>
                    <div className="grid grid-2">
                        <input type="email" placeholder="Email" required onChange={(event) => changeMyState({ ...formState, email: event.target.value })} />
                        <input type="tel" placeholder="Phone" onChange={(event) => changeMyState({ ...formState, phone: event.target.value })} />
                    </div>
                </li>

                <li>
                    <textarea placeholder="Message" onChange={(event) => changeMyState({ ...formState, message: event.target.value })}></textarea>
                </li>

                <li className="tos">
                    <input type="checkbox" onChange={(event) => changeMyState({ ...formState, agreement: event.target.checked })} />
                    <label>I have read and agreed with <a href="#tos">the terms and conditions</a>.</label>
                </li>

                <li>
                    <div className="grid grid-3">
                        <div className="required-msg">REQUIRED FIELDS</div>
                        <button className="btn-grid" type="submit" disabled={formState.submitDisabled}>
                            <span className="back">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="Email icon" />
                            </span>
                            <span className="front">SUBMIT</span>
                        </button>
                        <button className="btn-grid" type="reset" disabled={formState.resetDisabled} onClick={resetForm}>
                            <span className="back">
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="Eraser icon" />
                            </span>
                            <span className="front">RESET</span>
                        </button>
                    </div>
                </li>

            </ul>
        </div>
    )
}

export default Form;