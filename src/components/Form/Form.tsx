import { countries } from "../../data/countries"
import styles from './Form.module.css'

const Form = () => {
  return (
   <form className={styles.form}>
        <div className={styles.field}>
            <label htmlFor="city">Ciudad:</label>
            <input
                id="city"
                type="text"
                name="city"
                placeholder="Ciudad"
            />
            
        </div>
        <div className={styles.field}>
            <label htmlFor="country">País:</label>
            <select
                id="country"
                name="country"
             
            >
                <option value="">--Seleccione un País</option>
                {countries.map(country=>(
                    <option
                    key={country.code}
                    value={country.code}
                    >
                        {country.name}

                    </option>

                ))}
            </select>    
        </div>
        <input 
        type="submit" value='Consultar Clima'
        className={styles.submit}
        />
   </form>
  )
}

export default Form