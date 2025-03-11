import React from 'react';
import { Globe2, Code2, Users, Brain, Cpu, ArrowRight, Database, Lock, Cloud, Smartphone, Palette, Server } from 'lucide-react';

function TimelineItem({ icon: Icon, title, description, details }: { 
  icon: React.ElementType, 
  title: string, 
  description: string,
  details: string[]
}) {
  return (
    <div className="flex gap-4 items-start bg-white p-6 rounded-lg shadow-lg">
      <div className="bg-blue-500 p-2 rounded-full text-white shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <ArrowRight className="text-blue-500 shrink-0" size={16} />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function FeatureCard({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string 
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            La Evolución del Desarrollo Web
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Un viaje exhaustivo a través de la historia, el presente y el futuro del desarrollo web, explorando su impacto revolucionario en la tecnología, la sociedad y la forma en que vivimos.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Importancia Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Importancia del Desarrollo Web</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Globe2}
              title="Conectividad Global"
              description="La web ha revolucionado la comunicación global, permitiendo conexiones instantáneas entre personas, empresas y culturas de todo el mundo, transformando fundamentalmente cómo interactuamos y hacemos negocios."
            />
            <FeatureCard 
              icon={Code2}
              title="Innovación Tecnológica"
              description="El desarrollo web impulsa constantemente nuevas tecnologías y metodologías, desde frameworks modernos hasta arquitecturas distribuidas, estableciendo nuevos estándares en la industria tecnológica."
            />
            <FeatureCard 
              icon={Database}
              title="Acceso a la Información"
              description="Ha democratizado el conocimiento, permitiendo que cualquier persona con conexión a internet pueda acceder a vastas cantidades de información y recursos educativos de forma instantánea."
            />
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Evolución Histórica Detallada</h2>
          <div className="space-y-8">
            <TimelineItem 
              icon={Globe2}
              title="1989-1990: Nacimiento de la Web"
              description="Tim Berners-Lee revoluciona la comunicación global con la creación de la World Wide Web en el CERN."
              details={[
                "Desarrollo del primer navegador web y servidor",
                "Creación del protocolo HTTP y el lenguaje HTML",
                "Implementación del primer servidor web en el CERN",
                "Establecimiento de los URLs para la identificación de recursos"
              ]}
            />
            <TimelineItem 
              icon={Code2}
              title="1995-2000: La Era del HTML Estático"
              description="Período fundamental en el desarrollo de estándares web y la expansión comercial de Internet."
              details={[
                "Surgimiento de JavaScript (1995) para la interactividad del lado del cliente",
                "Introducción de CSS para la separación de contenido y diseño",
                "Nacimiento de los primeros CMS y herramientas de desarrollo web",
                "Boom de las empresas .com y la comercialización de la web"
              ]}
            />
            <TimelineItem 
              icon={Users}
              title="2004-2009: Web 2.0 y Redes Sociales"
              description="La web se transforma en una plataforma interactiva y social."
              details={[
                "Surgimiento de grandes plataformas sociales como Facebook y Twitter",
                "Desarrollo de AJAX para actualizaciones dinámicas de contenido",
                "Popularización de blogs y contenido generado por usuarios",
                "Inicio de la era de las aplicaciones web interactivas"
              ]}
            />
            <TimelineItem 
              icon={Smartphone}
              title="2010-2015: Era Móvil y Responsive"
              description="La web se adapta a la revolución móvil y nuevos patrones de diseño."
              details={[
                "Adopción masiva del diseño responsive para múltiples dispositivos",
                "Surgimiento de frameworks front-end como Angular y React",
                "Evolución de HTML5 y CSS3 con nuevas capacidades",
                "Optimización para velocidad y rendimiento móvil"
              ]}
            />
            <TimelineItem 
              icon={Cloud}
              title="2015-2020: Cloud y SPAs"
              description="La nube y las aplicaciones de página única transforman el desarrollo."
              details={[
                "Adopción masiva de servicios cloud y arquitecturas serverless",
                "Popularización de SPAs y frameworks modernos",
                "Desarrollo de PWAs para experiencias móviles mejoradas",
                "Evolución de herramientas de desarrollo y DevOps"
              ]}
            />
            <TimelineItem 
              icon={Brain}
              title="2020-Presente: IA y Web 3.0"
              description="La web evoluciona con inteligencia artificial y nuevas tecnologías."
              details={[
                "Integración de IA y aprendizaje automático en aplicaciones web",
                "Desarrollo de aplicaciones web descentralizadas (dApps)",
                "Adopción de tecnologías blockchain y smart contracts",
                "Evolución hacia experiencias web más personalizadas e inteligentes"
              ]}
            />
          </div>
        </section>

        {/* Impact Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Impacto en la Sociedad y la Industria</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Transformación Social</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Educación Digital</h4>
                  <p className="text-gray-600 mb-4">
                    La democratización del conocimiento ha revolucionado la educación tradicional:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Plataformas de e-learning accesibles globalmente</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Recursos educativos abiertos y MOOCs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Aprendizaje adaptativo y personalizado</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Economía Digital</h4>
                  <p className="text-gray-600 mb-4">
                    Transformación radical de los modelos de negocio:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Surgimiento del e-commerce y marketplaces digitales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Nuevas formas de trabajo remoto y colaboración</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Economía de plataformas y servicios digitales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Impacto en Desarrolladores</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Evolución Profesional</h4>
                  <p className="text-gray-600 mb-4">
                    El papel del desarrollador web ha evolucionado significativamente:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Especialización en diferentes áreas (front-end, back-end, full-stack)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Adopción de metodologías ágiles y DevOps</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Enfoque en seguridad y rendimiento</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Herramientas y Tecnologías</h4>
                  <p className="text-gray-600 mb-4">
                    Evolución constante del stack tecnológico:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Frameworks modernos y bibliotecas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Herramientas de automatización y testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="text-blue-500" size={16} />
                      <span>Integración continua y despliegue continuo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Technologies */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Tecnologías Emergentes y Futuro</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Computación Cuántica</h3>
              <p className="text-gray-600 mb-6">
                La computación cuántica promete revolucionar el desarrollo web mediante:
              </p>
              <ul className="space-y-4">
                {[
                  "Criptografía cuántica para seguridad web inviolable",
                  "Optimización cuántica de algoritmos y bases de datos",
                  "Procesamiento masivo de datos en tiempo real",
                  "Simulaciones complejas directamente en el navegador",
                  "Nuevos paradigmas de programación cuántica"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRight className="text-blue-500" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Web 3.0 y Más Allá</h3>
              <p className="text-gray-600 mb-6">
                El futuro de la web incluye tecnologías revolucionarias:
              </p>
              <ul className="space-y-4">
                {[
                  "Inteligencia artificial y aprendizaje automático integrado",
                  "Realidad virtual y aumentada en el navegador",
                  "Internet de las cosas (IoT) y web descentralizada",
                  "Computación edge y fog para mejor rendimiento",
                  "Interfaces cerebro-computadora y web neuronal"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRight className="text-blue-500" size={16} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Technologies and Tools */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Tecnologías y Herramientas Actuales</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Palette className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Frontend</h3>
              <ul className="space-y-2">
                {[
                  "React, Vue, Angular para SPAs",
                  "TypeScript para tipado estático",
                  "Tailwind CSS y Styled Components",
                  "WebAssembly para alto rendimiento",
                  "Testing con Jest y Cypress"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRight className="text-blue-500" size={16} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Server className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Backend</h3>
              <ul className="space-y-2">
                {[
                  "Node.js y Deno para JavaScript",
                  "GraphQL y REST APIs",
                  "Microservicios y Serverless",
                  "Contenedores y Kubernetes",
                  "Bases de datos NoSQL y NewSQL"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRight className="text-blue-500" size={16} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lock className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Seguridad</h3>
              <ul className="space-y-2">
                {[
                  "HTTPS y TLS 1.3",
                  "OAuth 2.0 y OpenID Connect",
                  "WAF y protección DDoS",
                  "Seguridad en APIs y JWT",
                  "Auditorías y pentesting"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ArrowRight className="text-blue-500" size={16} />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Evolución del Desarrollo Web</p>
        </div>
      </footer>
    </div>
  );
}

export default App;