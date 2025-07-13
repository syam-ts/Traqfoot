import { useSelector } from "react-redux"; 
import type { User } from "../../configs/interfaces/User"; 
 
const Profile = () => { 
    const user: User = useSelector((state: any) => state.currentUser) 
     
    return ( 
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-7 pt-12">
                    <div className="inline-flex items-center space-x-2 mb-4">
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                        <span className="text-sm text-gray-500 uppercase tracking-wider font-medium">User Profile</span>
                        <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-3">Account Information</h1>
                    <p className="text-lg text-gray-600">Manage your profile and account settings</p>
                </div>

                {/* Profile Card */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden max-w-2xl mx-auto">
                    {/* Header with gradient */}
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 px-8 py-8 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-white/5"></div>
                        <div className="relative z-10">
                            {/* Profile Avatar Placeholder */}
                            <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm">
                                 <span className="font-bold text-4xl">{user.infrastructure_name[0]}</span>
                            </div>
                            <h2 className="text-2xl font-bold mb-1">{user.infrastructure_name}</h2>
                            <div className="w-16 h-px bg-white/30 mx-auto"></div>
                        </div>
                    </div>

                    {/* Profile Details */}
                    <div className="p-8 space-y-6">
                        {/* Email */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Email Address</p>
                                <p className="text-lg font-semibold text-gray-900">{user.email}</p>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Mobile Number</p>
                                <p className="text-lg font-semibold text-gray-900">{user.mobile}</p>
                            </div>
                        </div>

                        {/* Member Since */}
                        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                            <div className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">Working Since</p>
                                <p className="text-lg font-semibold text-gray-900">{user.since}</p>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="px-8 pb-8">
                        <div className="flex space-x-4">
                            <button className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-2xl font-semibold hover:bg-gray-700 transition-colors duration-200">
                                Edit Profile
                            </button>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ); 
}; 
 
export default Profile;