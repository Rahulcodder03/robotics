import React from 'react'

export default function Team() {
    return (
        <div>
            <section id="team" className="py-16">
                <div className="max-w-6xl text-blue mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-2xl font-semibold">Meet the Team</h3>
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="bg-white rounded-2xl shadow p-6 text-center">
                            <img src="csk.jpeg" alt="team" className="w-24 h-24 rounded-full mx-auto object-cover" />
                        
                            <h4 className="mt-4 font-semibold">Chandra shekhar kushwah</h4>
                            <p className="text-xs text-gray-500">Founder & Data Reasearcher</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 text-center">
                            <img src="rahul.jpeg" alt="team" className="w-24 h-24 rounded-full mx-auto object-cover" />

                            <h4 className="mt-4 font-semibold">Rahul rathore</h4>
                            <p className="text-xs text-gray-500">Co-Founder & Automation CODDER</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 text-center">
                            <img src="gorav.jpg" alt="team" className="w-24 h-24 rounded-full mx-auto object-cover" />
                            <h4 className="mt-4 font-semibold">Gourav Pandey </h4>
                            <p className="text-xs text-gray-500">Software & DevOps engineer</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 text-center">
                            <img src="alfez.jpg" alt="team" className="w-24 h-24 rounded-full mx-auto object-cover" />
                            <h4 className="mt-4 font-semibold">Alfez </h4>
                            <p className="text-xs text-gray-500">Software & Back-end Devloper</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
