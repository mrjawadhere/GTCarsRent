"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Shield, Clock, Star, Phone, MapPin, Mail } from "lucide-react"

const cars = [
  {
    name: "Accent 2023",
    rate: 2400,
    currency: "AED",
    duration: "Monthly",
    image: "/hyundai-accent-2023-luxury-sedan.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Corolla 2023",
    rate: 150,
    currency: "AED",
    duration: "Daily",
    image: "/toyota-corolla-2023-sedan.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Kia Pegas 2024",
    rate: 2550,
    currency: "AED",
    duration: "Monthly",
    image: "/kia-pegas-2024-compact-sedan.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Sunny 2023",
    rate: 1800,
    currency: "AED",
    duration: "Monthly",
    image: "/nissan-sunny-2023-sedan.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Elantra 2023",
    rate: 150,
    currency: "AED",
    duration: "Daily",
    image: "/hyundai-elantra-2023-sedan.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Hyundai Accent 2024",
    rate: 150,
    currency: "AED",
    duration: "Per day",
    image: "/hyundai-accent-2024-modern-sedan.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Hyundai Creta",
    rate: 150,
    currency: "AED",
    duration: "Per day",
    image: "/hyundai-creta-suv.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Kia Pegas 2024",
    rate: 110,
    currency: "AED",
    duration: "Daily",
    image: "/kia-pegas-2024-economy-sedan.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Toyota Raize",
    rate: 150,
    currency: "AED",
    duration: "Per day",
    image: "/toyota-raize-compact-suv.png",
    cta: "https://wa.me/971586987873",
  },
  {
    name: "Yaris 2024",
    rate: 130,
    currency: "AED",
    duration: "Daily",
    image: "/toyota-yaris-2024-hatchback.png",
    cta: "https://wa.me/971586987873",
  },
]

const features = [
  {
    icon: Car,
    title: "Luxury & Comfort",
    description: "A fleet of high-end vehicles designed for style and performance.",
  },
  {
    icon: Shield,
    title: "Affordable Rates",
    description: "Premium service at competitive prices.",
  },
  {
    icon: Clock,
    title: "Flexible Rental Plans",
    description: "Hourly, daily, weekly, or monthly options.",
  },
  {
    icon: Star,
    title: "Exceptional Service",
    description: "Hassle-free booking and customer support.",
  },
]

const steps = ["Browse our premium fleet.", "Book your car online with ease.", "Pick up your car and enjoy the ride."]

const categories = [
  "Luxury Sedans for business and comfort",
  "SUVs for family and adventure",
  "Sports Cars for thrill seekers",
  "Exotic Cars for standout experiences",
]

export default function GTCarsRentLanding() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-rose-500/10 to-red-500/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: "10%",
            top: "20%",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-red-500/5 to-rose-500/5 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            right: "10%",
            bottom: "20%",
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-10 px-4 py-6 md:px-8">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
              GT Cars Rent
            </span>
          </div>
          <Button
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            onClick={() => window.open("https://wa.me/971586987873", "_blank")}
          >
            Book Now
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              Experience{" "}
              <span className="bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 bg-clip-text text-transparent animate-pulse">
                Luxury
              </span>{" "}
              and Comfort
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto text-pretty">
              Where premium vehicles meet exceptional service. Whether it's a business trip, a special occasion, or just
              the thrill of driving your dream car, we provide a seamless rental experience with top-tier cars at
              unbeatable rates.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => window.open("https://wa.me/971586987873", "_blank")}
            >
              Book Your Dream Car
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 px-4 py-20 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-rose-500">GT Cars Rent</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It <span className="text-rose-500">Works</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="relative z-10 px-4 py-20 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our <span className="text-rose-500">Fleet Categories</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-medium text-gray-700">{category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section className="relative z-10 px-4 py-20 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Premium <span className="text-rose-500">Fleet</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cars.map((car, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{car.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-rose-500">{car.rate}</span>
                      <span className="text-gray-600 ml-1">{car.currency}</span>
                    </div>
                    <Badge variant="secondary" className="bg-rose-100 text-rose-700">
                      {car.duration}
                    </Badge>
                  </div>
                  <Button
                    className="w-full bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white transition-all duration-300 hover:scale-105"
                    onClick={() => window.open(car.cta, "_blank")}
                  >
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 px-4 py-20 md:px-8 bg-gradient-to-r from-rose-500 to-red-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Dream Car Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty">
            Travel in style with GT Cars Rent. Your perfect ride is just a click away.
          </p>
          <Button
            size="lg"
            className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => window.open("https://wa.me/971586987873", "_blank")}
          >
            Book Now on WhatsApp
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 px-4 py-12 md:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-red-600 rounded-lg flex items-center justify-center">
                  <Car className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">GT Cars Rent</span>
              </div>
              <p className="text-gray-400">Premium car rental service for luxury and comfort.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+971 58 698 7873</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>info@gtcarsrent.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Dubai, UAE</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Book</h3>
              <Button
                className="bg-gradient-to-r from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700 text-white transition-all duration-300 hover:scale-105"
                onClick={() => window.open("https://wa.me/971586987873", "_blank")}
              >
                WhatsApp Booking
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GT Cars Rent. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
