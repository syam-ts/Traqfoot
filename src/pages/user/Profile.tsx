import { useSelector } from "react-redux";
import type { User } from "../../configs/interfaces/User";

const Profile = () => {


    const user: User = useSelector((state: any) => state.currentUser)
    

    return (
        <div>
            <div>
                <div className="flex justify-center items-center text-center pt-96">
                    <div className="w-1/4 shadow-2xl rounded-2xl p-10 border-t border-gray-200">
                        <div className="flex justify-around gap-11 items-center">
                            <div>
                                {/* <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cHJvZmlsZXxlbnwwfDB8fHwxNzA2NzQ5NjEyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" className="rounded-2xl"> */}
                            </div>
                            <div>
                                <h1 className=" font-extrabold text-3xl">{user.infrastructure_name}</h1>
                                <p className=" font-semibold text-sm">
                                   {user.email}
                                </p>
                                <p className=" font-semibold text-sm">
                                   {user.mobile}
                                </p>
                                <p className=" font-semibold text-sm">
                                   {user.since}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
