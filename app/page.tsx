import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Download, ExternalLink } from 'lucide-react'
import EmailDialog from './components/EmailDialog'
import DownloadResume from './components/DownloadResume'

export default function Home() {
  const projects = [
    {
      title: "DermaAI+",
      description: "AI-powered skin condition prediction and doctor recommendation system",
      technologies: ["TensorFlow", "AWS (SageMaker, OpenSearch, API Gateway, Lambda)", "Websockets"],
      details: [
        "Developed a convolutional neural network achieving 76% accuracy in skin condition prediction",
        "Implemented real-time chat feature using API Gateway and websockets",
        "Utilized AWS services for enhanced functionality and scalability"
      ],
      github: "https://github.com/yond5413/DermaAI"
    },
    {
      title: "Phishing Website Detection",
      description: "Machine learning system for detecting and classifying phishing websites",
      technologies: ["Python", "XGBoost", "Jupyter", "Machine Learning"],
      details: [
        "Implemented multiple ML models including XGBoost and CNN for phishing detection",
        "Developed feature extraction techniques for website classification",
        "Collaborated with team to analyze and process large datasets of website characteristics",
        "Created comprehensive documentation and analysis in Jupyter notebooks"
      ],
      github: "https://github.com/larakaracasu/Phishing-Websites"
    },
    {
      title: "Smart Photo Album",
      description: "Photo album management system with voice and text search capabilities",
      technologies: ["AWS (Codepipeline, CloudFormation, Lambda)", "CI/CD", "Infrastructure as Code"],
      details: [
        "Implemented picture uploads with label metadata and image search feature",
        "Incorporated CI/CD via AWS Codepipeline, decreasing setup time by 40%",
        "Delivered Infrastructure as Code using AWS CloudFormation for automated deployment"
      ],
      github: "https://github.com/yond5413/smart-photo-album"
    },
    {
      title: "Ecommerce Shop Application",
      description: "Full-featured ecommerce application with vendor management",
      technologies: ["Python", "Flask", "PostgreSQL", "Google Cloud Platform"],
      details: [
        "Built backend processing all store operations and transaction logging",
        "Developed vendor and product management features for store owners",
        "Designed and implemented a comprehensive database schema for products, orders, users, and vendors",
        "Deployed via Google Cloud Platform for improved scalability"
      ],
      github: "https://github.com/yond5413/ecommerce-shop"
    },
    {
      title: "AMADS: Autonomous Mapping and Adversarial Detection System",
      description: "Robot simulation for autonomous mapping and object detection",
      technologies: ["ROS", "Gazebo", "Python"],
      details: [
        "Led development of maze design in the simulation",
        "Researched ROS Gazebo mechanics for realistic environment simulation",
        "Enhanced autonomous capabilities for rescue and reconnaissance missions"
      ],
      github: "https://sites.psu.edu/lfshowcasesp21/2021/04/29/amads-autonomous-mapping-and-adversarial-detection/"
    },
     {
      title: "DDP-Resnet18: Distributed Training of ResNet-18",
      description: "Implementation of Distributed Data Parallel (DDP) for training ResNet-18 on CIFAR-10 using PyTorch",
      technologies: ["PyTorch", "Distributed Data Parallel (DDP)", "CIFAR-10", "Multi-GPU Training"],
      details: [
      "Implemented Distributed Data Parallel (DDP) for efficient multi-GPU training",
      "Trained ResNet-18 on the CIFAR-10 dataset, achieving competitive accuracy benchmarks",
      "Designed a modular code structure with separate components for training, model definition, and utilities",
      "Optimized the training pipeline for multi-GPU environments, reducing training time significantly",
      "Demonstrated proficiency in distributed deep learning and modern PyTorch practices"
      ],
      github: "https://github.com/yond5413/DDP-Resnet18/tree/main"
      }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-teal-500 to-green-500 text-white">
      <div className="container mx-auto px-4 py-16">
        <section className="flex flex-col items-center mb-16 pt-16">
          <div className="w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-xl">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/me.jpg-oJM6lpIal0RoQ8jtRZ1v6BPKuVE2wq.jpeg"
              alt="Yonathan Daniel"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </div>
          <h1 className="text-5xl font-bold mb-4 text-center text-white">
            Hi, I'm Yonathan Daniel
          </h1>
          <p className="text-2xl mb-8 text-center max-w-2xl text-white">
            Engineering Solutions, One Line of Code at a Time
          </p>
        </section>

        <section id="about" className="mb-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-8 shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-white">About Me</h2>
          <p className="text-lg mb-4 text-white text-opacity-90">
            As a software developer pursuing my Master of Science in Computer Science at Columbia University, I specialize in backend development
            and cloud technologies. With experience in AWS, machine learning, and full-stack development, I'm passionate about creating
            efficient and scalable solutions.
          </p>
          <p className="text-lg text-white text-opacity-90">
            My background includes significant projects in healthcare AI, e-commerce, and autonomous systems, demonstrating my ability
            to tackle complex technical challenges and deliver innovative solutions.
          </p>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg border-none text-white">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription className="text-white text-opacity-70">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white text-opacity-90 mb-2">Technologies used: {project.technologies.join(', ')}</p>
                  <ul className="list-disc list-inside mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-white text-opacity-90 text-sm">{detail}</li>
                    ))}
                  </ul>
                  <div className="flex space-x-2">
                    <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-500 focus:ring-0">
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> View Project
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {['JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'Git', 'AWS', 'Docker', 'TensorFlow', 'Flask', 'PostgreSQL', 'Google Cloud Platform'].map((skill) => (
              <div key={skill} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-lg text-center text-white">
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <EmailDialog />
            <DownloadResume />
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-500 focus:ring-0">
              <a href="https://www.linkedin.com/in/yonathan-daniel/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-500 focus:ring-0">
              <a href="https://github.com/yond5413" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

