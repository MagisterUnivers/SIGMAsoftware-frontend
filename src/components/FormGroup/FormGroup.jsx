import styles from './FormGroup.module.scss'

export function FormGroup ({
  name,
  nameTitle,
  type,
  template,
  isRequired,
  isReadOnly,
  value,
  placeholder,
  onChange,
  className
}) {
  let element
  const input = (
    <input
      type={type}
      required={isRequired}
      readOnly={isReadOnly}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  )

  const textarea = (
    <textarea
      cols={5}
      rows={5}
      required={isRequired}
      readOnly={isReadOnly}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={className}
    />
  )

  switch (template) {
    case 'text':
      element = buildLabel(input)
      break;

    case 'email':
      element = buildLabel(input)
      break;

    case 'textarea':
      element = buildLabel(textarea)
      break;

    default:
      break;
  }

  function buildLabel (template) {
    return (
      <label className={styles['form-group__label']}>
        <p className={styles['form-group__label-subtitle']}>
          {nameTitle}
          {isRequired && <span> *</span>}
        </p>
        {template}
      </label>
    )
  }

  return element
}
