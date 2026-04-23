import { TrainingSection } from './corporatTraining/TrainingSection'
import BaseLayout from '../BaseLayout'
const trainingData = [
  {
    title: 'Corporate Trainings',
    description:
      "Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company's goals and values.",
    items: [
      'Leadership Training',
      'Strategic Planning and Implementation',
      'Project Management',
      'Sustainability Training',
      'Customised Training',
    ],
    imageSrc: '/CT1.jpg',
    imageAlt: 'Team in a high-energy meeting with data visualization',
  },
  {
    title: 'Personalised Individual Training',
    description:
      "Begin a journey of lifelong learning and professional development with Tobams Group's diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today's professionals.",
    items: [
      'Leadership Development',
      'Soft Skills Development',
      'Industry Specific Knowledge',
      'Technical Skills Enhancement',
      'Time Management and Productivity',
      'Career Development',
    ],
    imageSrc: '/CT2.jpg',
    imageAlt: 'Professional woman focused in a training session',
    reverse: true,
  },
  {
    title: 'Capacity Development',
    description:
      'At Tobams Group, we empower individuals and organizations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:',
    items: [
      'Tailored Training Programs',
      'Expert-Led Workshops',
      'Personalized Mentorship',
      'Technical Skills Enhancement',
      'Collaborative Learning Environment',
      'Ongoing Support and Resources',
    ],
    imageSrc: '/CT3.jpg',
    imageAlt: 'Facilitator presenting data to a team',
  },
]

export default function CorporateTrainingContainer() {
  return (
    <BaseLayout>
      {trainingData.map((section, index) => (
        <TrainingSection
          key={index}
          title={section.title}
          description={section.description}
          items={section.items}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          reverse={section.reverse}
        />
      ))}
    </BaseLayout>
  )
}
