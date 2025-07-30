"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Menu,
  X,
  Linkedin,
  Instagram,
  Mail,
  MessageCircle,
  Twitter,
  ArrowRight,
  Phone,
  Send,
  TrendingUp,
  Users,
  Award,
  Target,
  Rocket,
  Globe,
  Heart,
  Eye,
  Star,
  CheckCircle,
  BarChart3,
  Briefcase,
  Calendar,
  Quote,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TarikLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [visitorCount, setVisitorCount] = useState(0)
  const [viewCount, setViewCount] = useState(0)
  const [projectCount, setProjectCount] = useState(0)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Animated counters
    const animateCounter = (setter: (value: number) => void, target: number, duration: number) => {
      let start = 0
      const increment = target / (duration / 16)
      const timer = setInterval(() => {
        start += increment
        if (start >= target) {
          setter(target)
          clearInterval(timer)
        } else {
          setter(Math.floor(start))
        }
      }, 16)
    }

    window.addEventListener("scroll", handleScroll)

    // Start counters after component mounts
    setTimeout(() => {
      animateCounter(setViewCount, 10000000, 2500)
      animateCounter(setVisitorCount, 250000, 2000)
      animateCounter(setProjectCount, 500, 1800)
    }, 1000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <div className="w-11 h-11 bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">T</span>
                </div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Tarik BEN LAKHDAR</h1>
                <p className="text-xs text-slate-600 font-medium">CEO & Strategic Leader</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {["Accueil", "À propos", "Expertise", "Blog", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace("à ", "").replace(" ", ""))}
                  className="relative text-slate-600 hover:text-slate-900 transition-colors font-medium group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-900 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-slate-900 hover:bg-slate-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Discutons
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <div className="w-8 h-8 bg-slate-900 rounded-md flex items-center justify-center">
                {isMenuOpen ? <X className="w-4 h-4 text-white" /> : <Menu className="w-4 h-4 text-white" />}
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
              <div className="container mx-auto px-4 py-6">
                <nav className="flex flex-col space-y-4">
                  {["Accueil", "À propos", "Expertise", "Blog", "Contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase().replace("à ", "").replace(" ", ""))}
                      className="text-left text-slate-600 hover:text-slate-900 transition-colors font-medium py-2"
                    >
                      {item}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="relative pt-24 pb-20 bg-gradient-to-b from-slate-50 to-white" ref={heroRef}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-2">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-slate-700">Top 50 Creators Worldwide Arabic</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight">
                Transformons votre
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  vision en réalité
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-light max-w-3xl mx-auto leading-relaxed">
                Expert en transformation digitale et leadership stratégique, j'accompagne les entreprises vers
                l'excellence opérationnelle et la croissance durable.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto py-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{viewCount.toLocaleString()}+</div>
                <div className="text-sm text-slate-600 font-medium">Vues générées</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{visitorCount.toLocaleString()}+</div>
                <div className="text-sm text-slate-600 font-medium">Professionnels inspirés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-slate-900">{projectCount}+</div>
                <div className="text-sm text-slate-600 font-medium">Projets réalisés</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => scrollToSection("apropos")}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Rocket className="mr-2 w-5 h-5" />
                Découvrir mon approche
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Planifier un échange
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-12">
              <p className="text-sm text-slate-500 mb-6">Ils me font confiance</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <div className="text-2xl font-bold text-slate-400">FINTECH</div>
                <div className="text-2xl font-bold text-slate-400">STARTUP</div>
                <div className="text-2xl font-bold text-slate-400">CORPORATE</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-blue-100 text-blue-800 px-4 py-2 text-sm font-semibold rounded-full">
                  Mon parcours
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                  Une expertise forgée par l'expérience et la passion
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Responsable d'agence avec plus de 10 ans d'expérience dans la transformation digitale et le leadership
                  stratégique. Ma mission : accompagner les dirigeants et leurs équipes vers l'excellence
                  opérationnelle.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Leadership Transformationnel</h3>
                    <p className="text-slate-600">
                      Développement d'équipes performantes et mise en place de stratégies de croissance durable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Innovation Financière</h3>
                    <p className="text-slate-600">
                      Expertise en fintech et transformation digitale des services financiers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Influence & Motivation</h3>
                    <p className="text-slate-600">
                      Créateur de contenu reconnu avec plus de 10M de vues, spécialisé en motivation professionnelle.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["MBA Finance", "Certified Leader", "Digital Expert", "Top Creator"].map((cert) => (
                  <Badge key={cert} variant="secondary" className="bg-slate-100 text-slate-700 px-3 py-1 font-medium">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/images/tarik-portrait.png"
                  alt="Tarik BEN LAKHDAR - CEO et Expert en Transformation Digitale"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl object-cover"
                />
                {/* Achievement Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">98%</div>
                      <div className="text-sm text-slate-600">Taux de satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-800 px-4 py-2 text-sm font-semibold rounded-full">
              Mes domaines d'expertise
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Des solutions sur mesure pour votre croissance
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Une approche holistique combinant leadership, innovation et performance pour transformer votre entreprise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Transformation Digitale",
                description:
                  "Accompagnement stratégique dans la digitalisation des processus et l'optimisation des performances.",
                features: ["Audit digital", "Stratégie tech", "Change management"],
                color: "blue",
              },
              {
                icon: Users,
                title: "Leadership & Management",
                description: "Développement des compétences managériales et création d'équipes haute performance.",
                features: ["Team building", "Coaching exécutif", "Formation leadership"],
                color: "green",
              },
              {
                icon: BarChart3,
                title: "Innovation Financière",
                description: "Expertise en fintech, services bancaires digitaux et solutions de paiement innovantes.",
                features: ["Fintech strategy", "Digital banking", "Payment solutions"],
                color: "purple",
              },
              {
                icon: Target,
                title: "Stratégie & Croissance",
                description: "Élaboration de stratégies de croissance durable et d'expansion sur de nouveaux marchés.",
                features: ["Business plan", "Market expansion", "ROI optimization"],
                color: "amber",
              },
              {
                icon: Rocket,
                title: "Motivation & Performance",
                description: "Programmes de motivation et d'engagement pour maximiser la performance des équipes.",
                features: ["Team motivation", "Performance coaching", "Culture change"],
                color: "red",
              },
              {
                icon: Globe,
                title: "Influence Digitale",
                description: "Stratégies de personal branding et de création de contenu pour leaders et entreprises.",
                features: ["Content strategy", "Personal branding", "Social influence"],
                color: "indigo",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 bg-${service.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className={`w-6 h-6 text-${service.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-green-100 text-green-800 px-4 py-2 text-sm font-semibold rounded-full">
              Témoignages
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Ce que disent mes clients</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Martinez",
                role: "CEO, TechStart",
                content:
                  "Tarik a transformé notre approche du leadership. Grâce à son accompagnement, notre équipe a gagné 40% en productivité.",
                rating: 5,
              },
              {
                name: "Ahmed Ben Ali",
                role: "Directeur Général, FinanceCorpus",
                content:
                  "Son expertise en transformation digitale nous a permis de moderniser nos processus et d'améliorer notre compétitivité.",
                rating: 5,
              },
              {
                name: "Marie Dubois",
                role: "RH Director, InnovateNow",
                content:
                  "Un véritable catalyseur de changement. Tarik sait motiver les équipes et créer une culture de performance.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-slate-50 border-0 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-slate-300 mb-4" />
                <p className="text-slate-700 mb-6 leading-relaxed">{testimonial.content}</p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-indigo-100 text-indigo-800 px-4 py-2 text-sm font-semibold rounded-full">
              Insights & Réflexions
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Les dernières tendances et stratégies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Découvrez mes analyses et conseils pour naviguer dans l'économie digitale moderne
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "L'avenir de la finance digitale",
                description:
                  "Comment les nouvelles technologies transforment le secteur financier et créent de nouvelles opportunités de croissance.",
                image: "/images/finance-digital.png",
                date: "15 Jan 2024",
                category: "Finance",
                readTime: "5 min",
                featured: true,
              },
              {
                title: "Leadership à l'ère du digital",
                description:
                  "Les compétences essentielles pour diriger une équipe dans un environnement technologique en constante évolution.",
                image: "/images/leadership-business.png",
                date: "10 Jan 2024",
                category: "Leadership",
                readTime: "7 min",
                featured: false,
              },
              {
                title: "Motivation et performance",
                description:
                  "Stratégies éprouvées pour maintenir l'engagement et maximiser la performance des équipes modernes.",
                image: "/images/motivation-concept.png",
                date: "5 Jan 2024",
                category: "Motivation",
                readTime: "4 min",
                featured: false,
              },
            ].map((article, index) => (
              <Card
                key={index}
                className={`group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                  article.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-slate-700 font-medium">{article.category}</Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 text-xs text-slate-700 font-medium">
                    {article.readTime}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-sm text-slate-500 mb-3">{article.date}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">{article.description}</p>
                  <Button variant="ghost" className="text-blue-600 hover:text-blue-700 p-0 h-auto font-semibold">
                    Lire l'article
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white px-8 py-3 font-semibold rounded-xl bg-transparent"
            >
              <Eye className="mr-2 w-5 h-5" />
              Voir tous les articles
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-slate-100 text-slate-800 px-4 py-2 text-sm font-semibold rounded-full">
              Prenons contact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Transformons ensemble votre vision en succès
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Que vous souhaitiez développer votre leadership, transformer votre entreprise ou créer une stratégie de
              croissance, je suis là pour vous accompagner.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-slate-50 border-0 rounded-2xl shadow-lg">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl text-slate-900 flex items-center">
                  <Send className="mr-3 w-6 h-6 text-blue-600" />
                  Démarrons la conversation
                </CardTitle>
                <CardDescription className="text-slate-600">
                  Partagez-moi votre projet et vos objectifs. Je vous recontacte sous 24h.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Prénom & Nom</label>
                      <Input
                        placeholder="John Doe"
                        className="bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600 rounded-lg h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email professionnel</label>
                      <Input
                        type="email"
                        placeholder="john@entreprise.com"
                        className="bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600 rounded-lg h-12"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Entreprise & Poste</label>
                    <Input
                      placeholder="CEO chez TechCorp"
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600 rounded-lg h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Votre projet</label>
                    <Textarea
                      placeholder="Décrivez votre projet, vos objectifs et comment je peux vous aider..."
                      rows={5}
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600 rounded-lg resize-none"
                    />
                  </div>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                    <Send className="mr-2 w-5 h-5" />
                    Envoyer ma demande
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Social */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card className="bg-slate-900 text-white rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-white flex items-center">
                    <Target className="mr-3 w-6 h-6" />
                    Autres moyens de contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email direct",
                      value: "tarik.benlakhdar@pro.com",
                      action: "Écrire un email",
                    },
                    {
                      icon: Phone,
                      label: "Téléphone",
                      value: "+33 1 23 45 67 89",
                      action: "Programmer un appel",
                    },
                    {
                      icon: Calendar,
                      label: "Rendez-vous",
                      value: "Calendrier en ligne",
                      action: "Réserver un créneau",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-center justify-between group">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                          <contact.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-medium">{contact.label}</p>
                          <p className="text-white/80 text-sm">{contact.value}</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/10 opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900 flex items-center">
                    <Heart className="mr-3 w-5 h-5 text-red-500" />
                    Suivez mon actualité
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      {
                        icon: Linkedin,
                        name: "LinkedIn",
                        followers: "50K+",
                        color: "hover:bg-blue-600 hover:text-white",
                      },
                      {
                        icon: Instagram,
                        name: "Instagram",
                        followers: "100K+",
                        color: "hover:bg-pink-600 hover:text-white",
                      },
                      {
                        icon: Twitter,
                        name: "Twitter",
                        followers: "25K+",
                        color: "hover:bg-blue-400 hover:text-white",
                      },
                      {
                        icon: MessageCircle,
                        name: "WhatsApp",
                        followers: "Direct",
                        color: "hover:bg-green-600 hover:text-white",
                      },
                    ].map((social, index) => (
                      <Link
                        key={index}
                        href="#"
                        className={`flex flex-col items-center space-y-3 p-4 rounded-xl border border-gray-200 ${social.color} transition-all duration-300 group text-slate-700`}
                      >
                        <social.icon className="w-6 h-6" />
                        <div className="text-center">
                          <div className="font-medium text-sm">{social.name}</div>
                          <div className="text-xs opacity-70">{social.followers}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-slate-900 font-bold text-lg">T</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Tarik BEN LAKHDAR</h3>
                  <p className="text-slate-400 text-sm">CEO & Strategic Leader</p>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Expert en transformation digitale et leadership stratégique. Ensemble, créons l'avenir de votre
                entreprise.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Navigation</h4>
              <ul className="space-y-3">
                {["Accueil", "À propos", "Expertise", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item.toLowerCase().replace("à ", "").replace(" ", ""))}
                      className="text-slate-400 hover:text-white transition-colors"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-slate-400">
                <li>Transformation Digitale</li>
                <li>Leadership Coaching</li>
                <li>Innovation Financière</li>
                <li>Stratégie de Croissance</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} Tarik BEN LAKHDAR. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Mentions légales
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors text-sm">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
