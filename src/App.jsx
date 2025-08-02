import './App.css'
import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardContent } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { CheckCircle, Star, Clock, Shield, Users, TrendingUp, Calculator, DollarSign, Target, Zap, Instagram } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Importando as imagens
import pessoaPreocupada from './assets/pessoa_preocupada_financas.jpg'
import pessoaFeliz from './assets/pessoa_feliz_financas.jpg'
import casalOrganizando from './assets/casal_organizando_financas.jpg'
import calculadoraDinheiro from './assets/calculadora_dinheiro.jpg'
import calculadoraNotas from './assets/calculadora_notas.jpg'
import ebookGranaFlash from './assets/ebook_grana_flash.png'

function App() {
  const [email, setEmail] = useState('')
  const [socialProof, setSocialProof] = useState({ type: 'purchase', count: 2 })

  // Animação de prova social
  useEffect(() => {
    const messages = [
      { type: 'purchase', count: 2, text: 'pessoas compraram' },
      { type: 'purchase', count: 3, text: 'pessoas compraram' },
      { type: 'purchase', count: 5, text: 'pessoas compraram' },
      { type: 'viewing', count: 8, text: 'pessoas estão acessando esta página agora' },
      { type: 'viewing', count: 10, text: 'pessoas estão acessando esta página agora' },
      { type: 'viewing', count: 12, text: 'pessoas estão acessando esta página agora' }
    ]
    
    let currentIndex = 0
    const interval = setInterval(() => {
      setSocialProof(messages[currentIndex])
      currentIndex = (currentIndex + 1) % messages.length
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleCTA = () => {
    // Aqui seria integrado com o sistema de pagamento
    window.location.href = 'https://pay.hotmart.com/J101079087E?bid=1753888307531';
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-yellow-400 text-yellow-900 text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-2">
                ✨ Método Comprovado por Milhares de Pessoas
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Pare de Ver Seu 
                <span className="text-yellow-400"> Dinheiro Sumir</span> 
                <br className="hidden sm:block" />
                Sem Saber Como
              </h1>
              
              <p className="text-lg lg:text-2xl text-green-100 leading-relaxed">
                Descubra o método simples que já ajudou milhares de pessoas a organizarem suas finanças em apenas 
                <span className="font-bold text-yellow-400"> 7 dias</span> - sem planilhas complicadas ou termos técnicos
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleCTA}
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  QUERO ORGANIZAR MINHAS FINANÇAS
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-green-300" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-green-300" />
                  <span>+10.000 pessoas transformadas</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative max-w-md mx-auto">
                <img 
                  src={ebookGranaFlash} 
                  alt="E-book Organize suas Finanças em 7 Dias" 
                  className="w


