type InputFieldProps = {
  placeholder: string
  type: string
  className: string
  name: string
  id: string
}

const InputField = ({ ...props }: InputFieldProps) => {
  return (
    <>
      <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900"></label>
      <div className="relative mt-2 mx-auto rounded-md shadow-sm">
        <input {...props} />
      </div>
    </>
  )
}

export default InputField
