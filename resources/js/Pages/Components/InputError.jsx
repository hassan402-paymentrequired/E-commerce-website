import React from "react";

const InputError = ({message}) => {
    return (
        <p className="text-red-500 text-xs italic font-semibold">
            { message }
        </p>
    );
};

export default InputError;
