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
      { type: 'viewing', count: 12, text: 'pessoas estão acessando esta página agora' },
      { type: 'viewing', count: 15, text: 'pessoas estão acessando esta página agora' }
    ]

    let index = 0
    const interval = setInterval(() => {
      setSocialProof(messages[index])
      index = (index + 1) % messages.length
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100">
      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Conteúdo Principal */}
            <motion.div 
              className="flex-1 text-center lg:text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 sm:mb-6 bg-yellow-400 text-gray-900 px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm font-semibold">
                Método Comprovado por Milhares de Pessoas
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Pare de Ver Seu <span className="text-yellow-500">Dinheiro </span>
                <span className="text-yellow-500">Sumir</span> Sem Saber Como
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                Descubra o método simples que já ajudou milhares de pessoas a organizarem suas finanças em apenas <span className="font-bold text-yellow-600">7 dias</span> - sem planilhas complicadas ou termos técnicos
              </p>
              
              <a href="https://pay.hotmart.com/J101079087E" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 sm:gap-3 mx-auto lg:mx-0 leading-tight"
                >
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                  <span className="whitespace-nowrap">QUERO ORGANIZAR MINHAS FINANÇAS</span>
                </Button>
              </a>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-8 mt-6 sm:mt-8 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">+10.000 pessoas transformadas</span>
                </div>
              </div>
            </motion.div>

            {/* Imagem do E-book */}
            <motion.div 
              className="flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <img 
                  src={ebookGranaFlash} 
                  alt="E-book Organize suas Finanças em 7 Dias" 
                  className="w-64 sm:w-80 lg:w-96 h-auto shadow-2xl rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Problemas */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Você se reconhece em alguma dessas situações?
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                image: pessoaPreocupada,
                title: "Dinheiro sumindo sem explicação",
                description: "Você ganha bem, mas no final do mês sempre sobra mais mês do que dinheiro"
              },
              {
                image: calculadoraDinheiro,
                title: "Contas desorganizadas",
                description: "Vive esquecendo de pagar boletos e acumulando juros desnecessários"
              },
              {
                image: casalOrganizando,
                title: "Sem controle dos gastos",
                description: "Não sabe para onde vai o seu dinheiro e vive no vermelho"
              }
            ].map((problem, index ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <img 
                      src={problem.image} 
                      alt={problem.title}
                      className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
                    />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {problem.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA 2 - Após Problemas */}
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="https://pay.hotmart.com/J101079087E" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 sm:gap-3 mx-auto leading-tight"
              >
                <Target className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">QUERO ORGANIZAR MINHAS FINANÇAS</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Seção Método */}
      <section className="py-12 sm:py-16 lg:py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Sua Nova Vida Financeira <span className="text-yellow-300">Começa Agora</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
              Não espere mais. Sua situação financeira não vai se resolver sozinha. Mas com o método certo, em apenas 
              7 dias você pode virar o jogo.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
            {[
              {
                icon: DollarSign,
                title: "Método Simples",
                subtitle: "Sem complicação"
              },
              {
                icon: Clock,
                title: "Apenas 7 Dias",
                subtitle: "Resultados rápidos"
              },
              {
                icon: Shield,
                title: "Garantia Total",
                subtitle: "Risco zero"
              }
            ].map((feature, index ) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-yellow-400 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-900" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-green-100">
                  {feature.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA 3 - Após Método */}
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="https://pay.hotmart.com/J101079087E" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 sm:gap-3 mx-auto leading-tight"
              >
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">QUERO ORGANIZAR MINHAS FINANÇAS</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Seção 7 Dias */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              O Que Você Vai Conseguir em Apenas 7 Dias
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transforme sua relação com o dinheiro seguindo um método simples e comprovado
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                day: "Dia 1-2",
                title: "Organize suas contas",
                description: "Aprenda a mapear todas as suas receitas e despesas de forma simples"
              },
              {
                day: "Dia 3-4", 
                title: "Elimine vazamentos",
                description: "Descubra onde seu dinheiro está sumindo e como parar isso imediatamente"
              },
              {
                day: "Dia 5-6",
                title: "Crie seu sistema",
                description: "Monte um sistema de controle que funciona no piloto automático"
              },
              {
                day: "Dia 7",
                title: "Planeje seu futuro",
                description: "Estabeleça metas claras e um plano para alcançar seus objetivos"
              },
              {
                day: "Bônus",
                title: "Emergências sob controle",
                description: "Nunca mais seja pego de surpresa por gastos inesperados"
              },
              {
                day: "Resultado",
                title: "Paz financeira",
                description: "Durma tranquilo sabendo que suas finanças estão organizadas"
              }
            ].map((benefit, index ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-500">
                  <CardContent className="p-4 sm:p-6">
                    <Badge className="mb-3 sm:mb-4 bg-green-100 text-green-800 text-xs sm:text-sm">
                      {benefit.day}
                    </Badge>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA 4 - Após 7 Dias */}
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="https://pay.hotmart.com/J101079087E" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 sm:gap-3 mx-auto leading-tight"
              >
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">QUERO ORGANIZAR MINHAS FINANÇAS</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Veja o Que Quem Já Aplicou o Método Está Dizendo
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Maria Silva",
                role: "Professora",
                text: "Em 7 dias consegui organizar tudo! Agora sei exatamente para onde vai cada centavo.",
                rating: 5
              },
              {
                name: "João Santos", 
                role: "Empresário",
                text: "Método simples e eficaz. Finalmente tenho controle total das minhas finanças.",
                rating: 5
              },
              {
                name: "Ana Costa",
                role: "Enfermeira", 
                text: "Nunca pensei que seria tão fácil. Recomendo para todos os meus amigos!",
                rating: 5
              }
            ].map((testimonial, index ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA 5 - Após Depoimentos */}
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="https://pay.hotmart.com/J101079087E" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 text-base sm:text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center gap-2 sm:gap-3 mx-auto leading-tight"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                <span className="whitespace-nowrap">QUERO ORGANIZAR MINHAS FINANÇAS</span>
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Seção de Garantia */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-green-200 shadow-xl">
              <CardContent className="p-6 sm:p-8 lg:p-12 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                </div>
                
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                  Garantia Total de Satisfação
                </h2>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                  Estamos tão confiantes que o método vai funcionar para você que oferecemos <span className="font-bold text-green-600">garantia total</span>. Se em 7 dias você não estiver satisfeito(a ) com os resultados, <span className="font-bold text-green-600">devolvemos 100% do seu dinheiro</span>.
                </p>
                
                <div className="bg-green-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8">
                  <p className="text-base sm:text-lg font-semibold text-green-800">
                    Você não tem nada a perder, apenas uma vida financeira organizada para ganhar!
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 lg:py-20 bg-yellow-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
              Comece Sua Transformação Financeira Agora
            </h2>
            
            <a href="https://pay.hotmart.com/J101079087E" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 sm:py-6 px-8 sm:px-12 text-lg sm:text-xl rounded-full shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3 sm:gap-4 mx-auto mb-6 sm:mb-8 leading-tight"
              >
                <Zap className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                <span className="whitespace-nowrap">QUERO ORGANIZAR MINHAS FINANÇAS</span>
              </Button>
            </a>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span>Suporte completo</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Grana Flash</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transformando vidas através da educação financeira. 
              Mais de 10.000 pessoas já organizaram suas finanças com nosso método.
            </p>
          </div>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <a 
              href="https://instagram.com/granaflash" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span>@granaflash</span>
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Grana Flash. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Componente de Prova Social Flutuante */}
      <AnimatePresence mode="wait">
        <motion.div
          key={socialProof.type + socialProof.count}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 bg-white border border-green-200 rounded-lg shadow-lg p-3 sm:p-4 max-w-xs"
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${socialProof.type === 'purchase' ? 'bg-green-500' : 'bg-blue-500'} animate-pulse flex-shrink-0`}></div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900">
                {socialProof.count} {socialProof.text}
              </p>
              <p className="text-xs text-gray-500">
                {socialProof.type === 'purchase' ? 'Há poucos minutos' : 'Agora mesmo'}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
   )
}

export default App