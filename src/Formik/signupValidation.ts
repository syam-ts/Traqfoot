import { useFormik } from "formik";

export const signupValidation = (submitForm: any) => {
    return useFormik({
        initialValues: {
            infrastructure_name: "",
            email: "",
            mobile: 0,
            password: "",
            since: 0,
        },

        validate: (values) => {
            const errors: any = {};

            if (!values.infrastructure_name) {
                errors.infrastructure_name = "Infrastructure name is required";
            } else if (
                values.infrastructure_name.length > 35 ||
                values.infrastructure_name.length < 15
            ) {
                errors.infrastructure_name = "should be between 15 to 25 characters";
            }

            if (!values.email) {
                errors.email = "Email is required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }

            if (!values.mobile) {
                errors.mobile = "Mobile number is required";
            } else if (
                values.mobile.toString().length < 9 ||
                values.mobile.toString().length > 10
            ) {
                errors.mobile = "Mobile number should be valid";
            }

            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length < 6) {
                errors.password = "Must be at least 6 characters";
            }

            if (!values.since) {
                errors.since = "Since year is required";
            } else if (values.since < 1947 || values.since > 2025) {
                errors.since = "Established year should be valid";
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
            submitForm(
                values.infrastructure_name,
                values.email,
                values.mobile,
                values.password,
                values.since
            );
        },
    });
};
