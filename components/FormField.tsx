import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign, FontAwesome } from "@expo/vector-icons";

type Label = string | undefined;

interface Icon {
  name: string;
  color: string;
  size: number;
}

interface CustomFormFieldProps {
  label?: Label;
  placeholder?: string;
  handleChangeText?: (text: string) => void;
  value?: string;
  otherStyles?: string;
  textStyles?: string;
  textStyle?:any
  leftIcon?: Icon;
  rightIcon?: Icon;
  bgColor?: string;
  inputStyle?:any
  placeholderTextColor?:string,
  keyboardType?:
    | "default"
    | "email-address"
    | "numeric"
    | "phone-pad"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
}

const FormField = ({
  placeholder,
  value,
  otherStyles,
  textStyles,
  label,
  handleChangeText,
  rightIcon,
  leftIcon,
  bgColor,
  textStyle,
  inputStyle,
  placeholderTextColor
}: CustomFormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const showLabel: boolean = !!label;

  return (
    <View className={`space-y-2 w-full ${otherStyles}`}>
      {showLabel && <Text 
	  style={textStyle}
	  className="text-base text">{label}</Text>}
      <View
        className="w-full flex flex-row 
      h-16 px-4  rounded-2xl 
      focus:border-secondary justify-center items-center"
        style={{ backgroundColor: bgColor || "#d7dbe2" }}
      >
        {leftIcon && (
          <AntDesign
            name={leftIcon.name as any}
            size={leftIcon.size}
            color={leftIcon.color}
          />
        )}

        <TextInput
          className={`flex-1 text-lg text-text font-psemibold ${textStyles}`}
          value={value}
          style={inputStyle}
          placeholder={placeholder}
          placeholderTextColor={ placeholderTextColor ||"#7b7b8b" }
          onChangeText={handleChangeText}
          secureTextEntry={label === "Password" && !showPassword}
          autoCapitalize="none"
        />
        {rightIcon && (
          <FontAwesome
            name={showPassword ? "eye-slash" : (rightIcon.name as any)}
            size={rightIcon.size}
            color={rightIcon.color}
            onPress={() => setShowPassword(!showPassword)}
          />
        )}
      </View>
    </View>
  );
};

export default FormField;
