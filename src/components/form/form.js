import React from 'react';
import './estilo.css'; // Import your CSS file


function RegistrationForm() {
    return (
    <div className="container">
      <header>Cadastrar novo Usuário</header>
        <form action="#">
          <div className="form first">
            <div className="details personal">
              <div className="fields">
                <div className="input-field">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter your name" required />
                </div>
              </div>
           </div>

        <div className="details ID">

                                <div className="fields">
                                    <div className="input-field">
                                        <label>ID Type</label>
                                        <input type="text" placeholder="Enter ID type" required />
                                    </div>
                                    {/* other input fields */}
                                </div>

                                <button className="nextBtn">
                                    <span className="btnText">Next</span>
                                    <i className="uil uil-navigator"></i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
    );
}

export default RegistrationForm;
