import React, { useState } from "react";
import PhoneInputComponent from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface PhoneInputProps {
    label?: string;
    placeholder?: string;
    required?: boolean;
    error?: string;
    value?: string;
    name:string;
    country?: string;
}

export const PhoneInput = ({
    label = "Phone Number",
    placeholder = "Enter phone number",
    required = true,
    value,
    country = "ng",
    name
}: PhoneInputProps) => {
    const [phoneValue, setPhoneValue] = useState(value || "");

    const handleChange = (phone: string) => {
        setPhoneValue(phone);
    };

    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-white mb-1 md:mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <PhoneInputComponent
                country={country}
                value={phoneValue}
                onChange={handleChange}
                placeholder={placeholder}
                inputProps={{
                    name: name,
                    required: required,
                }}
                inputStyle={{
                    width: "100%",
                    height: "48px",
                    padding: "0.6rem",
                    paddingLeft: "45px",
                    fontWeight: "400",
                    borderRadius: "12px",
                    fontSize: "17px",
                    backgroundColor: "transparent",
                    color: "#fff",
                }}
                buttonStyle={{
                    borderRadius: "12px 0 0 12px",
                    backgroundColor: "transparent",
                }}
                dropdownStyle={{
                    borderRadius: "8px",
                    border: "1px solid #dddada",
                }}
            />
        </div>
    );
};
