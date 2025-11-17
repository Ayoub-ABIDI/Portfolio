import React, { useState, useEffect } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Menu, X, Sun, Moon, MapPin, Phone, Award, Briefcase, GraduationCap, ChevronRight, Download, Calendar, Building2, Code2, Users, Trophy, Calendar as CalendarIcon } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'education', 'ieee', 'experience', 'projects', 'skills', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      title: "Intelligent Log Analysis Platform",
      description: "Full-stack enterprise solution with automated log parsing, real-time anomaly detection, and AI-powered correction recommendations using RAG techniques.",
      tech: ["Spring Boot", "Next.js", "AI", "RAG", "PostgreSQL", "Docker"],
      github: "https://github.com/Ayoub-ABIDI/LogMiner",
    },
    {
      title: "Deep Learning for EEG Classification",
      description: "Comparative study of ANN, CNN, and CNN-LSTM architectures for classifying epileptic patients based on EEG data with real-time Streamlit interface.",
      tech: ["PyTorch", "TensorFlow", "Signal Processing", "Streamlit", "CNN"],
      github: "https://github.com/Ayoub-ABIDI/-Study-of-Deep-Learning-Models-for-the-Classification-of-Epileptic-Patients",
    },
    {
      title: "AI for Mental Health Detection",
      description: "Dual-model system combining speech analysis and NLP for adolescent depression detection .",
      tech: ["PyTorch", "NLP", "CNN", "BERT", "Speech Processing"],
      github: "https://github.com/Ayoub-ABIDI",
    },
    {
      title: "ZEN Virtual Dressing",
      description: "3D avatar generation from body measurements using Conditional GANs and Poisson surface reconstruction.",
      tech: ["GANs", "PyTorch", "3D Reconstruction", "OpenCV"],
      github: "https://github.com/Ayoub-ABIDI",
    },
    {
      title: "Epileptic Seizure Prediction",
      description: "Seizure prediction aims to estimate how long until the next epileptic seizure from continuous EEG. Instead of classifying “preictal vs interictal”, we treat the problem as regression: the model predicts a continuous time-to-seizure (seconds or minutes).",
      tech: ["Python", "CNN", "Signal Processing", "TensorFlow"],
      github: "https://github.com/Ayoub-ABIDI/Seizure-Prediction-",
    },
    {
      title: "Credit Line Adjuster with RL",
      description: "Q-Learning agent for dynamic credit line adjustment reducing default rates by 23%.",
      tech: ["Python", "Reinforcement Learning", "Q-Learning", "Streamlit"],
      github: "https://github.com/Ayoub-ABIDI/Credit-Line-Adjuster",
    }
  ];

  const education = [
    {
      institution: "National Engineering School of Tunis (ENIT)",
      degree: "Master's Degree in Information Systems Technology",
      period: "Sep 2025 - Present",
      description: "Advanced studies in information systems, data processing, and technology management."
    },
    {
      institution: "National Engineering School of Tunis (ENIT)",
      degree: "National Engineering Degree in Telecommunications - Specialization in Data Science",
      period: "2023 - Present",
      description: "Comprehensive engineering program with focus on telecommunications and data science applications."
    },
    {
      institution: "Preparatory Institute for Engineering Studies of Tunis (IPEIT)",
      degree: "Pre-Engineering Studies - Physics and Chemistry Section",
      period: "2021 - 2023",
      description: "Intensive preparatory program for engineering schools with focus on physics and chemistry."
    },
    {
      institution: "Monji Slim High School",
      degree: "Baccalaureate Diploma – Experimental Sciences (Honors)",
      period: "June 2021",
      description: "Graduated with honors in experimental sciences track."
    }
  ];

  const ieeeJourney = [
    {
      role: "Vice Chair",
      organization: "IEEE ENIT Student Branch",
      period: "2025",
      description: "Leading one of the most active IEEE student branches in Tunisia, organizing technical events and workshops.",
      certificate: "https://drive.google.com/file/d/1BwmRay_mk8XXrih0A-BHnrwLUdc2zIPT/view",
      link: null
    },
    {
      role: "Treasurer",
      organization: "IEEE ENIT Student Branch",
      period: "2024",
      description: "Managed branch finances and budget planning for various technical and educational events.",
      certificate: "https://drive.google.com/file/d/1SVIYrxg599rSfPeDMPAn44TlmaOULM6m/view",
      link: null
    },
    {
      role: "Vice Chair",
      organization: "IEEE WIE Annual Congress of Tunisia",
      period: "Oct 11-12, 2025",
      description: "Co-organizing one of the biggest congresses in Tunisia focused on 'Women Leading the Green Revolution' at Hotel Laico Hammamet.",
      certificate: null,
      link: "https://www.facebook.com/profile.php?id=100084776743566"
    },
    {
      role: "Chair",
      organization: "Tunisian Engineer Day 7.0",
      period: "2024",
      description: "Led a national event focused on innovation and growth in Tunisia, featuring industry leaders and technical workshops.",
      certificate: null,
      link: "https://www.facebook.com/tuned.6.1"
    }
  ];

  const skillsByCategory = {
    "ML/DL Libraries & Frameworks": [
      { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
      { name: "Scikit-learn", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Hugging Face", logo: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg" },
      { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" }
    ],
    "Data Analysis & ML": [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Jupyter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "MATLAB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matlab/matlab-original.svg" },
      { name: "Apache Spark", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachespark/apachespark-original.svg" }
    ],
    "Web Development": [
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "Streamlit", logo: "https://streamlit.io/images/brand/streamlit-mark-color.svg" },
      { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" }
    ],
    "Programming Languages": [
      { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
      { name: "PL/SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg" },
      { name: "Arduino", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" }
    ],
    "Database Management": [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" }
    ],
    "DevOps & Version Control": [
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
      { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
      { name: "GitHub Actions", logo: "https://github.githubassets.com/images/modules/site/features/actions-icon-actions.svg" }
    ],
    "Other Tools & Technologies": [
      { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Bash", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" },
      { name: "LaTeX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" }
    ]
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-950 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? (isDark ? 'bg-gray-950/95 backdrop-blur-xl shadow-lg border-b border-gray-800' : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200') : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button onClick={() => scrollToSection('home')} className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Ayoub</span>
              <span className={isDark ? 'text-gray-300' : 'text-gray-700'}> Abidi</span>
            </button>
            
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Education', 'IEEE', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-lg transition-all ${activeSection === item.toLowerCase() ? 'bg-blue-500/10 text-blue-500' : isDark ? 'text-gray-400 hover:text-gray-100 hover:bg-gray-800/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <button onClick={() => setIsDark(!isDark)} className={`p-2.5 rounded-lg transition-all ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'}`}>
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button className="md:hidden p-2.5 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${isDark ? 'bg-gray-900 border-t border-gray-800' : 'bg-white border-t border-gray-200'}`}>
            <div className="px-4 py-4 space-y-2">
              {['Home', 'About', 'Education', 'IEEE', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className={`block w-full text-left px-4 py-3 rounded-lg ${activeSection === item.toLowerCase() ? 'bg-blue-500/10 text-blue-500' : isDark ? 'hover:bg-gray-800/50' : 'hover:bg-gray-100'}`}>
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${isDark ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-100 text-blue-600 border border-blue-200'}`}>
                  Available for Internships
                </span>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Ayoub Abidi</span>
                </h1>
                
                <p className="text-2xl md:text-3xl font-semibold text-gray-400">Data Science & AI Enthusiast</p>
                
                <p className={`text-lg md:text-xl leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Final-year ICT Engineering student at ENIT, passionate about transforming data into meaningful insights through Machine Learning and AI.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button onClick={() => scrollToSection('contact')} className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all hover:scale-105 flex items-center">
                  Get In Touch
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <a href="/CV.pdf" download>
                <button className={`px-8 py-4 rounded-xl font-semibold border-2 transition-all hover:scale-105 flex items-center ${isDark ? 'border-gray-700 hover:bg-gray-800' : 'border-gray-300 hover:bg-gray-100'}`}>
                  <Download size={20} className="mr-2" />
                  Download CV
                </button>
                </a>
              </div>

              <div className="flex gap-4">
                <a href="https://github.com/Ayoub-ABIDI" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}>
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ayoub-abidi-97605028a/" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}>
                  <Linkedin size={24} />
                </a>
                <a href="mailto:abidiayoub464@gmail.com" className={`p-4 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}>
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full aspect-square max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                <div className={`relative w-full h-full rounded-3xl overflow-hidden border-4 ${isDark ? 'border-gray-800' : 'border-gray-200'} shadow-2xl`}>
                  <div className={`w-full h-full flex items-center justify-center ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <div className="text-center p-8">
                      <img src='/myphoto.png' alt="Ayoub Abidi" className="w-full h-full object-cover rounded-3xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className={`text-lg leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                <p className="mb-6">
                  I'm an <span className="font-semibold text-blue-500">energetic, creative, and open-minded ICT engineering student</span> at the National Engineering School of Tunis (ENIT), pursuing both my Engineering degree in Telecommunications with a Data Science specialization and a Master's in Information Processing Technology focused on health and bio-data applications.
                </p>
                
                <p className="mb-6">
                  My journey is driven by an insatiable <span className="font-semibold text-purple-500">curiosity and passion for problem-solving</span>. I believe data holds the key to understanding complex phenomena and creating innovative solutions. Whether predicting epileptic seizures or building intelligent learning systems, I'm motivated by turning raw data into actionable insights.
                </p>
                
                <p className="mb-6">
                  I've developed expertise in <span className="font-semibold text-blue-500">Machine Learning, Deep Learning, and Signal Processing</span>. From research at RISC Laboratory on EEG classification to my internship at Talan Consulting developing AI-powered systems, I consistently seek opportunities to apply cutting-edge techniques to real-world problems.
                </p>
                
                <p>
                  As <span className="font-semibold text-purple-500">Vice President of IEEE ENIT Student Branch</span>, I've learned the value of leadership and teamwork. I believe the best innovations come from diverse perspectives and collaborative efforts.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-6">
                <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'} hover:scale-105 transition-transform`}>
                  <MapPin className="text-blue-500 mb-3" size={28} />
                  <div className="font-semibold text-lg mb-1">Location</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Tunis, Tunisia</div>
                </div>
                
                <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'} hover:scale-105 transition-transform`}>
                  <GraduationCap className="text-purple-500 mb-3" size={28} />
                  <div className="font-semibold text-lg mb-1">Education</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>National Engineering School of Tunis</div>
                </div>
                
                <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'} hover:scale-105 transition-transform`}>
                  <Award className="text-green-500 mb-3" size={28} />
                  <div className="font-semibold text-lg mb-1">IEEE Leader</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Vice President IEEE ENIT Student Branch</div>
                </div>
                
                <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'} hover:scale-105 transition-transform`}>
                  <Briefcase className="text-pink-500 mb-3" size={28} />
                  <div className="font-semibold text-lg mb-1">Focus</div>
                  <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>AI & Data Science</div>
                </div>
              </div>

              <div className="pt-6">
                <h3 className="font-semibold text-xl mb-4">Languages</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['Arabic (Native)', 'English (B2)', 'French (B2)', 'German (A2)'].map(lang => (
                    <div key={lang} className={`px-4 py-3 rounded-xl text-center text-sm font-medium ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
                <h3 className="font-semibold text-xl mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="text-blue-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Graduation</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>2026</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building2 className="text-purple-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Institution</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>ENIT, Tunisia</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Code2 className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <div className="font-medium">Interests</div>
                      <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>ML, AI, Signal Processing</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`p-6 rounded-2xl ${isDark ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/30' : 'bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200'}`}>
                <Award className="text-yellow-500 mb-4" size={32} />
                <h3 className="font-semibold text-xl mb-3">IEEE Volunteer</h3>
                <div className="space-y-2 text-sm">
                  <div>Vice President, IEEE ENIT (2025)</div>
                  <div>Treasurer, IEEE ENIT (2024)</div>
                  <div>Project Manager, TUNED 7.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Journey</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} hover:shadow-xl transition-shadow`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                    <div className="text-blue-500 font-semibold text-lg mb-2">{edu.degree}</div>
                    <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{edu.description}</p>
                  </div>
                  <div className={`mt-2 md:mt-0 px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'} self-start`}>
                    {edu.period}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ieee" className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              IEEE <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Leadership</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {ieeeJourney.map((role, index) => (
              <div key={index} className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} hover:shadow-xl transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{role.role}</h3>
                    <div className="text-purple-500 font-semibold">{role.organization}</div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-3`}>{role.period}</div>
                  </div>
                  <Users className="text-purple-500 flex-shrink-0" size={32} />
                </div>
                
                <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{role.description}</p>
                
                <div className="flex gap-3">
                  {role.certificate && (
                    <a href={role.certificate} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center ${isDark ? 'bg-purple-500/10 text-purple-400 hover:bg-purple-500/20' : 'bg-purple-100 text-purple-600 hover:bg-purple-200'}`}>
                      <Trophy size={16} className="mr-2" />
                      Certificate
                    </a>
                  )}
                  {role.link && (
                    <a href={role.link} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center ${isDark ? 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'}`}>
                      <ExternalLink size={16} className="mr-2" />
                      Visit Website
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} hover:shadow-xl transition-shadow`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Software & AI Engineering Intern</h3>
                  <div className="text-blue-500 font-semibold">Talan Consulting</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tunis, Tunisia</div>
                </div>
                <div className={`mt-2 md:mt-0 px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                  June - August 2025
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Developed a full-stack intelligent log analysis platform for automated log parsing, anomaly detection, and error/warning prediction.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Integrated generative AI and RAG techniques for analyzing unstructured logs and building AI assistants/chatbots using Chainlit.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Built a robust backend with Spring Boot, a responsive frontend with Next.js, and managed data storage using PostgreSQL.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Spring Boot', 'Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AI'].map(tech => (
                  <span key={tech} className={`px-3 py-1 text-xs rounded-full ${isDark ? 'bg-gray-900 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} hover:shadow-xl transition-shadow`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Research Intern - Deep Learning</h3>
                  <div className="text-purple-500 font-semibold">RISC Laboratory, ENIT</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tunis, Tunisia</div>
                </div>
                <div className={`mt-2 md:mt-0 px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-purple-500/10 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                  Oct 2024 - Apr 2025
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Conducted a comparative study of deep learning models (ANN, CNN, CNN-LSTM) for EEG-based epileptic patient classification.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Implemented preprocessing and feature extraction pipelines to improve model accuracy and reliability.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Developed a Streamlit interface for real-time EEG analysis to support clinical decision-making.</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {['PyTorch', 'TensorFlow', 'Streamlit', 'Signal Processing', 'CNN', 'LSTM'].map(tech => (
                  <span key={tech} className={`px-3 py-1 text-xs rounded-full ${isDark ? 'bg-gray-900 text-purple-400' : 'bg-purple-50 text-purple-600'}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'} hover:shadow-xl transition-shadow`}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Telecommunications Network Intern</h3>
                  <div className="text-green-500 font-semibold">Tunisia Telecom</div>
                  <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Tunis, Tunisia</div>
                </div>
                <div className={`mt-2 md:mt-0 px-4 py-2 rounded-lg text-sm font-medium ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-100 text-green-600'}`}>
                  June 2024
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Gained hands-on experience with GSM infrastructure serving 5M+ subscribers</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Participated in network maintenance and troubleshooting for 2G/3G/4G networks</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className={`rounded-2xl overflow-hidden border transition-all hover:scale-105 hover:shadow-xl ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                      <Github size={20} />
                    </a>
                  </div>
                  <p className={`mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className={`px-3 py-1 text-xs rounded-full ${isDark ? 'bg-gray-900 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="space-y-12">
            {Object.entries(skillsByCategory).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-2xl font-bold mb-6 text-center">{category}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className={`flex flex-col items-center p-4 rounded-xl transition-all hover:scale-110 ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
                      <img src={skill.logo} alt={skill.name} className="w-10 h-10 mb-2" />
                      <span className="font-medium text-center text-sm">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className={`py-24 ${isDark ? 'bg-gray-900/50' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Connect!</h3>
                <p className={`text-lg mb-8 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-500 mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Email</div>
                    <a href="mailto:abidiayoub464@gmail.com" className={`hover:text-blue-500 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      abidiayoub464@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapPin className="text-purple-500 mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>Tunis, Tunisia</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Phone className="text-green-500 mr-4" size={24} />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className={isDark ? 'text-gray-400' : 'text-gray-600'}>+216 94 123 293</div>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a href="https://github.com/Ayoub-ABIDI" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}>
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/ayoub-abidi-97605028a/" target="_blank" rel="noopener noreferrer" className={`p-4 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}>
                  <Linkedin size={24} />
                </a>
                <a href="mailto:abidiayoub464@gmail.com" className={`p-4 rounded-xl ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all hover:scale-110`}>
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gray-800 border border-gray-700' : 'bg-gray-100 border border-gray-200'}`}>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input type="text" className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input type="text" className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`} />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={5} className={`w-full px-4 py-3 rounded-lg border ${isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-300'}`}></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-blue-500/25 transition-all">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className={`py-8 border-t ${isDark ? 'border-gray-800 bg-gray-950' : 'border-gray-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            © 2025 Ayoub Abidi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;