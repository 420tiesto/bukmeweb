import { useState } from 'react'
import './App.css'

function Testimonials() {
  const testimonials = [
    { quote: 'BukMe made finding talent so easy!', author: 'Alex P.' },
    { quote: 'Great service and reliable bookings.', author: 'Sam R.' },
    { quote: 'I found amazing models for my shoot.', author: 'Jamie K.' },
  ]
  const [index, setIndex] = useState(0)
  const next = () => setIndex((index + 1) % testimonials.length)

  return (
    <div className="bg-gray-100 p-6 rounded-lg max-w-md mx-auto">
      <p className="italic mb-2">"{testimonials[index].quote}"</p>
      <p className="font-semibold mb-4">- {testimonials[index].author}</p>
      <button className="text-blue-600 underline" onClick={next}>Next</button>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col text-center">
      <main className="flex-1 flex flex-col justify-center items-center p-6 space-y-6">
        <h1 className="text-4xl font-extrabold">BukMe</h1>
        <p className="text-lg">Book trusted local talent. Anytime. Anywhere.</p>
        <a
          href="https://apps.apple.com/app/idYOUR_APP_ID_HERE"
          className="bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700"
        >
          Get the App
        </a>
        <Testimonials />
      </main>
      <footer className="py-6 border-t text-sm space-x-4">
        <a href="privacy.html" className="text-blue-600 hover:underline">Privacy Policy</a>
        <a href="terms.html" className="text-blue-600 hover:underline">Terms of Service</a>
        <a href="mailto:tismyaka@gmail.com" className="text-blue-600 hover:underline">Support</a>
      </footer>
    </div>
  )
}
