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
        <div className="relative container mx-auto px-4 py-12 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div 
              className="space-y-6 lg:space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-yellow-400 text-yellow-900 text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-2 inline-block">
                ✨ Método Comprovado por Milhares de Pessoas
              </Badge>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Pare de Ver Seu{' '}
                <span className="text-yellow-400"> Dinheiro Sumir </span>{' '}
                Sem Saber Como
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-green-100 leading-relaxed">
                Descubra o método simples que já ajudou milhares de pessoas a organizarem suas finanças em apenas{' '}
                <span className="font-bold text-yellow-400">7 dias</span> - sem planilhas complicadas ou termos técnicos
              </p>
              
              <div className="flex flex-col gap-4">
                <Button 
                  onClick={handleCTA}
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-sm sm:text-base lg:text-lg px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                >
                  <Zap className="mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span className="text-center leading-tight">QUERO ORGANIZAR MINHAS FINANÇAS</span>
                </Button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 flex-shrink-0" />
                  <span>Garantia de 7 dias</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-300 flex-shrink-0" />
                  <span>+10.000 pessoas transformadas</span>
                </div>
              </div>
            </motion.div>
            
            {/* Imagem sempre visível com tamanhos responsivos */}
            <motion.div 
              className="relative mt-8 lg:mt-0 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-64 sm:w-80 lg:w-96">
                <img 
                  src={ebookGranaFlash} 
                  alt="E-book Organize suas Finanças em 7 Dias" 
                  className="w-full h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white text-green-800 p-3 sm:p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0" />
                    <div>
                      <div className="font-bold text-sm sm:text-base">Resultados em 7 dias</div>
                      <div className="text-xs sm:text-sm text-gray-600">Método comprovado</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção de Dores */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Você se reconhece em alguma dessas situações?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Se você respondeu "sim" para pelo menos uma dessas situações, este método foi feito para você
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              "O dinheiro some e você não sabe para onde foi",
              "As contas chegam e você sente um aperto no peito", 
              "Você evita olhar o extrato bancário",
              "Já tentou se organizar mas desistiu porque era muito complicado",
              "Sente vergonha da sua situação financeira",
              "Vive no vermelho mesmo ganhando um salário decente",
              "Tem medo de não conseguir pagar as contas do mês",
              "Gasta mais do que ganha sem perceber",
              "Não tem reserva de emergência"
            ].map((dor, index ) => (
              <motion.div
                key={index}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-red-50 border-l-4 border-red-400 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-lg sm:text-xl lg:text-2xl flex-shrink-0">😰</div>
                <p className="text-gray-800 font-medium text-sm sm:text-base">{dor}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-8 sm:mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img 
              src={pessoaPreocupada} 
              alt="Pessoa preocupada com finanças" 
              className="rounded-xl shadow-lg mx-auto max-w-md w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Seção de Agitação */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8">
              A Verdade Que Ninguém Te Conta Sobre Dinheiro
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              <p>
                Enquanto você não souber exatamente para onde seu dinheiro está indo, 
                <span className="font-bold text-yellow-300"> ele vai continuar sumindo </span>. 
                E a cada mês que passa, a situação só piora.
              </p>
              
              <p>
                As dívidas aumentam, o estresse cresce, e você se sente cada vez mais perdido(a). 
                <span className="font-bold"> Mas não é culpa sua.</span>
              </p>
              
              <p>
                Ninguém nunca te ensinou como lidar com dinheiro de verdade. Na escola, você aprendeu matemática, 
                mas não aprendeu a <span className="font-bold text-yellow-300">matemática da vida real</span>: 
                como fazer seu dinheiro durar até o fim do mês.
              </p>
              
              <div className="bg-red-800 p-4 sm:p-6 lg:p-8 rounded-xl mt-6 sm:mt-8">
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-300 mb-3 sm:mb-4">
                  ⏰ O tempo está passando...
                </p>
                <p className="text-sm sm:text-base lg:text-lg">
                  E a cada dia que você adia essa organização, mais dinheiro você perde, 
                  mais estresse você acumula, e mais difícil fica sair dessa situação.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Solução */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            {...fadeInUp}
          >
            <Badge className="bg-green-600 text-white text-sm sm:text-base lg:text-lg font-semibold px-4 py-2 sm:px-6 sm:py-3 mb-4 sm:mb-6 inline-block">
              🎯 A SOLUÇÃO QUE VOCÊ ESTAVA PROCURANDO
            </Badge>
            
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Finalmente, Um Método Que{' '}
              <span className="text-green-600">Funciona de Verdade</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Apresentamos o <span className="font-bold text-green-600">"Organize Suas Finanças em 7 Dias"</span> - 
              o método que já transformou a vida financeira de milhares de pessoas, sem complicação, 
              sem planilhas difíceis, sem termos técnicos.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={casalOrganizando} 
                alt="Casal organizando finanças" 
                className="rounded-2xl shadow-xl w-full"
              />
            </motion.div>
            
            <motion.div 
              className="space-y-4 sm:space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                Em apenas 7 dias, você vai:
              </h3>
              
              {[
                { icon: Target, text: "Descobrir exatamente para onde seu dinheiro está indo" },
                { icon: Zap, text: "Eliminar os vazamentos que estão sugando sua renda" },
                { icon: Calculator, text: "Criar um sistema simples de controle que funciona" },
                { icon: TrendingUp, text: "Sentir alívio e controle sobre suas finanças" },
                { icon: Shield, text: "Dormir tranquilo(a) sabendo que suas contas estão organizadas" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
                    <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base lg:text-lg">{item.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção dos 7 Dias */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              O Que Você Vai Conseguir em Apenas{' '}
              <span className="text-green-600">7 Dias</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Um passo por dia para transformar completamente sua relação com o dinheiro
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                dia: "DIA 1",
                titulo: "Descubra para onde seu dinheiro está indo",
                descricao: "E se assuste com o que vai encontrar - a maioria das pessoas perde mais de 30% da renda sem perceber",
                icon: "🔍"
              },
              {
                dia: "DIA 2", 
                titulo: "Elimine os 'ladrões silenciosos'",
                descricao: "Identifique e corte os gastos que estão roubando sua renda todos os meses",
                icon: "✂️"
              },
              {
                dia: "DIA 3",
                titulo: "Crie seu primeiro orçamento que funciona",
                descricao: "Sem planilhas complicadas - apenas um método simples e eficaz",
                icon: "📊"
              },
              {
                dia: "DIA 4",
                titulo: "Monte sua reserva de emergência",
                descricao: "Mesmo com pouco dinheiro, você vai aprender a criar sua segurança financeira",
                icon: "🛡️"
              },
              {
                dia: "DIA 5",
                titulo: "Organize suas dívidas",
                descricao: "Crie um plano realista para quitá-las de uma vez por todas",
                icon: "📋"
              },
              {
                dia: "DIA 6",
                titulo: "Automatize suas finanças",
                descricao: "Configure tudo para nunca mais se preocupar com organização financeira",
                icon: "⚙️"
              },
              {
                dia: "DIA 7",
                titulo: "Celebre sua nova vida financeira",
                descricao: "Veja como sua vida mudou e planeje seu futuro próspero",
                icon: "🎉"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-200">
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{item.icon}</div>
                    <Badge className="bg-green-600 text-white mb-3 sm:mb-4 text-xs sm:text-sm">{item.dia}</Badge>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{item.titulo}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.descricao}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Prova Social */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Veja o Que Quem Já Aplicou o Método Está Dizendo
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Mais de 10.000 pessoas já transformaram suas vidas financeiras
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
            {[
              {
                nome: "Maria Silva",
                profissao: "Professora",
                depoimento: "Em 7 dias consegui identificar onde estava perdendo R$ 800 por mês! Agora tenho controle total das minhas finanças.",
                estrelas: 5
              },
              {
                nome: "João Santos", 
                profissao: "Vendedor",
                depoimento: "Estava devendo R$ 15.000 e sem esperança. O método me ajudou a organizar tudo e já quitei 60% das dívidas!",
                estrelas: 5
              },
              {
                nome: "Ana Costa",
                profissao: "Enfermeira", 
                depoimento: "Finalmente consegui criar minha reserva de emergência. Me sinto muito mais segura financeiramente.",
                estrelas: 5
              }
            ].map((depoimento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(depoimento.estrelas)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-3 sm:mb-4 italic text-sm sm:text-base">"{depoimento.depoimento}"</p>
                    <div>
                      <p className="font-bold text-gray-900 text-sm sm:text-base">{depoimento.nome}</p>
                      <p className="text-gray-600 text-xs sm:text-sm">{depoimento.profissao}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Urgência */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8">
              Por Que Você Precisa Agir{' '}
              <span className="text-yellow-300">HOJE</span>
            </h2>
            
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              <p>
                Cada dia que você adia essa decisão é mais dinheiro que vai embora sem você perceber. 
                Enquanto você está lendo isso, provavelmente já gastou dinheiro em coisas que nem lembra.
              </p>
              
              <div className="bg-red-800 p-4 sm:p-6 lg:p-8 rounded-xl">
                <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <Clock className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-300 flex-shrink-0" />
                  <p className="text-lg sm:text-xl lg:text-2xl font-bold text-yellow-300">
                    Tempo é Dinheiro!
                  </p>
                </div>
                <p className="text-sm sm:text-base lg:text-lg">
                  O método funciona, mas só se você aplicar. E quanto mais você esperar, 
                  mais difícil fica sair do buraco financeiro.
                </p>
              </div>
              
              <p className="text-lg sm:text-xl lg:text-2xl font-bold mt-6 sm:mt-8">
                Não deixe para amanhã o que pode mudar sua vida hoje.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seção de Garantia */}
      <section className="py-12 sm:py-16 lg:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-xl border-4 border-green-200">
              <div className="flex items-center justify-center mb-4 sm:mb-6">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 lg:h-16 lg:w-16 text-green-600" />
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Garantia Total de Satisfação
              </h2>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8">
                Estamos tão confiantes que o método vai funcionar para você que oferecemos{' '}
                <span className="font-bold text-green-600">garantia total</span>. 
                Se em 7 dias você não estiver satisfeito(a) com os resultados,{' '}
                <span className="font-bold">devolvemos 100% do seu dinheiro</span>.
              </p>
              
              <div className="bg-green-100 p-4 sm:p-6 rounded-xl">
                <p className="text-sm sm:text-base lg:text-lg font-semibold text-green-800">
                  Você não tem nada a perder, apenas uma vida financeira organizada para ganhar!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8">
              Sua Nova Vida Financeira{' '}
              <span className="text-yellow-400">Começa Agora</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-green-100 mb-6 sm:mb-8 leading-relaxed">
              Não espere mais. Sua situação financeira não vai se resolver sozinha. 
              Mas com o método certo, em apenas 7 dias você pode virar o jogo.
            </p>
            
            <div className="bg-white/10 p-4 sm:p-6 lg:p-8 rounded-2xl mb-6 sm:mb-8">
              <div className="grid md:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div>
                  <DollarSign className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-400 mx-auto mb-2" />
                  <p className="font-bold text-sm sm:text-base">Método Simples</p>
                  <p className="text-xs sm:text-sm text-green-200">Sem complicação</p>
                </div>
                <div>
                  <Clock className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-400 mx-auto mb-2" />
                  <p className="font-bold text-sm sm:text-base">Apenas 7 Dias</p>
                  <p className="text-xs sm:text-sm text-green-200">Resultados rápidos</p>
                </div>
                <div>
                  <Shield className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-yellow-400 mx-auto mb-2" />
                  <p className="font-bold text-sm sm:text-base">Garantia Total</p>
                  <p className="text-xs sm:text-sm text-green-200">Risco zero</p>
                </div>
              </div>
            </div>
            
            <Button 
              onClick={handleCTA}
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 font-bold text-sm sm:text-base lg:text-lg xl:text-xl px-6 py-4 sm:px-8 sm:py-5 lg:px-12 lg:py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 mb-4 sm:mb-6 w-full sm:w-auto"
            >
              <Zap className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 flex-shrink-0" />
              <span className="text-center leading-tight">SIM, QUERO ORGANIZAR MINHAS FINANÇAS</span>
            </Button>
            
            <p className="text-green-200 text-xs sm:text-sm">
              ✅ Acesso imediato • ✅ Garantia de 7 dias • ✅ Suporte completo
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Grana Flash</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Transformando vidas através da educação financeira. 
              Mais de 10.000 pessoas já organizaram suas finanças com nossos métodos.
            </p>
            
            <div className="mt-4 sm:mt-6">
              <a 
                href="https://instagram.com/granaflash" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-300"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">@granaflash</span>
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-gray-400 text-xs sm:text-sm">
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
          className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-50 bg-white border border-green-200 rounded-lg shadow-lg p-3 sm:p-4 max-w-xs"
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