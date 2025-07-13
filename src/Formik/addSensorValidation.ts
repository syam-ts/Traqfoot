import { useFormik } from "formik";

export const addSensorValidation = (submitForm: any) => {
    return useFormik({
        initialValues: {
            sensorName: "",
            sensorLocation: "",
        },

        validate: (values) => {
            const errors: any = {};

            if (!values.sensorName) {
                errors.sensorName = "SensorName is required";
            }

            if (!values.sensorLocation) {
                errors.sensorLocation = "Sensor Location is required";
            } else if (
                values.sensorLocation.length < 5 ||
                values.sensorLocation.length > 20
            ) {
                errors.sensorLocation = "should be between 5 to 20 characters";
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
            submitForm(values.sensorName, values.sensorLocation);
        },
    });
};
