import { useContext } from "react";
import { PersonContext } from "../../../context/PersonContext";
import { ScreenContext } from "../../../context/ScreenContext";

export const AddPersonBox = () => {

  const { handlePersons, inputNameRef, name, handleNameChange, flagName} = useContext(PersonContext);

  const {isSmallScreen} = useContext(ScreenContext);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      handlePersons();
    }
  }

  const divContainerClassNames = isSmallScreen ? "box container is-flex is-flex-direction-column is-justify-content-center is-align-items-center" : "box container columns m-0";

  const divAgregarStyle = isSmallScreen ?  {marginBottom: '16px'} : {paddingLeft: '22px'};

  const divAgregarClassNames = isSmallScreen ? "is-flex is-justify-content-center is-align-items-center]" : "column is-3 is-flex is-justify-content-center is-align-items-center"

  return (
    <div
      className={divContainerClassNames}
      style={{
        width: "100%",
        height: "200px",
        boxShadow:
          "0 0 0.5em 0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02)",
      }}
    >
      <div className="column is-9 is-flex is-flex-direction-column is-justify-content-center is-align-items-center" style={{paddingRight: '22px'}} >
        <div className="field " style={{width:'100%'}}>
          <label className="label">Nueva persona</label>
          <div className="control">
            <input
              ref={inputNameRef}
              id="inputName"
              className="input"
              style={{marginBottom: `${flagName ? '32px' : '0px'}`}}
              type="text"
              name="name"
              placeholder="Nombre"
              value={name}
              onChange={handleNameChange}
              onKeyDown={handleEnter}
              required
            />
            {!flagName && (
              <span className="tag is-danger is-light mt-2" style={{height:'24px'}}>Nombre necesario</span>
            )}
          </div>
        </div>
      </div>
      <div className={divAgregarClassNames} style={divAgregarStyle}>
        <button
          className="button is-dark pt-1"
          type="submit"
          onClick={handlePersons}
          onKeyDown={handleEnter}
        >
          Agregar
        </button>
        </div>
    </div>
  );
};
