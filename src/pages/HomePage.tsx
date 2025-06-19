import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Shield, BarChart3, Rocket, Users, Star, ArrowRight, Code, Database, Cloud, MessageCircle, Mail, Phone, ShoppingBag, Camera, Bike, Sofa, Monitor, Store } from "lucide-react";
import DemoModal from '@/components/DemoModal';

const HomePage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [currentDemoType, setCurrentDemoType] = useState<'general' | 'furniture' | 'clothing' | 'camera' | 'bike' | 'electronics' | 'multistore'>('general');

  const openDemoModal = (demoType: typeof currentDemoType = 'general') => {
    setCurrentDemoType(demoType);
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900" data-id="bi73h6kcl" data-path="src/pages/HomePage.tsx">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-gray-500/20" data-id="9iji88e6p" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center" data-id="exnf6ybff" data-path="src/pages/HomePage.tsx">
          <div className="flex items-center space-x-2" data-id="respm3o0t" data-path="src/pages/HomePage.tsx">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center" data-id="g0odbbx9x" data-path="src/pages/HomePage.tsx">
              <Code className="w-5 h-5 text-white" data-id="9fc5en6iu" data-path="src/pages/HomePage.tsx" />
            </div>
            <h1 className="text-xl font-bold text-white" data-id="5cwgdwa2t" data-path="src/pages/HomePage.tsx">Switch</h1>
          </div>
          <nav className="hidden md:flex space-x-8" data-id="mbri2xff0" data-path="src/pages/HomePage.tsx">
            {/* <a href="#features" className="text-gray-300 hover:text-gray-100 transition-colors" data-id="0xdo52fxh" data-path="src/pages/HomePage.tsx">Features</a> */}
            <a href="#demos" className="text-gray-300 hover:text-gray-100 transition-colors" data-id="l6754zpwb" data-path="src/pages/HomePage.tsx">Demos</a>
            <a href="#services" className="text-gray-300 hover:text-gray-100 transition-colors" data-id="new-tab-id" data-path="src/pages/HomePage.tsx">See what we do</a>
            <a href="#pricing" className="text-gray-300 hover:text-gray-100 transition-colors" data-id="h1la333nr" data-path="src/pages/HomePage.tsx">Pricing</a>
            <a href="#testimonials" className="text-gray-300 hover:text-gray-100 transition-colors" data-id="ce7hz8j2o" data-path="src/pages/HomePage.tsx">Reviews</a>
            <a href="#contact" className="text-gray-300 hover:text-gray-100 transition-colors" data-id="sl6mrr3wz" data-path="src/pages/HomePage.tsx">Contact</a>
          </nav>
          <div className="flex items-center space-x-4" data-id="2oibrqhc4" data-path="src/pages/HomePage.tsx">
            <Button variant="ghost" className="text-white hover:text-gray-200" data-id="uwew8zt15" data-path="src/pages/HomePage.tsx">Sign In</Button>
            <Button className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white" data-id="0v16x8ob1" data-path="src/pages/HomePage.tsx">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden" data-id="oxdb71vyf" data-path="src/pages/HomePage.tsx">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-500/10 to-gray-800/10" data-id="w27hlrrmj" data-path="src/pages/HomePage.tsx"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-400/20 rounded-full blur-3xl" data-id="vel2bhr63" data-path="src/pages/HomePage.tsx"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-600/20 rounded-full blur-3xl" data-id="ppr2i7uhk" data-path="src/pages/HomePage.tsx"></div>
        
        <div className="container mx-auto text-center relative z-10" data-id="m4h4meuih" data-path="src/pages/HomePage.tsx">
          <Badge className="mb-6 bg-gradient-to-r from-gray-500/20 to-gray-800/20 text-gray-300 border-gray-500/30" data-id="5yu9u9g6p" data-path="src/pages/HomePage.tsx">
            <Rocket className="w-4 h-4 mr-2" data-id="82j16o0e9" data-path="src/pages/HomePage.tsx" />
            Launching Soon
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent" data-id="n84ojcglr" data-path="src/pages/HomePage.tsx">
            Grow Your Business with Smart Software
          </h1>
          
          {/* <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" data-id="18hjce0wy" data-path="src/pages/HomePage.tsx">
          We build custom websites, web apps, and digital tools for small businesses — using AI to deliver high-quality solutions in days, not weeks.
          </p> */}

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto" data-id="18hjce0wy" data-path="src/pages/HomePage.tsx">
          We help small businesses go digital with websites, apps, and AI tools—affordable and fast.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12" data-id="pj72mujz0" data-path="src/pages/HomePage.tsx">
            <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white px-8 py-4 text-lg" data-id="wz32gpp7z" data-path="src/pages/HomePage.tsx">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" data-id="zchvz1ori" data-path="src/pages/HomePage.tsx" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-gray-400 text-gray-400 hover:bg-gray-400/10 px-8 py-4 text-lg"
              onClick={() => openDemoModal('general')} data-id="lm034uty1" data-path="src/pages/HomePage.tsx">

              Watch Demo
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-400" data-id="cg2wm8woj" data-path="src/pages/HomePage.tsx">
            <div className="flex items-center gap-2" data-id="658u6mn7f" data-path="src/pages/HomePage.tsx">
              <CheckCircle className="w-5 h-5 text-green-400" data-id="0qlzl90f8" data-path="src/pages/HomePage.tsx" />
              <span data-id="4ymi419k6" data-path="src/pages/HomePage.tsx">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2" data-id="r10g9cvf5" data-path="src/pages/HomePage.tsx">
              <CheckCircle className="w-5 h-5 text-green-400" data-id="z3ddifblk" data-path="src/pages/HomePage.tsx" />
              <span data-id="q1ot78dw8" data-path="src/pages/HomePage.tsx">No credit card required</span>
            </div>
            <div className="flex items-center gap-2" data-id="ucrzv1qq7" data-path="src/pages/HomePage.tsx">
              <CheckCircle className="w-5 h-5 text-green-400" data-id="i7ybm260i" data-path="src/pages/HomePage.tsx" />
              <span data-id="qkw23it5o" data-path="src/pages/HomePage.tsx">24/7 support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Business Showcase Section */}
      <section id="demos" className="py-20 px-6 bg-black/30" data-id="vwn4rzc1q" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto" data-id="az8zrffnl" data-path="src/pages/HomePage.tsx">
          <div className="text-center mb-16" data-id="r1ko6p2wj" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="0kllf3lqt" data-path="src/pages/HomePage.tsx">
              See Switch in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-id="p45ubywx6" data-path="src/pages/HomePage.tsx">
              Discover how Switch transforms different business types with tailored SaaS solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="d8kd6w3nc" data-path="src/pages/HomePage.tsx">
            {[
            {
              icon: <Sofa className="w-8 h-8 text-amber-400" data-id="gqwueyr3w" data-path="src/pages/HomePage.tsx" />,
              title: "Furniture Store",
              description: "Complete e-commerce solution with inventory management and 3D product visualization.",
              image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&crop=center",
              features: ["3D Product Views", "Inventory Tracking", "Order Management"],
              color: "amber"
            },
            {
              icon: <ShoppingBag className="w-8 h-8 text-purple-400" data-id="hjji0bxpl" data-path="src/pages/HomePage.tsx" />,
              title: "Clothing Store",
              description: "Fashion-forward platform with size guides, virtual try-on, and trend analytics.",
              image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
              features: ["Virtual Try-On", "Size Guide", "Trend Analytics"],
              color: "purple"
            },
            {
              icon: <Camera className="w-8 h-8 text-blue-400" data-id="pyk7tcjr0" data-path="src/pages/HomePage.tsx" />,
              title: "Camera Rentals",
              description: "Professional equipment rental platform with booking calendar and damage protection.",
              image: "https://images.unsplash.com/photo-1484981184820-2e84ea0af397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmVzc2lvbmFsJTIwZXF1aXBtZW50JTIwcmVudGFsJTIwcGxhdGZvcm0lMjB3aXRoJTIwYm9va2luZyUyMGNhbGVuZGFyJTIwYW5kJTIwZGFtYWdlJTIwcHJvdGVjdGlvbi58ZW58MHx8fHwxNzQ5MTkxNDA2fDA&ixlib=rb-4.1.0&q=80&w=200$w=400",
              features: ["Booking Calendar", "Equipment Tracking", "Damage Protection"],
              color: "blue"
            },
            {
              icon: <Bike className="w-8 h-8 text-green-400" data-id="xczsrcnfq" data-path="src/pages/HomePage.tsx" />,
              title: "Bike Rentals",
              description: "Smart bike sharing solution with GPS tracking and mobile unlock features.",
              image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400&h=300&fit=crop&crop=center",
              features: ["GPS Tracking", "Mobile Unlock", "Route Planning"],
              color: "green"
            },
            {
              icon: <Monitor className="w-8 h-8 text-indigo-400" data-id="9zvggaacd" data-path="src/pages/HomePage.tsx" />,
              title: "Electronics Store",
              description: "Tech retail platform with product comparisons and warranty management.",
              image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center",
              features: ["Product Compare", "Warranty Tracking", "Tech Support"],
              color: "indigo"
            },
            {
              icon: <Store className="w-8 h-8 text-pink-400" data-id="7lh1nz4kn" data-path="src/pages/HomePage.tsx" />,
              title: "Multi-Store Platform",
              description: "Unified platform managing multiple store types with centralized analytics.",
              image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center",
              features: ["Multi-Store Sync", "Central Analytics", "Unified Checkout"],
              color: "pink"
            }].
            map((demo, index) =>
            <Card key={index} className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500/50 transition-all duration-300 hover:scale-105 overflow-hidden" data-id="xeis2yt3z" data-path="src/pages/HomePage.tsx">
                <div className="relative h-48 overflow-hidden" data-id="54mvhivbz" data-path="src/pages/HomePage.tsx">
                  <img
                  src={demo.image}
                  alt={demo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-id="ill20fha7" data-path="src/pages/HomePage.tsx" />

                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" data-id="byuq6kbsh" data-path="src/pages/HomePage.tsx"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-${demo.color}-500/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-${demo.color}-400/30`} data-id="ihzgyctwx" data-path="src/pages/HomePage.tsx">
                    {demo.icon}
                  </div>
                </div>
                <CardHeader data-id="0n4wds2ur" data-path="src/pages/HomePage.tsx">
                  <CardTitle className="text-white text-xl" data-id="ft5pjqzso" data-path="src/pages/HomePage.tsx">{demo.title}</CardTitle>
                  <CardDescription className="text-gray-300 text-base" data-id="hsdfuypph" data-path="src/pages/HomePage.tsx">
                    {demo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent data-id="24s8fslit" data-path="src/pages/HomePage.tsx">
                  <div className="space-y-2 mb-6" data-id="qc0c38op2" data-path="src/pages/HomePage.tsx">
                    {demo.features.map((feature, featureIndex) =>
                  <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-400" data-id="hp3o873bq" data-path="src/pages/HomePage.tsx">
                        <CheckCircle className="w-4 h-4 text-green-400" data-id="stwaqdrfz" data-path="src/pages/HomePage.tsx" />
                        <span data-id="dhx99x0bo" data-path="src/pages/HomePage.tsx">{feature}</span>
                      </div>
                  )}
                  </div>
                  <Button
                  className="w-full bg-gray-700 hover:bg-gray-600 text-white border-gray-600"
                  onClick={() => {
                    const demoTypeMap: {[key: string]: typeof currentDemoType;} = {
                      'Furniture Store': 'furniture',
                      'Clothing Store': 'clothing',
                      'Camera Rentals': 'camera',
                      'Bike Rentals': 'bike',
                      'Electronics Store': 'electronics',
                      'Multi-Store Platform': 'multistore'
                    };
                    openDemoModal(demoTypeMap[demo.title] || 'general');
                  }} data-id="fkullv70z" data-path="src/pages/HomePage.tsx">

                    View Demo
                    <ArrowRight className="w-4 h-4 ml-2" data-id="71s0yh50p" data-path="src/pages/HomePage.tsx" />
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section id="features" className="py-20 px-6 bg-black/20" data-id="gxys8env8" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto" data-id="v00h84fz4" data-path="src/pages/HomePage.tsx">
          <div className="text-center mb-16" data-id="c556rwsce" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="cnfyp7dan" data-path="src/pages/HomePage.tsx">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-id="xb92rayxl" data-path="src/pages/HomePage.tsx">
              Everything you need to build, deploy, and scale your applications with confidence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="9t566rzws" data-path="src/pages/HomePage.tsx">
            {[
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" data-id="2klxbd4ad" data-path="src/pages/HomePage.tsx" />,
                title: "Websites",
                description: "Get your websites for your busineess"
              },
              {
                icon: <Shield className="w-8 h-8 text-green-400" data-id="xnxa8yrc7" data-path="src/pages/HomePage.tsx" />,
                title: "Web applications",
                description: "Get your web applications for your business"
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-400" data-id="k38hv5aj4" data-path="src/pages/HomePage.tsx" />,
                title: "Advanced Analytics",
                description: "Real-time insights and detailed analytics to optimize your performance."
              },
              {
                icon: <Database className="w-8 h-8 text-purple-400" data-id="p9wq04yrw" data-path="src/pages/HomePage.tsx" />,
                title: "Smart Database",
                description: "Intelligent data management with automatic scaling and optimization."
              },
              {
                icon: <Cloud className="w-8 h-8 text-gray-400" data-id="ih445xrbx" data-path="src/pages/HomePage.tsx" />,
                title: "Cloud Native",
                description: "Built for the cloud with microservices architecture and auto-scaling."
              },
              {
                icon: <Users className="w-8 h-8 text-pink-400" data-id="gesq8mnvq" data-path="src/pages/HomePage.tsx" />,
                title: "Team Collaboration",
                description: "Seamless collaboration tools with real-time updates and version control."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500/50 transition-all duration-300 hover:scale-105" data-id="3evn03i0i" data-path="src/pages/HomePage.tsx">
                <CardHeader data-id="u83lg9n61" data-path="src/pages/HomePage.tsx">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4" data-id="cuvtq76il" data-path="src/pages/HomePage.tsx">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl" data-id="komggmbqr" data-path="src/pages/HomePage.tsx">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent data-id="qkknqpy3f" data-path="src/pages/HomePage.tsx">
                  <CardDescription className="text-gray-300 text-base" data-id="tl16dx1r3" data-path="src/pages/HomePage.tsx">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services We Offer Section */}
      <section id="services" className="py-20 px-6 bg-black/30" data-id="services-section" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto" data-id="services-container" data-path="src/pages/HomePage.tsx">
        <div className="text-center mb-16" data-id="c556rwsce" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="cnfyp7dan" data-path="src/pages/HomePage.tsx">
              See what we do
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-id="xb92rayxl" data-path="src/pages/HomePage.tsx">
            Simple, affordable services that bring your business online and closer to your customers.
            </p>
            {/* <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-id="xb92rayxl" data-path="src/pages/HomePage.tsx">
            We offer end-to-end development services to help your business go digital — all powered by AI-assisted tools and expert guidance.
            </p> */}
          </div>

          {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="services-title" data-path="src/pages/HomePage.tsx">Services We Offer</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8" data-id="services-description" data-path="src/pages/HomePage.tsx">Fast, Tailored Solutions — Delivered by AI + Experts</p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12" data-id="services-sub-description" data-path="src/pages/HomePage.tsx">We offer end-to-end development services to help your business go digital — all powered by AI-assisted tools and expert guidance.</p> */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="services-grid" data-path="src/pages/HomePage.tsx">
            {[
              {
                title: "💡 1. Custom Website Development",
                description: "Professional, mobile-friendly, and SEO-optimized websites designed for your brand — perfect for portfolios, local services, or company presence.",
                features: ["✅ Business Websites", "✅ Landing Pages", "✅ Personal Portfolios"]
              },
              {
                title: "⚙️ 2. Web Application Development",
                description: "From dashboards to internal tools, we create dynamic, scalable web apps tailored to your workflow.",
                features: ["✅ CRM Systems", "✅ Booking & Scheduling Platforms", "✅ Inventory Management", "✅ Admin Panels & Dashboards"]
              },
              {
                title: "🛒 3. E-commerce Solutions",
                description: "Launch your online store fast with AI-enhanced development and ready-to-integrate payment systems.",
                features: ["✅ Product Catalog & Cart", "✅ Secure Payments", "✅ Order Tracking & Invoicing"]
              },
              {
                title: "🤖 4. AI-Powered Tools & Automation",
                description: "Use AI to work smarter — automate repetitive tasks or offer smart features to your customers.",
                features: ["✅ AI Chatbots", "✅ Smart Forms & Auto-Responders", "✅ Analytics Dashboards"]
              },
              {
                title: "☁️ 5. Cloud & Integration Services",
                description: "Get scalable, secure, and fast systems using modern cloud technologies and third-party integrations.",
                features: ["✅ Google Cloud / AWS Hosting", "✅ API Integrations", "✅ Third-party Tools (Zapier, Stripe, Google Maps, etc.)"]
              },
              {
                title: "🔄 6. Maintenance & Support",
                description: "We stay with you post-launch to ensure everything runs smoothly.",
                features: ["✅ Regular Updates", "✅ Bug Fixes", "✅ On-demand Feature Enhancements"]
              }
            ].map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500/50 transition-all duration-300 hover:scale-105" data-id={`service-card-${index}`} data-path="src/pages/HomePage.tsx">
                <CardHeader data-id={`service-header-${index}`} data-path="src/pages/HomePage.tsx">
                  <CardTitle className="text-white text-xl" data-id={`service-title-${index}`} data-path="src/pages/HomePage.tsx">{service.title}</CardTitle>
                </CardHeader>
                <CardContent data-id={`service-content-${index}`} data-path="src/pages/HomePage.tsx">
                  <CardDescription className="text-gray-300 text-base mb-4" data-id={`service-description-${index}`} data-path="src/pages/HomePage.tsx">
                    {service.description}
                  </CardDescription>
                  <ul className="list-none space-y-2" data-id={`service-features-${index}`} data-path="src/pages/HomePage.tsx">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300" data-id={`service-feature-${index}-${featureIndex}`} data-path="src/pages/HomePage.tsx">{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div> */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-id="9t566rzws" data-path="src/pages/HomePage.tsx">
            {[
              {
                icon: <Zap className="w-8 h-8 text-yellow-400" data-id="2klxbd4ad" data-path="src/pages/HomePage.tsx" />,
                title: "Website Development",
                description: "Build a modern, mobile-friendly site for your business"
              },
              {
                icon: <Shield className="w-8 h-8 text-green-400" data-id="xnxa8yrc7" data-path="src/pages/HomePage.tsx" />,
                title: "Mobile App Development",
                description: "Android/iOS apps to improve customer experience"
              },
              {
                icon: <BarChart3 className="w-8 h-8 text-blue-400" data-id="k38hv5aj4" data-path="src/pages/HomePage.tsx" />,
                title: "AI Chatbots",
                description: "Automate customer queries with smart assistants"
              },
              {
                icon: <Database className="w-8 h-8 text-purple-400" data-id="p9wq04yrw" data-path="src/pages/HomePage.tsx" />,
                title: "Custom Software",
                description: "Tools tailored for your business needs"
              },
              {
                icon: <Cloud className="w-8 h-8 text-gray-400" data-id="ih445xrbx" data-path="src/pages/HomePage.tsx" />,
                title: "E-Commerce Store",
                description: "Sell products online with an easy-to-manage store"
              },
              {
                icon: <Users className="w-8 h-8 text-pink-400" data-id="gesq8mnvq" data-path="src/pages/HomePage.tsx" />,
                title: "Branding & Marketing Tools",
                description: "Make your business look pro with logo, SEO, social presence"
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500/50 transition-all duration-300 hover:scale-105" data-id="3evn03i0i" data-path="src/pages/HomePage.tsx">
                <CardHeader data-id="u83lg9n61" data-path="src/pages/HomePage.tsx">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl flex items-center justify-center mb-4" data-id="cuvtq76il" data-path="src/pages/HomePage.tsx">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-white text-xl" data-id="komggmbqr" data-path="src/pages/HomePage.tsx">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent data-id="qkknqpy3f" data-path="src/pages/HomePage.tsx">
                  <CardDescription className="text-gray-300 text-base" data-id="tl16dx1r3" data-path="src/pages/HomePage.tsx">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6" data-id="9vfpkzvvt" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto" data-id="vhe6rugq9" data-path="src/pages/HomePage.tsx">
          <div className="text-center mb-16" data-id="owpakfo5r" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="mvg2ex8ow" data-path="src/pages/HomePage.tsx">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-id="d14j72pqc" data-path="src/pages/HomePage.tsx">
              Choose the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" data-id="6myxvg3vc" data-path="src/pages/HomePage.tsx">
            {[
              {
                name: "Website Development",
                price: "₹5,000",
                description: "3-page static site (Home, About, Contact), mobile-friendly, contact form",
                color: "from-yellow-400 to-yellow-600",
                icon: <Zap className="w-7 h-7 text-yellow-500" />
              },
              {
                name: "Mobile App Development",
                price: "₹15,000",
                description: "Basic Android app (listing, info, contact), published on Play Store",
                color: "from-green-400 to-green-600",
                icon: <Shield className="w-7 h-7 text-green-500" />
              },
              {
                name: "AI Chatbot (Customer Support Agent)",
                price: "₹10,000",
                description: "WhatsApp or website chatbot, pre-trained responses, basic integration",
                color: "from-blue-400 to-blue-600",
                icon: <MessageCircle className="w-7 h-7 text-blue-500" />
              },
              {
                name: "Custom Software Solutions",
                price: "₹20,000",
                description: "Tailored web app (inventory, booking, POS, etc.), basic dashboard",
                color: "from-purple-400 to-purple-600",
                icon: <Database className="w-7 h-7 text-purple-500" />
              },
              {
                name: "E-Commerce Store Setup",
                price: "₹12,000",
                description: "Online shop using Shopify or WooCommerce, payment setup, 10 products",
                color: "from-pink-400 to-pink-600",
                icon: <ShoppingBag className="w-7 h-7 text-pink-500" />
              },
              {
                name: "Digital Branding & Marketing",
                price: "₹3,000",
                description: "Logo design, social media banners, Google My Business setup",
                color: "from-indigo-400 to-indigo-600",
                icon: <Star className="w-7 h-7 text-indigo-500" />
              }
            ].map((plan, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden border-0 rounded-2xl shadow-lg bg-gradient-to-br from-gray-800/70 to-gray-900/80 hover:shadow-2xl hover:scale-105 transition-all duration-300`}
                style={{ minHeight: 270 }}
                data-id="9ybflro7g"
                data-path="src/pages/HomePage.tsx"
              >
                {/* Accent bar and icon */}
                <div className={`h-2 w-full bg-gradient-to-r ${plan.color}`} />
                <div className="flex justify-center -mt-6 mb-2">
                  <div className={`rounded-full bg-gradient-to-br ${plan.color} p-3 shadow-md flex items-center justify-center`}>
                    {plan.icon}
                  </div>
                </div>
                <CardHeader className="text-center pt-0 pb-2">
                  <CardTitle className="text-white text-xl font-semibold mb-1">{plan.name}</CardTitle>
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-2">
                    Starts from {plan.price}
                  </div>
                </CardHeader>
                <CardContent className="text-center px-6 pb-6 pt-0">
                  <CardDescription className="text-gray-300 text-base leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-black/20" data-id="dpu4odufq" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto" data-id="bokfdbbop" data-path="src/pages/HomePage.tsx">
          <div className="text-center mb-16" data-id="c032vf50z" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="5xs5xcofa" data-path="src/pages/HomePage.tsx">
              Loved by Thousands of Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto" data-id="0i21w4487" data-path="src/pages/HomePage.tsx">
              See what our customers have to say about their experience with Switch.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" data-id="2pkigspeg" data-path="src/pages/HomePage.tsx">
            {[
            {
              name: "Sarah Johnson",
              role: "CTO at StartupCo",
              content: "Switch transformed our development workflow. We're shipping features 3x faster than before.",
              rating: 5
            },
            {
              name: "Mike Chen",
              role: "Lead Developer at TechCorp",
              content: "The best SaaS platform I've ever used. The analytics and insights are game-changing.",
              rating: 5
            },
            {
              name: "Emily Rodriguez",
              role: "Product Manager at InnovateLab",
              content: "Incredible platform with outstanding support. Our team productivity has skyrocketed.",
              rating: 5
            }].
            map((testimonial, index) =>
            <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700 hover:border-gray-500/50 transition-all duration-300" data-id="qsgtiwu3n" data-path="src/pages/HomePage.tsx">
                <CardContent className="pt-6" data-id="e7jkp0l0e" data-path="src/pages/HomePage.tsx">
                  <div className="flex gap-1 mb-4" data-id="ogrsxxfjw" data-path="src/pages/HomePage.tsx">
                    {[...Array(testimonial.rating)].map((_, i) =>
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" data-id="n5q6yuhk8" data-path="src/pages/HomePage.tsx" />
                  )}
                  </div>
                  <p className="text-gray-300 mb-6" data-id="0pe9xki1p" data-path="src/pages/HomePage.tsx">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3" data-id="khj2pesn7" data-path="src/pages/HomePage.tsx">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center text-white font-semibold" data-id="pm0skmcdr" data-path="src/pages/HomePage.tsx">
                      {testimonial.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                    <div data-id="pgh7r8odt" data-path="src/pages/HomePage.tsx">
                      <div className="text-white font-semibold" data-id="15p55rwzk" data-path="src/pages/HomePage.tsx">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm" data-id="pbujhcfc2" data-path="src/pages/HomePage.tsx">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6" data-id="8lzct6f0m" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto text-center" data-id="wty4k8ldx" data-path="src/pages/HomePage.tsx">
          <div className="max-w-4xl mx-auto" data-id="63triy992" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="hu69ty2ft" data-path="src/pages/HomePage.tsx">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-300 mb-12" data-id="x32zzme2z" data-path="src/pages/HomePage.tsx">
              Ready to transform your business? Reach out to us via WhatsApp or email.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto" data-id="npsn9jtg2" data-path="src/pages/HomePage.tsx">
              {/* WhatsApp Contact */}
              <Card className="bg-gradient-to-br from-green-800/50 to-green-900/50 border-green-600/30 hover:border-green-500/50 transition-all duration-300 hover:scale-105" data-id="ryfc84fyt" data-path="src/pages/HomePage.tsx">
                <CardContent className="pt-8" data-id="v6cdwhvt7" data-path="src/pages/HomePage.tsx">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6 mx-auto" data-id="erqnjs3fi" data-path="src/pages/HomePage.tsx">
                    <MessageCircle className="w-8 h-8 text-white" data-id="6wil61hjn" data-path="src/pages/HomePage.tsx" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4" data-id="wbv5lq81q" data-path="src/pages/HomePage.tsx">WhatsApp Chat</h3>
                  <p className="text-gray-300 mb-6" data-id="ek837pszx" data-path="src/pages/HomePage.tsx">
                    Get instant support and quick responses via WhatsApp
                  </p>
                  <Button
                    onClick={() => {
                      const message = encodeURIComponent("Hi! I'm interested in learning more about Switch and how it can help transform my business. Could you please provide me with more information?");
                      window.open(`https://wa.me/917397144006?text=${message}`, '_blank');
                    }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white" data-id="uj7m0prve" data-path="src/pages/HomePage.tsx">

                    <MessageCircle className="w-4 h-4 mr-2" data-id="ix194qu9b" data-path="src/pages/HomePage.tsx" />
                    Chat on WhatsApp
                  </Button>
                </CardContent>
              </Card>

              {/* Email Contact */}
              <Card className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-600/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105" data-id="x0wnefhby" data-path="src/pages/HomePage.tsx">
                <CardContent className="pt-8" data-id="759xca2v2" data-path="src/pages/HomePage.tsx">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 mx-auto" data-id="fso3ddj47" data-path="src/pages/HomePage.tsx">
                    <Mail className="w-8 h-8 text-white" data-id="hh13bjfhs" data-path="src/pages/HomePage.tsx" />
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-4" data-id="d8it0dmyo" data-path="src/pages/HomePage.tsx">Email Us</h3>
                  <p className="text-gray-300 mb-6" data-id="g1j3utbic" data-path="src/pages/HomePage.tsx">
                    Send us a detailed message and we'll get back to you soon
                  </p>
                  <Button
                    onClick={() => {
                      const subject = encodeURIComponent("Inquiry about Switch - Business Transformation Platform");
                      const body = encodeURIComponent("Hi there!\n\nI'm interested in learning more about Switch and how it can help transform my business.\n\nCould you please provide me with:\n- More information about your services\n- Pricing details\n- How to get started\n\nThank you!\n\nBest regards");
                      window.open(`mailto:trpbarath@gmail.com?subject=${subject}&body=${body}`, '_blank');
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white" data-id="9ktawluh3" data-path="src/pages/HomePage.tsx">

                    <Mail className="w-4 h-4 mr-2" data-id="q593ro03c" data-path="src/pages/HomePage.tsx" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6" data-id="ykbcggl8e" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto text-center" data-id="sopp94ez9" data-path="src/pages/HomePage.tsx">
          <div className="max-w-3xl mx-auto" data-id="imim24um4" data-path="src/pages/HomePage.tsx">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" data-id="k2h0t5stw" data-path="src/pages/HomePage.tsx">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8" data-id="clec7khcw" data-path="src/pages/HomePage.tsx">
              Join thousands of teams already using Switch to build the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-id="kr2jo1x5k" data-path="src/pages/HomePage.tsx">
              <Button size="lg" className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white px-8 py-4 text-lg" data-id="kqjsq14z6" data-path="src/pages/HomePage.tsx">
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" data-id="30ef9ouxe" data-path="src/pages/HomePage.tsx" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-400 text-gray-400 hover:bg-gray-400/10 px-8 py-4 text-lg"
                onClick={() => {
                  const message = encodeURIComponent("Hi! I'd like to speak with your sales team about Switch. Please contact me to discuss our business needs.");
                  window.open(`https://wa.me/917397144006?text=${message}`, '_blank');
                }} data-id="axhrc7xfv" data-path="src/pages/HomePage.tsx">

                <Phone className="w-4 h-4 mr-2" data-id="d529oziov" data-path="src/pages/HomePage.tsx" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 bg-black/30" data-id="7v9rwa46t" data-path="src/pages/HomePage.tsx">
        <div className="container mx-auto" data-id="qnsfbidm5" data-path="src/pages/HomePage.tsx">
          <div className="grid md:grid-cols-4 gap-8" data-id="07z3d6sjq" data-path="src/pages/HomePage.tsx">
            <div data-id="hbp08771b" data-path="src/pages/HomePage.tsx">
              <div className="flex items-center space-x-2 mb-4" data-id="u6r1gwcbb" data-path="src/pages/HomePage.tsx">
                <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center" data-id="18wmdb5h3" data-path="src/pages/HomePage.tsx">
                  <Code className="w-5 h-5 text-white" data-id="4cnq55usn" data-path="src/pages/HomePage.tsx" />
                </div>
                <h3 className="text-xl font-bold text-white" data-id="tezfi3j6i" data-path="src/pages/HomePage.tsx">Switch</h3>
              </div>
              <p className="text-gray-400" data-id="hbzj8nz9x" data-path="src/pages/HomePage.tsx">
                Building the future of SaaS platforms with cutting-edge technology and innovative solutions.
              </p>
            </div>
            
            <div data-id="ispt7p0nh" data-path="src/pages/HomePage.tsx">
              <h4 className="text-white font-semibold mb-4" data-id="gmm8f5x5k" data-path="src/pages/HomePage.tsx">Product</h4>
              <ul className="space-y-2 text-gray-400" data-id="8j4wlumrc" data-path="src/pages/HomePage.tsx">
                <li data-id="ydoxx48db" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="v1cxowkie" data-path="src/pages/HomePage.tsx">Features</a></li>
                <li data-id="w6m1c326h" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="mxskt2u3v" data-path="src/pages/HomePage.tsx">Pricing</a></li>
                <li data-id="jptlbqx5j" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="1atanpskt" data-path="src/pages/HomePage.tsx">API</a></li>
                <li data-id="7vw6bn0th" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="12uitskl1" data-path="src/pages/HomePage.tsx">Documentation</a></li>
              </ul>
            </div>
            
            <div data-id="sp99bxxnw" data-path="src/pages/HomePage.tsx">
              <h4 className="text-white font-semibold mb-4" data-id="mlhzzzk31" data-path="src/pages/HomePage.tsx">Company</h4>
              <ul className="space-y-2 text-gray-400" data-id="fy6gimt4b" data-path="src/pages/HomePage.tsx">
                <li data-id="hszoowxoc" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="8iqy81fav" data-path="src/pages/HomePage.tsx">About</a></li>
                <li data-id="w0c14j445" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="i1x5hd5j0" data-path="src/pages/HomePage.tsx">Blog</a></li>
                <li data-id="olic4u6hf" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="0fi6p765m" data-path="src/pages/HomePage.tsx">Careers</a></li>
                <li data-id="gw360ygd4" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="otfnx2aw6" data-path="src/pages/HomePage.tsx">Contact</a></li>
              </ul>
            </div>
            
            <div data-id="40qi4qada" data-path="src/pages/HomePage.tsx">
              <h4 className="text-white font-semibold mb-4" data-id="ew5zoly9v" data-path="src/pages/HomePage.tsx">Support</h4>
              <ul className="space-y-2 text-gray-400" data-id="54bs3l7zq" data-path="src/pages/HomePage.tsx">
                <li data-id="vancda303" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="8zp846ytw" data-path="src/pages/HomePage.tsx">Help Center</a></li>
                <li data-id="995gi3jeg" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="ecv5ja8fu" data-path="src/pages/HomePage.tsx">Community</a></li>
                <li data-id="iq08xx9jw" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="fbtv4wd7x" data-path="src/pages/HomePage.tsx">Status</a></li>
                <li data-id="h1pjsg74b" data-path="src/pages/HomePage.tsx"><a href="#" className="hover:text-gray-200 transition-colors" data-id="rxz486qll" data-path="src/pages/HomePage.tsx">Security</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400" data-id="hl538dok5" data-path="src/pages/HomePage.tsx">
            <p data-id="dox433f96" data-path="src/pages/HomePage.tsx">© {new Date().getFullYear()} Switch. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={closeDemoModal}
        demoType={currentDemoType} data-id="6y1hizyvt" data-path="src/pages/HomePage.tsx" />

    </div>);

};

export default HomePage;