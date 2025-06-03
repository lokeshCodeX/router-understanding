import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

function User() {
    const { userid } = useParams()
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true)
                const response = await fetch(`https://api.github.com/users/${userid}`)
                if (!response.ok) {
                    throw new Error('User not found')
                }
                const data = await response.json()
                setUserData(data)
                setError(null)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchUserData()
    }, [userid])

    if (loading) {
        return (
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading user data...</p>
                </div>
            </main>
        )
    }

    if (error) {
        return (
            <main className="container mx-auto px-4 py-16">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="card bg-red-50 border border-red-200">
                        <div className="text-red-600 text-4xl mb-4">⚠️</div>
                        <h2 className="text-2xl font-bold text-red-700 mb-2">Error</h2>
                        <p className="text-red-600 mb-4">{error}</p>
                        <Link to="/" className="btn btn-primary">
                            Return Home
                        </Link>
                    </div>
                </div>
            </main>
        )
    }

    if (!userData) {
        return null
    }

    return (
        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Breadcrumb */}
                <div className="mb-8">
                    <nav className="flex" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link to="/" className="text-gray-600 hover:text-primary">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                    </svg>
                                    <span className="ml-1 text-gray-500 md:ml-2">User Profile</span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>

                {/* Profile Card */}
                <div className="card bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-75"></div>
                            <img 
                                src={userData.avatar_url} 
                                alt={`${userData.name || userData.login}'s profile`} 
                                className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold mb-2">{userData.name || userData.login}</h1>
                            {userData.bio && (
                                <p className="text-gray-300 mb-4">{userData.bio}</p>
                            )}
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <a 
                                    href={userData.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    View on GitHub
                                </a>
                                {userData.blog && (
                                    <a 
                                        href={userData.blog}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary"
                                    >
                                        Visit Website
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Followers', value: userData.followers, icon: '👥' },
                        { label: 'Following', value: userData.following, icon: '👤' },
                        { label: 'Public Repos', value: userData.public_repos, icon: '📦' },
                        { label: 'Public Gists', value: userData.public_gists, icon: '📝' }
                    ].map((stat, index) => (
                        <div key={index} className="card hover-lift">
                            <div className="text-4xl mb-2">{stat.icon}</div>
                            <div className="text-2xl font-bold text-primary">{stat.value}</div>
                            <div className="text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="card">
                        <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                        <div className="space-y-4">
                            {[
                                { label: 'Username', value: userData.login },
                                { label: 'Location', value: userData.location || 'Not specified' },
                                { label: 'Company', value: userData.company || 'Not specified' },
                                { label: 'Twitter', value: userData.twitter_username ? `@${userData.twitter_username}` : 'Not specified' },
                                { label: 'Member Since', value: new Date(userData.created_at).toLocaleDateString() }
                            ].map((info, index) => (
                                <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                    <span className="text-gray-600">{info.label}</span>
                                    <span className="font-medium">{info.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="card">
                        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">Last Updated</span>
                                <span className="font-medium">
                                    {new Date(userData.updated_at).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">Last Active</span>
                                <span className="font-medium">
                                    {userData.updated_at ? new Date(userData.updated_at).toLocaleDateString() : 'Unknown'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="text-gray-600">Account Type</span>
                                <span className="font-medium capitalize">{userData.type}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="mt-8 text-center">
                    <Link to="/" className="btn btn-secondary">
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default User