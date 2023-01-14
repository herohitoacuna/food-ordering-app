import React from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
	return (
		<div className={classes.input}>
			<label htmlFor={props.input.id}>{props.label}</label>
			<input
				// id={props.input.id}
				// type={props.type}
				// value={props.value}
				// onChange={props.onChange}
				ref={ref}
				{...props.input}
			/>
		</div>
	);
});

export default Input;
