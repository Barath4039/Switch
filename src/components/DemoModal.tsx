import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Play, Pause, Volume2, VolumeX, RotateCcw, ExternalLink, CheckCircle, Zap, Shield, BarChart3, Database, Cloud, Users, Star, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoType?: 'general' | 'furniture' | 'clothing' | 'camera' | 'bike' | 'electronics' | 'multistore';
}

const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose, demoType = 'general' }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const generalDemoContent = {
    title: 'Switch Platform Demo',
    description: 'See how Switch transforms businesses with cutting-edge SaaS solutions',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    images: [
    {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time insights and performance metrics at your fingertips'
    },
    {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center',
      title: 'Team Collaboration',
      description: 'Seamless workflow management and team communication tools'
    },
    {
      url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&crop=center',
      title: 'Automated Workflows',
      description: 'Streamline operations with intelligent automation'
    },
    {
      url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=500&fit=crop&crop=center',
      title: 'Mobile-First Design',
      description: 'Access your business data anywhere, anytime'
    }],

    features: [
    { icon: <Zap className="w-5 h-5 text-yellow-400" data-id="he83vcc5t" data-path="src/components/DemoModal.tsx" />, title: 'Lightning Fast Performance', description: 'Sub-second response times globally' },
    { icon: <Shield className="w-5 h-5 text-green-400" data-id="6hvd9ojgv" data-path="src/components/DemoModal.tsx" />, title: 'Enterprise Security', description: 'Bank-level encryption and compliance' },
    { icon: <BarChart3 className="w-5 h-5 text-blue-400" data-id="23mr0w67y" data-path="src/components/DemoModal.tsx" />, title: 'Advanced Analytics', description: 'AI-powered insights and predictions' },
    { icon: <Database className="w-5 h-5 text-purple-400" data-id="munues92o" data-path="src/components/DemoModal.tsx" />, title: 'Smart Database', description: 'Auto-scaling with intelligent optimization' },
    { icon: <Cloud className="w-5 h-5 text-gray-400" data-id="ggdb94pc2" data-path="src/components/DemoModal.tsx" />, title: 'Cloud Native', description: 'Built for modern cloud infrastructure' },
    { icon: <Users className="w-5 h-5 text-pink-400" data-id="i99wmib7l" data-path="src/components/DemoModal.tsx" />, title: 'Team Collaboration', description: 'Real-time collaboration tools' }]

  };

  const businessDemos = {
    furniture: {
      title: 'Furniture Store Demo',
      description: 'Complete e-commerce solution with inventory management and 3D visualization',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      images: [
      {
        url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=500&fit=crop&crop=center',
        title: 'Modern Showroom Interface',
        description: 'Elegant product displays with detailed specifications'
      },
      {
        url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=500&fit=crop&crop=center',
        title: '3D Product Visualization',
        description: 'Interactive 3D models for immersive shopping experience'
      },
      {
        url: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=500&fit=crop&crop=center',
        title: 'Inventory Management',
        description: 'Real-time stock tracking and automated reordering'
      }]

    },
    clothing: {
      title: 'Fashion Store Demo',
      description: 'Fashion-forward platform with virtual try-on and trend analytics',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      images: [
      {
        url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop&crop=center',
        title: 'Fashion Catalog',
        description: 'Curated collections with advanced filtering options'
      },
      {
        url: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop&crop=center',
        title: 'Virtual Try-On',
        description: 'AR-powered virtual fitting room experience'
      },
      {
        url: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=500&fit=crop&crop=center',
        title: 'Trend Analytics',
        description: 'Data-driven insights on fashion trends and customer preferences'
      }]

    },
    camera: {
      title: 'Camera Rental Demo',
      description: 'Professional equipment rental with booking calendar and damage protection',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      images: [
      {
        url: 'https://images.unsplash.com/photo-1484981184820-2e84ea0af397?w=800&h=500&fit=crop&crop=center',
        title: 'Equipment Catalog',
        description: 'Professional camera gear with detailed specifications'
      },
      {
        url: 'https://images.unsplash.com/photo-1447015237604-d4582dea0e52?w=800&h=500&fit=crop&crop=center',
        title: 'Booking Calendar',
        description: 'Real-time availability and advanced booking system'
      },
      {
        url: 'https://images.unsplash.com/photo-1563906267088-b029e7101114?w=800&h=500&fit=crop&crop=center',
        title: 'Quality Assurance',
        description: 'Damage tracking and insurance coverage management'
      }]

    }
  };

  const getCurrentDemo = () => {
    if (demoType === 'general') return generalDemoContent;
    return businessDemos[demoType as keyof typeof businessDemos] || generalDemoContent;
  };

  const currentDemo = getCurrentDemo();

  const nextImage = () => {
    const demo = getCurrentDemo();
    setCurrentImageIndex((prev) => (prev + 1) % demo.images.length);
  };

  const prevImage = () => {
    const demo = getCurrentDemo();
    setCurrentImageIndex((prev) => (prev - 1 + demo.images.length) % demo.images.length);
  };

  const handleVideoToggle = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose} data-id="drxgfhy14" data-path="src/components/DemoModal.tsx">
      <DialogContent className="max-w-6xl w-full h-[90vh] bg-gradient-to-br from-gray-900 to-black border-gray-700 overflow-hidden" data-id="od49daj5b" data-path="src/components/DemoModal.tsx">
        <DialogHeader className="pb-4" data-id="ls09p8ju3" data-path="src/components/DemoModal.tsx">
          <DialogTitle className="text-2xl font-bold text-white flex items-center gap-3" data-id="7d91m0oli" data-path="src/components/DemoModal.tsx">
            <div className="w-8 h-8 bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg flex items-center justify-center" data-id="u3osjwhsh" data-path="src/components/DemoModal.tsx">
              <Play className="w-5 h-5 text-white" data-id="p7ohg0za4" data-path="src/components/DemoModal.tsx" />
            </div>
            {currentDemo.title}
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-lg" data-id="3a07dq9es" data-path="src/components/DemoModal.tsx">
            {currentDemo.description}
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto" data-id="nk2cfyz9e" data-path="src/components/DemoModal.tsx">
          <Tabs defaultValue="video" className="w-full" data-id="80tevo3et" data-path="src/components/DemoModal.tsx">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800 border border-gray-700" data-id="dyyp70kpk" data-path="src/components/DemoModal.tsx">
              <TabsTrigger value="video" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white" data-id="sauzeujr5" data-path="src/components/DemoModal.tsx">
                Video Demo
              </TabsTrigger>
              <TabsTrigger value="gallery" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white" data-id="uzy83xr8i" data-path="src/components/DemoModal.tsx">
                Image Gallery
              </TabsTrigger>
              <TabsTrigger value="features" className="data-[state=active]:bg-gray-600 data-[state=active]:text-white" data-id="iexnqzew5" data-path="src/components/DemoModal.tsx">
                Key Features
              </TabsTrigger>
            </TabsList>

            <TabsContent value="video" className="mt-6" data-id="njdt1fnl8" data-path="src/components/DemoModal.tsx">
              <div className="relative bg-black rounded-lg overflow-hidden shadow-2xl" data-id="fka8uc4ks" data-path="src/components/DemoModal.tsx">
                <video
                  className="w-full h-96 object-cover"
                  poster="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&crop=center"
                  muted={isMuted}
                  loop
                  autoPlay={isVideoPlaying} data-id="gjkmb9fjl" data-path="src/components/DemoModal.tsx">

                  <source src={currentDemo.videoUrl} type="video/mp4" data-id="4p66xg6aj" data-path="src/components/DemoModal.tsx" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300" data-id="8yhbv3ybt" data-path="src/components/DemoModal.tsx">
                  <div className="flex items-center gap-4" data-id="alls9pzhh" data-path="src/components/DemoModal.tsx">
                    <Button
                      onClick={handleVideoToggle}
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none" data-id="a2v0ufv3y" data-path="src/components/DemoModal.tsx">

                      {isVideoPlaying ?
                      <Pause className="w-8 h-8" data-id="0fmcugibq" data-path="src/components/DemoModal.tsx" /> :

                      <Play className="w-8 h-8" data-id="ah4vvqg6d" data-path="src/components/DemoModal.tsx" />
                      }
                    </Button>
                    <Button
                      onClick={() => setIsMuted(!isMuted)}
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none" data-id="kosk987za" data-path="src/components/DemoModal.tsx">

                      {isMuted ?
                      <VolumeX className="w-6 h-6" data-id="dg7cha93d" data-path="src/components/DemoModal.tsx" /> :

                      <Volume2 className="w-6 h-6" data-id="q8cjo8p4d" data-path="src/components/DemoModal.tsx" />
                      }
                    </Button>
                    <Button
                      onClick={() => {
                        setIsVideoPlaying(false);
                        setTimeout(() => setIsVideoPlaying(true), 100);
                      }}
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-none" data-id="yrad21yps" data-path="src/components/DemoModal.tsx">

                      <RotateCcw className="w-6 h-6" data-id="fxrty4ow4" data-path="src/components/DemoModal.tsx" />
                    </Button>
                  </div>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-4 left-4 right-4" data-id="9l4h8a0ui" data-path="src/components/DemoModal.tsx">
                  <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4" data-id="ktjk5kr88" data-path="src/components/DemoModal.tsx">
                    <h3 className="text-white font-semibold text-lg mb-2" data-id="s84db98ni" data-path="src/components/DemoModal.tsx">Interactive Platform Demo</h3>
                    <p className="text-gray-300 text-sm" data-id="3jq6ygq8o" data-path="src/components/DemoModal.tsx">Experience the full power of Switch with our comprehensive platform walkthrough</p>
                    <div className="flex items-center gap-4 mt-3" data-id="pyq7ef3be" data-path="src/components/DemoModal.tsx">
                      <Badge className="bg-green-500/20 text-green-400 border-green-400/30" data-id="pxkhg07k0" data-path="src/components/DemoModal.tsx">
                        <CheckCircle className="w-3 h-3 mr-1" data-id="1mu0t3bic" data-path="src/components/DemoModal.tsx" />
                        Live Demo
                      </Badge>
                      <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30" data-id="1uw44koma" data-path="src/components/DemoModal.tsx">
                        <Star className="w-3 h-3 mr-1" data-id="yktns8r7b" data-path="src/components/DemoModal.tsx" />
                        HD Quality
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6" data-id="uzz0oe9f7" data-path="src/components/DemoModal.tsx">
                <Card className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-gray-600" data-id="39o3ullx0" data-path="src/components/DemoModal.tsx">
                  <CardContent className="pt-6" data-id="x7dncm147" data-path="src/components/DemoModal.tsx">
                    <div className="flex items-center justify-between" data-id="a53j7puch" data-path="src/components/DemoModal.tsx">
                      <div data-id="41mv0u49t" data-path="src/components/DemoModal.tsx">
                        <h4 className="text-white font-semibold text-lg mb-2" data-id="ukhl4jcz7" data-path="src/components/DemoModal.tsx">Want to see more?</h4>
                        <p className="text-gray-300" data-id="iukxjytl6" data-path="src/components/DemoModal.tsx">Schedule a personalized demo with our team</p>
                      </div>
                      <Button
                        className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white"
                        onClick={() => {
                          const message = encodeURIComponent("Hi! I'd like to schedule a personalized demo of Switch after viewing your demo video. Could you please arrange a meeting?");
                          window.open(`https://wa.me/917397144006?text=${message}`, '_blank');
                        }} data-id="vsl0f2bxk" data-path="src/components/DemoModal.tsx">

                        Schedule Demo
                        <ExternalLink className="w-4 h-4 ml-2" data-id="ciiye7xbb" data-path="src/components/DemoModal.tsx" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="gallery" className="mt-6" data-id="859vznfcq" data-path="src/components/DemoModal.tsx">
              <div className="space-y-6" data-id="bv3w5ofwy" data-path="src/components/DemoModal.tsx">
                {/* Main Image Display */}
                <div className="relative" data-id="nv21v00zw" data-path="src/components/DemoModal.tsx">
                  <div className="relative h-96 bg-black rounded-lg overflow-hidden shadow-2xl" data-id="5wts2b9n9" data-path="src/components/DemoModal.tsx">
                    <img
                      src={currentDemo.images[currentImageIndex].url}
                      alt={currentDemo.images[currentImageIndex].title}
                      className="w-full h-full object-cover" data-id="pw4zzampx" data-path="src/components/DemoModal.tsx" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" data-id="y3mkxl0so" data-path="src/components/DemoModal.tsx" />
                    
                    {/* Navigation Arrows */}
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200" data-id="a4i4luqfj" data-path="src/components/DemoModal.tsx">

                      <ArrowRight className="w-6 h-6 rotate-180" data-id="9c5454df6" data-path="src/components/DemoModal.tsx" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200" data-id="m6nlqi17d" data-path="src/components/DemoModal.tsx">

                      <ArrowRight className="w-6 h-6" data-id="pj89chde1" data-path="src/components/DemoModal.tsx" />
                    </button>

                    {/* Image Info */}
                    <div className="absolute bottom-6 left-6 right-6" data-id="1u3f1ihss" data-path="src/components/DemoModal.tsx">
                      <h3 className="text-white font-bold text-xl mb-2" data-id="3vqueb9yo" data-path="src/components/DemoModal.tsx">
                        {currentDemo.images[currentImageIndex].title}
                      </h3>
                      <p className="text-gray-200" data-id="gpsbq2gki" data-path="src/components/DemoModal.tsx">
                        {currentDemo.images[currentImageIndex].description}
                      </p>
                    </div>

                    {/* Image Counter */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm" data-id="sfksbmlin" data-path="src/components/DemoModal.tsx">
                      {currentImageIndex + 1} / {currentDemo.images.length}
                    </div>
                  </div>
                </div>

                {/* Thumbnail Navigation */}
                <div className="flex gap-3 overflow-x-auto pb-2" data-id="vaqx2qnei" data-path="src/components/DemoModal.tsx">
                  {currentDemo.images.map((image, index) =>
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentImageIndex ?
                    'border-blue-400 scale-105' :
                    'border-gray-600 hover:border-gray-400'}`
                    } data-id="p1vd7yexn" data-path="src/components/DemoModal.tsx">

                      <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover" data-id="g826d225k" data-path="src/components/DemoModal.tsx" />

                    </button>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="mt-6" data-id="jt2o6j6yp" data-path="src/components/DemoModal.tsx">
              <div className="grid md:grid-cols-2 gap-6" data-id="0euk3pfpk" data-path="src/components/DemoModal.tsx">
                {(demoType === 'general' ? generalDemoContent.features : [
                { icon: <CheckCircle className="w-5 h-5 text-green-400" data-id="tfoatxr7s" data-path="src/components/DemoModal.tsx" />, title: 'Business Optimization', description: 'Tailored solutions for your industry' },
                { icon: <Zap className="w-5 h-5 text-yellow-400" data-id="wogkpn8me" data-path="src/components/DemoModal.tsx" />, title: 'Fast Implementation', description: 'Get up and running in minutes' },
                { icon: <Shield className="w-5 h-5 text-blue-400" data-id="xffd5s9ee" data-path="src/components/DemoModal.tsx" />, title: 'Secure Platform', description: 'Enterprise-grade security standards' },
                { icon: <BarChart3 className="w-5 h-5 text-purple-400" data-id="1pisb39cg" data-path="src/components/DemoModal.tsx" />, title: 'Analytics Dashboard', description: 'Comprehensive business insights' }]).
                map((feature, index) =>
                <Card key={index} className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 border-gray-600 hover:border-gray-500/50 transition-all duration-300" data-id="p5cr8wei3" data-path="src/components/DemoModal.tsx">
                    <CardHeader data-id="ksweq2b5y" data-path="src/components/DemoModal.tsx">
                      <div className="flex items-center gap-3" data-id="7ulyilx32" data-path="src/components/DemoModal.tsx">
                        <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg flex items-center justify-center" data-id="zrh77oojk" data-path="src/components/DemoModal.tsx">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-white text-lg" data-id="j3qrjzsd2" data-path="src/components/DemoModal.tsx">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent data-id="chrguv89m" data-path="src/components/DemoModal.tsx">
                      <CardDescription className="text-gray-300" data-id="iq8f0m6lx" data-path="src/components/DemoModal.tsx">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )}
              </div>

              <div className="mt-8" data-id="h0oopiwsp" data-path="src/components/DemoModal.tsx">
                <Card className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 border-blue-500/30" data-id="1v52qaqpm" data-path="src/components/DemoModal.tsx">
                  <CardContent className="pt-6" data-id="1apjz3thq" data-path="src/components/DemoModal.tsx">
                    <div className="text-center" data-id="7cumrzxdj" data-path="src/components/DemoModal.tsx">
                      <h3 className="text-white font-bold text-xl mb-3" data-id="np77v4eqa" data-path="src/components/DemoModal.tsx">Ready to get started?</h3>
                      <p className="text-gray-300 mb-6" data-id="h8qcbk4wu" data-path="src/components/DemoModal.tsx">Join thousands of businesses already using Switch</p>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center" data-id="6yp286tl2" data-path="src/components/DemoModal.tsx">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white" data-id="baie8a2la" data-path="src/components/DemoModal.tsx">

                          Start Free Trial
                          <ArrowRight className="w-4 h-4 ml-2" data-id="icqvt5mck" data-path="src/components/DemoModal.tsx" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-gray-400 text-gray-300 hover:bg-gray-700"
                          onClick={() => {
                            const message = encodeURIComponent("Hi! I'd like to speak with your sales team about Switch after viewing the demo. Please contact me to discuss our business needs.");
                            window.open(`https://wa.me/917397144006?text=${message}`, '_blank');
                          }} data-id="kn61rcq3l" data-path="src/components/DemoModal.tsx">

                          Contact Sales
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>);

};

export default DemoModal;