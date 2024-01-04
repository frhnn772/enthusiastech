const Input = (props) => {
    const { type, name, id, placeholder } = props;
    return(
        <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="p-2 border shadow-md"
      />
    )
}
export default Input;