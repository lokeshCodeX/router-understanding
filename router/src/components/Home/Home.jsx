import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main className="container mx-auto px-4 py-8">
            {/* Hero Section */}
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 p-8 sm:p-12 mb-16">
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                    <div className="text-center lg:text-left space-y-6">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            Welcome to Our
                            <span className="block text-primary mt-2">Modern Platform</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
                            Experience the next generation of digital solutions. Our platform brings together innovation, 
                            simplicity, and power in one place.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                to="/about"
                                className="btn btn-primary group"
                            >
                                Get Started

                            </Link>

                        </div>
                    </div>

                </div>
                


            </section>

            Features Section
            <section className="py-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    Why Choose Us
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="card hover-lift">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-12 text-center text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Ready to Get Started?
                </h2>
                <p className="text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied users who have already transformed their experience with our platform.
                </p>
                <Link
                    to="/github"
                    className="btn bg-white text-orange-600 hover:bg-orange-50 inline-flex items-center"
                >

                        
                    View on GitHub
                </Link>
                <Link
                                to="/contact"
                                className="btn btn-secondary"
                            >
                                Contact Us
                            </Link>
            </section>
        </main>
    );
}

// Features data
const features = [
    {
        title: "Modern Design",
        description: "Clean and intuitive interface that makes your experience seamless and enjoyable.",

    },
    {
        title: "Fast Performance",
        description: "Optimized for speed and efficiency, ensuring quick response times and smooth interactions.",
    },
    {
        title: "Secure Platform",
        description: "Enterprise-grade security measures to keep your data safe and protected at all times.",

    }
];