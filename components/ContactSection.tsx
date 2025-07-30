"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Send, Target, Heart, ExternalLink, Mail, Phone, Calendar, Linkedin, Instagram, Twitter, MessageCircle } from 'lucide-react'

const contactMethodsData = [
  {
    icon: Mail,
    label: 'Email direct',
    value: 'tarik.benlakhdar@pro.com',
    action: 'Écrire un email',
    href: 'mailto:tarik.benlakhdar@pro.com',
  },
  {
    icon: Phone,
    label: 'Téléphone',
    value: '+33 1 23 45 67 89',
    action: 'Programmer un appel',
    href: 'tel:+33123456789',
  },
  {
    icon: Calendar,
    label: 'Rendez-vous',
    value: 'Calendrier en ligne',
    action: 'Réserver un créneau',
    href: '#',
  },
]

const socialMediaData = [
  {
    icon: Linkedin,
    name: 'LinkedIn',
    followers: '50K+',
    color: 'hover:bg-blue-600 hover:text-white',
    href: 'https://linkedin.com/in/tarikbenlakhdar',
  },
  {
    icon: Instagram,
    name: 'Instagram',
    followers: '100K+',
    color: 'hover:bg-pink-600 hover:text-white',
    href: 'https://instagram.com/tarikbenlakhdar',
  },
  {
    icon: Twitter,
    name: 'Twitter',
    followers: '25K+',
    color: 'hover:bg-blue-400 hover:text-white',
    href: 'https://twitter.com/tarikbenlakhdar',
  },
  {
    icon: MessageCircle,
    name: 'WhatsApp',
    followers: 'Direct',
    color: 'hover:bg-green-600 hover:text-white',
    href: 'https://wa.me/33123456789',
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simuler l'envoi du formulaire
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Ici vous pouvez ajouter la logique d'envoi réelle
    console.log('Form submitted:', formData)
    
    setIsSubmitting(false)
    setFormData({ name: '', email: '', company: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-white" aria-labelledby="contact-title">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-slate-100 text-slate-800 px-4 py-2 text-sm font-semibold rounded-full">
            Prenons contact
          </Badge>
          <h2 id="contact-title" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
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
                <Send className="mr-3 w-6 h-6 text-blue-600" aria-hidden="true" />
                Démarrons la conversation
              </CardTitle>
              <CardDescription className="text-slate-600">
                Partagez-moi votre projet et vos objectifs. Je vous recontacte sous 24h.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Prénom & Nom
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600 rounded-lg h-12"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email professionnel
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@entreprise.com"
                      className="bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600 rounded-lg h-12"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                    Entreprise & Poste
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="CEO chez TechCorp"
                    className="bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600 rounded-lg h-12"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Votre projet
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Décrivez votre projet, vos objectifs et comment je peux vous aider..."
                    rows={5}
                    className="bg-white border-slate-300 text-slate-900 focus:border-blue-600 focus:ring-blue-600 rounded-lg resize-none"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-2 w-5 h-5" aria-hidden="true" />
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
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
                  <Target className="mr-3 w-6 h-6" aria-hidden="true" />
                  Autres moyens de contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethodsData.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                        <contact.icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-white/80 text-sm">{contact.value}</p>
                      </div>
                    </div>
                    {contact.href && (
                      <Link
                        href={contact.href}
                        className="opacity-0 group-hover:opacity-100 transition-all"
                        aria-label={contact.action}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-white border border-gray-200 rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 flex items-center">
                  <Heart className="mr-3 w-5 h-5 text-red-500" aria-hidden="true" />
                  Suivez mon actualité
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialMediaData.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center space-y-3 p-4 rounded-xl border border-gray-200 ${social.color} transition-all duration-300 group text-slate-700`}
                      aria-label={`Suivre sur ${social.name}`}
                    >
                      <social.icon className="w-6 h-6" aria-hidden="true" />
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
  )
} 