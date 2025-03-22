"use client"

import Image from "next/image"
import { MoveRight, Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Server } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
}

const slideUp = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const skillLevels = {
  "Machine Learning": 90,
  Python: 85,
  Django: 80,
  React: 75,
  MongoDB: 70,
  "Prompt Engineering": 95,
  C: 65,
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted dark:from-background dark:to-secondary/30 overflow-hidden">
      <ThemeToggle />

      {/* Animated background elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 dark:bg-primary/5"
            style={{
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-8 relative">
        <motion.div className="flex-1" initial="hidden" animate="visible" variants={fadeIn}>
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent"
            variants={slideUp}
          >
            Vasanth A
          </motion.h1>
          <motion.h2 className="text-xl md:text-2xl mb-6 text-slate-700 dark:text-slate-300" variants={slideUp}>
            B.Tech in AI & ML | Founder at Cool Wave Media
          </motion.h2>
          <motion.p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl" variants={slideUp}>
            Passionate about Artificial Intelligence, Machine Learning, and GenAI. Building innovative solutions and
            creating impact through technology.
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={slideUp}>
            <Button className="group bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/20 hover:shadow-xl transition-all">
              Download Resume
              <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 dark:border-primary dark:text-primary-foreground dark:hover:bg-primary/20"
            >
              Contact Me
            </Button>
          </motion.div>
          <motion.div className="flex gap-4 mt-8" variants={slideUp}>
            <Link
              href="https://github.com"
              className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:avasanth081@gmail.com"
              className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </Link>
            <Link
              href="tel:8248161233"
              className="text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors"
            >
              <Phone className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl shadow-primary/20 animate-float">
            <Image src="/profile-image.png" alt="Vasanth A" fill className="object-cover" priority />
          </div>
        </motion.div>
      </section>

      {/* Resume Section */}
      <section className="container mx-auto px-4 py-16 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-blue-700 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            My Resume
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <Tabs defaultValue="education" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8 bg-muted/50 backdrop-blur-sm">
            <TabsTrigger
              value="education"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Education
            </TabsTrigger>
            <TabsTrigger
              value="experience"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Experience
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="skills"
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              Skills
            </TabsTrigger>
          </TabsList>

          <TabsContent value="education" className="space-y-6">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                    Academic Record
                  </h3>
                  <motion.div className="space-y-4" variants={staggerContainer} initial="hidden" animate="visible">
                    <motion.div
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      variants={slideUp}
                    >
                      <div>
                        <h4 className="font-medium">B.Tech (AI & ML)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">SNS College of Technology</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary hover:bg-primary/90">CGPA: 8.24</Badge>
                        <span className="text-sm">2026</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      variants={slideUp}
                    >
                      <div>
                        <h4 className="font-medium">Class XII</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Sri Vijay Vidyalaya Matric Higher Secondary School
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary hover:bg-primary/90">83.16%</Badge>
                        <span className="text-sm">2022</span>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex flex-col md:flex-row md:items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      variants={slideUp}
                    >
                      <div>
                        <h4 className="font-medium">Class X</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Sri Vijay Vidyalaya Matric Higher Secondary School
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary hover:bg-primary/90">85.80%</Badge>
                        <span className="text-sm">2020</span>
                      </div>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience" className="space-y-6">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Internship Experience
                  </h3>
                  <motion.div className="space-y-6" variants={staggerContainer} initial="hidden" animate="visible">
                    <motion.div className="p-4 rounded-lg hover:bg-muted/50 transition-colors" variants={slideUp}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="font-medium flex items-center">
                          <Code className="h-4 w-4 mr-2 text-primary" />
                          Cognifyz - Android App Development
                        </h4>
                        <span className="text-sm">March'24 - April'24</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Developed an Android app using Java/Kotlin in Android Studio, implementing features like
                        authentication, real-time data updates via REST APIs, and local storage. Focused on
                        user-friendly design with Material Design.
                      </p>
                    </motion.div>

                    <motion.div className="p-4 rounded-lg hover:bg-muted/50 transition-colors" variants={slideUp}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="font-medium flex items-center">
                          <Database className="h-4 w-4 mr-2 text-primary" />
                          Mindnotix - Machine Learning
                        </h4>
                        <span className="text-sm">July'24 - Aug'24</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Developed machine learning models using Python and libraries like Scikit-Learn and TensorFlow to
                        analyze data and make predictions. Focused on feature engineering, model tuning, and evaluation
                        to improve accuracy.
                      </p>
                    </motion.div>

                    <motion.div className="p-4 rounded-lg hover:bg-muted/50 transition-colors" variants={slideUp}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="font-medium flex items-center">
                          <Server className="h-4 w-4 mr-2 text-primary" />
                          SNS Ihub - Intern
                        </h4>
                        <span className="text-sm">Sep'24 - Dec'24</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Working on a real-time client project using GenAI and Python, with experience in AI model
                        deployment and real-time data integration.
                      </p>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Positions of Responsibility
                  </h3>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                        <h4 className="font-medium">Founder - Cool Wave Media - Digital Marketing Agency</h4>
                        <span className="text-sm">2023 - Present</span>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Providing tailored digital marketing solutions focused on social media, SEO, content strategy,
                        and analytics to international clients. Leveraging Microsoft resources and emerging technologies
                        like Generative AI to optimize marketing campaigns.
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="projects" className="space-y-6">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                    Live Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="border border-primary/20 p-5 rounded-lg hover:shadow-xl transition-all duration-300 project-card bg-white dark:bg-secondary/50 group"
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                          Stock Price Prediction - LSTM
                        </h4>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground">
                          2024
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Built a stock price prediction model using machine learning to analyze historical data and
                        forecast future price trends. Optimized the model's accuracy by selecting key features and
                        evaluating with metrics like Mean Absolute Error.
                      </p>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-8 w-8 rounded-full"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </motion.div>

                    <motion.div
                      className="border border-primary/20 p-5 rounded-lg hover:shadow-xl transition-all duration-300 project-card bg-white dark:bg-secondary/50 group"
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                          Air Quality Prediction
                        </h4>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground">
                          2023
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Developed an air quality prediction model using machine learning to analyze historical air
                        quality data and forecast pollution levels. Improved model accuracy by preprocessing data,
                        selecting important features, and evaluating with metrics.
                      </p>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-8 w-8 rounded-full"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </motion.div>

                    <motion.div
                      className="border border-primary/20 p-5 rounded-lg hover:shadow-xl transition-all duration-300 project-card bg-white dark:bg-secondary/50 group"
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                          PARKNXT
                        </h4>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground">
                          2023
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Designed a smart parking system using sensors and real-time data to monitor available parking
                        spaces and guide users to open spots. Enhanced user experience by implementing features like
                        space reservation, occupancy tracking, and app-based navigation to optimize parking efficiency.
                      </p>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-8 w-8 rounded-full"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </motion.div>

                    <motion.div
                      className="border border-primary/20 p-5 rounded-lg hover:shadow-xl transition-all duration-300 project-card bg-white dark:bg-secondary/50 group"
                      whileHover={{ y: -10, transition: { duration: 0.2 } }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                          Patient Health Assist
                        </h4>
                        <Badge className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground">
                          2022
                        </Badge>
                      </div>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                        Developed a Patient Health Assist app that provides reminders for medication schedules, helping
                        users manage their health more effectively. Included features like customizable alarms,
                        medication tracking, and daily health tips to support users in maintaining consistent treatment
                        routines.
                      </p>
                      <div className="flex justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-primary hover:text-primary/80 hover:bg-primary/10 p-0 h-8 w-8 rounded-full"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="sr-only">View project</span>
                        </Button>
                      </div>
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                    Academic Achievements
                  </h3>
                  <motion.ul
                    className="space-y-3 list-none pl-0"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Infosys Spring Board - Database Management System Part-1 (2024)",
                      "Infosys Spring Board - Database Management System Part-2 (2024)",
                      "Google Cloud Computing - NPTEL (2024)",
                      "Paper Presentation - SNSCT (2022)",
                      "Patent Published - AR Clothes (2023)",
                      "Patent Published - Parknxt (2024)",
                    ].map((achievement, index) => (
                      <motion.li
                        key={index}
                        className="flex items-center p-3 rounded-lg hover:bg-muted/50 transition-colors"
                        variants={slideUp}
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                      >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mr-3"></div>
                        <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    Giving Back to Society
                  </h3>
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    {[
                      "Planted trees",
                      "Donating Blood",
                      "Road Awareness Program",
                      "Visited Orphanage and donated dress & books",
                    ].map((activity, index) => (
                      <motion.div
                        key={index}
                        className="bg-muted/30 p-4 rounded-lg flex items-center hover:bg-muted/50 transition-colors"
                        variants={slideUp}
                        whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                      >
                        <div className="w-3 h-3 rounded-full bg-primary mr-3 animate-pulse-slow"></div>
                        <span className="text-slate-700 dark:text-slate-300">{activity}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <motion.div initial="hidden" animate="visible" variants={fadeIn}>
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="h-2 bg-gradient-to-r from-primary to-blue-700"></div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Skills & Interests
                  </h3>

                  <motion.div
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="font-medium mb-4 text-primary">Technical Skills</h4>
                    <div className="space-y-5">
                      {Object.entries(skillLevels).map(([skill, level], index) => (
                        <motion.div key={skill} className="space-y-1">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{skill}</span>
                            <span className="text-sm text-slate-500">{level}%</span>
                          </div>
                          <div className="skill-bar">
                            <motion.div
                              className="skill-progress"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${level}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            ></motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-medium mb-2 text-primary">Interests</h4>
                      <div className="flex flex-wrap gap-2">
                        {["Artificial Intelligence", "Machine Learning", "Gen AI"].map((interest) => (
                          <motion.div key={interest} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                            <Badge
                              variant="outline"
                              className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground border-primary/30 px-3 py-1 text-sm"
                            >
                              {interest}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-medium mb-2 text-primary">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {["API Integration", "Python Modules", "Figma"].map((tool) => (
                          <motion.div key={tool} whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
                            <Badge
                              variant="outline"
                              className="bg-primary/10 text-primary hover:bg-primary/20 dark:bg-primary/20 dark:text-primary-foreground border-primary/30 px-3 py-1 text-sm"
                            >
                              {tool}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      className="space-y-4 md:col-span-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <h4 className="font-medium mb-2 text-primary">Hobbies</h4>
                      <div className="flex flex-wrap gap-3">
                        {["Cricket", "Content Writing", "Mentoring"].map((hobby, index) => (
                          <motion.div
                            key={hobby}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="bg-gradient-to-r from-primary/80 to-blue-600/80 text-white rounded-full px-4 py-2 text-sm shadow-md"
                          >
                            {hobby}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary/90 to-blue-700/90 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              className="mb-4 md:mb-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold">Vasanth A</h3>
              <p className="text-blue-100">B.Tech in AI & ML</p>
            </motion.div>
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="mailto:avasanth081@gmail.com" className="text-blue-100 hover:text-white transition-colors">
                avasanth081@gmail.com
              </Link>
              <Link href="tel:8248161233" className="text-blue-100 hover:text-white transition-colors">
                8248161233
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="mt-6 text-center text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>&copy; {new Date().getFullYear()} Vasanth A. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </main>
  )
}

