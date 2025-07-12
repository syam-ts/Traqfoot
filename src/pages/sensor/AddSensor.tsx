import { useState } from "react";
import { sensors } from "../../configs/constants/sensor";
import { SensorService } from "../../services/sensorService";
import { useNavigate } from "react-router";

const AddSensor = () => {
    const [formData, setFormData] = useState({
        sensorName: "",
        sensorLocation: "",
    });
    const navigate = useNavigate()

    const changeFormData = (event: any) => {
        const {name, value} = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    };
console.log('form ', formData)

    const submitForm = async () => {
        try {
                  const { sensorName, sensorLocation } = formData;
                  const response = await SensorService.addNewSensor(sensorName, sensorLocation);
      
                  console.log("rep", response);
                  if (!response.success) {
                      alert(response.message);
                  } else { 
                        navigate("/dashboard");
                  }
              } catch (error) {
                  console.log("ERROR: ", error);
              }
    }

    return (
        <div className="py-64 grid gap-7 justify-center">
            <div>
                <h4 className="block text-xl font-medium text-slate-800">
                    Add New Sensor
                </h4>
                <p className="text-slate-500 font-light text-sm">
                    A Sensor can identify the traffic on your infrastructure fecilities.
                </p>
            </div>

            <div className="mb-1 flex flex-col gap-6">
                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                        Sensor Name
                    </label>
                    <div className="relative">
                        <select
                        name="sensorName"
                        onChange={(e) => changeFormData(e)}
                         className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer">
                            {sensors.map((sensor: string) => (
                                <option value={sensor}>{sensor}</option>
                            ))}
                        </select>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.2"
                            stroke="currentColor"
                            className="h-5 w-5 ml-1 absolute top-2.5 right-2.5 text-slate-700"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="mb-1 flex flex-col gap-6">
                <div className="w-full max-w-sm min-w-[200px]">
                    <label className="block mb-2 text-sm text-slate-600">
                        Sensor Location
                    </label>
                    <input
                        type="text"
                        onChange={(e) => changeFormData(e)}
                        name="sensorLocation"
                        className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        placeholder="Sensor Location"
                    />
                </div>
            </div>

            <button
            onClick={() => submitForm()}
                className="mt-4 w-full font-bold rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"

            >
                Add Sensor
            </button>
        </div>
    );
};

export default AddSensor;
