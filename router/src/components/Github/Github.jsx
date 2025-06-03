import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    
    return (
        <main className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header */}
                <div className="card bg-gradient-to-br from-gray-800 to-gray-900 text-white p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full blur opacity-75"></div>
                            <img 
                                src={data.avatar_url} 
                                alt={`${data.name}'s profile`} 
                                className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg"
                            />
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold mb-2">{data.name}</h1>
                            <p className="text-gray-300 mb-4">{data.bio || 'No bio available'}</p>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                                <a 
                                    href={data.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                >
                                    View Profile
                                </a>
                                {data.blog && (
                                    <a 
                                        href={data.blog}
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
                        { label: 'Followers', value: data.followers, icon: '👥' },
                        { label: 'Following', value: data.following, icon: '👤' },
                        { label: 'Public Repos', value: data.public_repos, icon: '📦' },
                        { label: 'Public Gists', value: data.public_gists, icon: '📝' }
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
                                { label: 'Location', value: data.location || 'Not specified' },
                                { label: 'Company', value: data.company || 'Not specified' },
                                { label: 'Twitter', value: data.twitter_username ? `@${data.twitter_username}` : 'Not specified' },
                                { label: 'Member Since', value: new Date(data.created_at).toLocaleDateString() }
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
                                    {new Date(data.updated_at).toLocaleDateString()}
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-2 border-b border-gray-100">
                                <span className="text-gray-600">Last Active</span>
                                <span className="font-medium">
                                    {data.updated_at ? new Date(data.updated_at).toLocaleDateString() : 'Unknown'}
                                </span>
                            </div>
                            <div className="flex items-center justify-between py-2">
                                <span className="text-gray-600">Account Type</span>
                                <span className="font-medium capitalize">{data.type}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="mt-8 flex justify-center gap-4">
                    {data.html_url && (
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary inline-flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View on GitHub
                        </a>
                    )}
                    {data.blog && (
                        <a
                            href={data.blog}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary inline-flex items-center"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            Visit Website
                        </a>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/lokeshCodeX`)
    return response.json()
}