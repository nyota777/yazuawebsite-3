import React from 'react';

export const MaintenancePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 md:p-12 space-y-8">
                <div className="flex justify-center">
                    <img
                        src={`${import.meta.env.BASE_URL}logo4.png`}
                        alt="YAZUA AFRIKA Logo"
                        className="h-20 w-auto"
                    />
                </div>

                <div className="space-y-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                        Website Temporarily Under Maintenance
                    </h1>

                    <div className="w-16 h-1 bg-[#FF6F3C] mx-auto rounded-full"></div>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        We are currently performing system updates.<br />
                        Full access will resume shortly.
                    </p>

                    <p className="text-sm text-gray-500 pt-4 border-t border-gray-100">
                        For urgent inquiries, please contact us directly.
                    </p>
                </div>
            </div>
        </div>
    );
};
