const fixedInputClass =
  // "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm";
  "peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 disabled:cursor-not-allowed transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 placeholder:opacity-100 focus:placeholder:opacity-100 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900";
export default function Input({
  handleChange = () => {},
  value = "",
  labelText = "",
  labelFor = "",
  id = "",
  name = "",
  type = "",
  isRequired = false,
  placeholder = "",
  customClass = "",
}) {
  return (
    <div className="my-5">
      <label htmlFor={labelFor} className="sr-only">
        {labelText}
      </label>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
    </div>
  );
}
