import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { 
  GraduationCap, 
  Lightbulb, 
  Award, 
  ArrowRightLeft, 
  FileText, 
  Users, 
  Download, 
  Edit, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Globe,
  HelpCircle,
  Rocket,
  Heart,
  Factory,
  CheckCircle,
  Calendar
} from 'lucide-react'
import './App.css'

// Importar imágenes
import logoUDD from './assets/logo-udd.jpg'
import logoPaisDigital from './assets/logo-pais-digital.jpg'
import investigacionLab from './assets/investigacion-lab.jpg'
import colaboracion from './assets/colaboracion.jpeg'
import proceso from './assets/proceso.jpg'

function App() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header 
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-red-600 text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute inset-0 bg-black/20"
          style={{ y }}
        />
        
        <div className="relative container mx-auto px-6 py-16 lg:py-24">
          <motion.div 
            className="flex justify-center items-center mb-8 space-x-8"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <motion.img 
              src={logoUDD} 
              alt="Logo UDD" 
              className="h-16 lg:h-20 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.div 
              className="text-4xl lg:text-5xl font-bold text-white"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              +
            </motion.div>
            <motion.img 
              src={logoPaisDigital} 
              alt="Logo Fundación País Digital" 
              className="h-16 lg:h-20 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 leading-tight"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Doctorado en Ingeniería Aplicada
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-blue-200">
              UDD + País Digital
            </span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl lg:text-3xl text-center mb-8 opacity-90 max-w-4xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Invitan a empresas a presentar desafíos para proyectos de tesis doctoral
          </motion.h2>
          
          <motion.div 
            className="text-center"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <motion.button
              onClick={() => scrollToSection('formulario')}
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center space-x-2 shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Rocket className="w-5 h-5" />
              <span>Presenta tu desafío</span>
            </motion.button>
          </motion.div>
        </div>
      </motion.header>

      {/* Descripción breve */}
      <motion.section 
        id="descripcion"
        className="py-20 bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible.descripcion ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.descripcion ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              ¿Qué es el Doctorado en Ingeniería Aplicada?
            </motion.h2>
            
            <motion.p 
              className="text-lg lg:text-xl text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.descripcion ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Un programa de 4 años diseñado para formar doctores capaces de generar conocimiento con impacto en contextos académicos, industriales y públicos. A través de esta convocatoria, buscamos conectar los desafíos reales de las empresas con la investigación de frontera, creando un puente entre la academia y la industria.
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg border border-blue-200"
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible.descripcion ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 mx-auto">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-3">
                  Ingeniería en Sistemas de Salud y Biomedicina
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Soluciones innovadoras para sistemas de salud, medicina personalizada y biotecnología.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg border border-green-200"
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible.descripcion ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-600 text-white rounded-full mb-4 mx-auto">
                  <Factory className="w-8 h-8" />
                </div>
                <h3 className="text-xl lg:text-2xl font-bold text-green-800 mb-3">
                  Ingeniería en Sistemas Productivos y Ambientales
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Optimización de procesos industriales, sostenibilidad y transformación digital.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Cómo funciona */}
      <motion.section 
        id="proceso"
        className="py-20 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={isVisible.proceso ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.proceso ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            ¿Cómo funciona?
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.proceso ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
                {[
                  {
                    number: 1,
                    title: "Formulario Simple",
                    description: "La empresa completa un formulario describiendo su problema o desafío. No se requiere conocimiento técnico profundo.",
                    color: "bg-blue-600"
                  },
                  {
                    number: 2,
                    title: "Co-construcción Académica",
                    description: "Un comité académico de la UDD revisa y transforma el problema en un proyecto de tesis doctoral con rigor científico.",
                    color: "bg-red-600"
                  },
                  {
                    number: 3,
                    title: "Desarrollo del Proyecto",
                    description: "Codirección entre un académico UDD y un profesional de la empresa para asegurar relevancia y aplicabilidad.",
                    color: "bg-green-600"
                  }
                ].map((step, index) => (
                  <motion.div 
                    key={step.number}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, x: -30 }}
                    animate={isVisible.proceso ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                  >
                    <motion.div 
                      className={`${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {step.number}
                    </motion.div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Beneficios para empresas */}
      <motion.section 
        id="beneficios"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={isVisible.beneficios ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.beneficios ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Beneficios para tu Empresa
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: GraduationCap,
                title: "Capital Humano Avanzado",
                description: "Acceso a estudiantes de doctorado altamente calificados dedicados a resolver tus problemas estratégicos.",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200"
              },
              {
                icon: Lightbulb,
                title: "Soluciones Innovadoras",
                description: "Investigación de vanguardia y soluciones basadas en el conocimiento más avanzado.",
                color: "text-red-600",
                bgColor: "bg-red-50",
                borderColor: "border-red-200"
              },
              {
                icon: Award,
                title: "Visibilidad y Posicionamiento",
                description: "Reconocimiento como socio estratégico en el ecosistema de innovación nacional.",
                color: "text-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200"
              },
              {
                icon: ArrowRightLeft,
                title: "Transferencia de Conocimiento",
                description: "Resultados de investigación directamente aplicables, generando impacto tangible.",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200"
              }
            ].map((benefit, index) => (
              <motion.div 
                key={benefit.title}
                className={`${benefit.bgColor} ${benefit.borderColor} p-8 rounded-xl shadow-lg border-2 hover:shadow-2xl transition-all duration-300`}
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible.beneficios ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div 
                  className={`${benefit.color} text-5xl mb-6 flex justify-center`}
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <benefit.icon className="w-12 h-12" />
                </motion.div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Formulario */}
      <motion.section 
        id="formulario"
        className="py-20 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={isVisible.formulario ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible.formulario ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Presenta tu Desafío
            </motion.h2>
            
            <motion.div 
              className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible.formulario ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible.formulario ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-6 rounded-2xl inline-block mb-6">
                  <Download className="text-blue-600 text-4xl w-12 h-12 mx-auto mb-2" />
                  <p className="text-gray-700 font-semibold text-lg">Descarga el formulario</p>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-center text-gray-600 mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0 }}
                animate={isVisible.formulario ? { opacity: 1 } : {}}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Descarga y completa nuestro formulario para describir el problema o desafío que enfrenta tu empresa. 
                Una vez completado, envíalo a: <strong className="text-blue-600">doctorado.ingenieria@udd.cl</strong>
              </motion.p>
              
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isVisible.formulario ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.a
                  href="/Formulario_Empresas.docx"
                  download="Formulario_Empresas_UDD_PaisDigital.docx"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg inline-flex items-center justify-center space-x-2 shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Formulario Word</span>
                </motion.a>
              </motion.div>
              
              <motion.div 
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                animate={isVisible.formulario ? { opacity: 1 } : {}}
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <p className="text-sm text-gray-500">
                  📧 Envía el formulario completado a: <span className="font-semibold text-gray-700">doctorado.ingenieria@udd.cl</span>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Cronograma */}
      <motion.section 
        id="cronograma"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={isVisible.cronograma ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.cronograma ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Plazos y Fechas Clave
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  title: "Lanzamiento del llamado público a empresas",
                  date: "Octubre 2025",
                  description: "Inicio oficial de la convocatoria a empresas",
                  color: "bg-green-600"
                },
                {
                  title: "Recepción de desafíos de empresas",
                  date: "Octubre - Noviembre 2025",
                  description: "Período para que las empresas presenten sus problemas",
                  color: "bg-yellow-600"
                },
                {
                  title: "Proceso de validación y co-construcción",
                  date: "Diciembre 2025",
                  description: "Validación académica y transformación en proyectos doctorales",
                  color: "bg-orange-600"
                },
                {
                  title: "Inicio de los proyectos de tesis",
                  date: "Marzo 2026",
                  description: "Comienzo oficial de los proyectos de investigación doctoral",
                  color: "bg-red-600"
                }
              ].map((item, index) => (
                <motion.div 
                  key={item.title}
                  className="relative pl-12 pb-8"
                  initial={{ opacity: 0, x: -50 }}
                  animate={isVisible.cronograma ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
                >
                  <motion.div 
                    className={`absolute left-0 top-2 w-6 h-6 ${item.color} rounded-full shadow-lg`}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  {index < 3 && (
                    <div className="absolute left-3 top-8 w-0.5 h-16 bg-gray-300" />
                  )}
                  
                  <motion.div 
                    className="bg-gray-50 p-6 rounded-lg shadow-md ml-6"
                    whileHover={{ scale: 1.02, x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-red-600 font-bold text-lg mb-2">
                      {item.date}
                    </p>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contacto */}
      <motion.section 
        id="contacto"
        className="py-20 bg-gray-800 text-white"
        initial={{ opacity: 0 }}
        animate={isVisible.contacto ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible.contacto ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Contacto y Soporte
          </motion.h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isVisible.contacto ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-blue-300">
                  Información del Programa
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Mail, text: "doctorado.ingenieria@udd.cl", color: "text-blue-400" },
                    { icon: Phone, text: "+56 2 2XXX XXXX", color: "text-blue-400" },
                    { icon: MapPin, text: "Av. Plaza 680, Las Condes, Santiago", color: "text-blue-400" }
                  ].map((contact, index) => (
                    <motion.div 
                      key={contact.text}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -30 }}
                      animate={isVisible.contacto ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                      whileHover={{ x: 10 }}
                    >
                      <contact.icon className={`${contact.color} w-6 h-6`} />
                      <p className="text-lg">{contact.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isVisible.contacto ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-green-300">
                  Soporte Técnico
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: HelpCircle, text: "soporte@udd.cl", color: "text-green-400" },
                    { icon: Clock, text: "Lunes a Viernes, 9:00 - 18:00", color: "text-green-400" },
                    { icon: Globe, text: "www.ingenieria.udd.cl/doctorado", color: "text-green-400" }
                  ].map((support, index) => (
                    <motion.div 
                      key={support.text}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 30 }}
                      animate={isVisible.contacto ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                      whileHover={{ x: -10 }}
                    >
                      <support.icon className={`${support.color} w-6 h-6`} />
                      <p className="text-lg">{support.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        className="bg-gray-900 text-white py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              className="flex items-center mb-6 md:mb-0 space-x-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img src={logoUDD} alt="Logo UDD" className="h-12 rounded-lg" />
              <img src={logoPaisDigital} alt="Logo Fundación País Digital" className="h-12 rounded-lg" />
            </motion.div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-lg">
                © 2025 Universidad del Desarrollo & Fundación País Digital
              </p>
              <p className="text-gray-400 text-sm mt-1">
                Todos los derechos reservados
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}

export default App
