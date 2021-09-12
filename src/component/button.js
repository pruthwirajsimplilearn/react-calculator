
// button component
const Button = (props) => {
	return (
		<input
			type="button"
			value={props.name}
			onClick = {props.handleClick}
		/>
	);
}

// export the button
export default Button;
