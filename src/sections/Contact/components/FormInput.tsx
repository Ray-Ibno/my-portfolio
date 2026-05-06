import type { FormInputProps } from '../../../types'

const FormInput = ({ onChange, label, type, placeholder, value }: FormInputProps) => {
  return (
    <div className="mb-5">
      <label htmlFor="name" className="field-label">
        {label}
      </label>
      {type === 'text' || type === 'email' ? (
        <input
          onChange={onChange}
          id={label.toLocaleLowerCase().replaceAll(' ', '')}
          name={label.toLocaleLowerCase().replaceAll(' ', '')}
          type={type}
          className="field-input field-input-focus"
          placeholder={placeholder}
          value={value}
          autoComplete={label.toLocaleLowerCase()}
          required
        />
      ) : (
        <textarea
          onChange={onChange}
          id={label.toLocaleLowerCase().replaceAll(' ', '')}
          name={label.toLocaleLowerCase().replaceAll(' ', '')}
          rows={4}
          className="field-input field-input-focus"
          placeholder={placeholder}
          value={value}
          autoComplete={label.toLocaleLowerCase().replaceAll(' ', '')}
          required
        />
      )}
    </div>
  )
}
export default FormInput
