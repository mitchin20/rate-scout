'use client'

export default function Navbar() {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow">
            <h1 className="text-xl font-bold text-gray-800">Mortgage Platform</h1>
            <nav className="space-x-6">
                <a href="/" className="text-gray-600 hover:text-blue-600">Home</a>
                <a href="/compare-rate" className="text-gray-600 hover:text-blue-600">Compare Rates</a>
            </nav>
        </header>
    )
}